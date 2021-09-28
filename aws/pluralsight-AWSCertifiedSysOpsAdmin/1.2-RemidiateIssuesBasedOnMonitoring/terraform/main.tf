resource "aws_key_pair" "keypair" {
  key_name = "keypair"
  public_key = file("src/keypair.pub")
}

data "aws_ami" "amazon_linux_v2" {
  most_recent = true

  filter {
    name = "name"
    values = ["amzn2-ami-hvm-2*"]
  }

  filter {
    name = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["137112412989"] # Amazon

}

resource "aws_security_group" "lab_user_access" {
  name = "WebServers"

  ingress {
    description = "SSH from the world"
    from_port = 22
    to_port = 22
    protocol = "TCP"
    cidr_blocks = ["0.0.0.0/0"]
    self = true
  }

  ingress {
    description = "HTTP from the world"
    from_port = 80
    to_port = 80
    protocol = "TCP"
    cidr_blocks = ["0.0.0.0/0"]
    self = true
  }

  egress {
    description = "Unrestricted"
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

}

resource "aws_launch_configuration" "launch_config" {
  name_prefix   = "lc-"
  image_id      = data.aws_ami.amazon_linux_v2.id
  instance_type = var.instance_type
  user_data     = data.template_file.user_data.rendered
  security_groups = [aws_security_group.lab_user_access.id]
  key_name = aws_key_pair.keypair.id

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_autoscaling_group" "web_servers" {
  name                 = "MyASG"
  launch_configuration = aws_launch_configuration.launch_config.name
  min_size             = 1
  max_size             = 2
  availability_zones = var.availability_zones
  target_group_arns = [aws_lb_target_group.my_tg.arn]
  
  tag {
    key                 = "Name"
    value               = "ASG-WebServer"
    propagate_at_launch = true
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_autoscaling_policy" "my_as_policy" {
  name                   = "my-asg-policy"
  scaling_adjustment     = 1
  adjustment_type        = "ChangeInCapacity"
  cooldown               = 300
  autoscaling_group_name = aws_autoscaling_group.web_servers.name
}

data "template_file" "user_data" {
  template = file("src/user_data.tpl")
}


resource "aws_lb" "my_alb" {
  name               = "my-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.lab_user_access.id]
  subnets            = [aws_default_subnet.az1.id, aws_default_subnet.az2.id ]


}

resource "aws_lb_listener" "my_listener" {
  load_balancer_arn = aws_lb.my_alb.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.my_tg.arn
  }
}

resource "aws_default_vpc" "default" {
  tags = {
    Name = "Default VPC"
  }
}

resource "aws_default_subnet" "az1" {
  availability_zone = "us-east-1a"

  tags = {
    Name = "Default subnet for us-east-1a"
  }
}

resource "aws_default_subnet" "az2" {
  availability_zone = "us-east-1b"

  tags = {
    Name = "Default subnet for us-east-1b"
  }
}

resource "aws_lb_target_group" "my_tg" {
  deregistration_delay = 0
  name     = "my-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_default_vpc.default.id

  health_check {
    healthy_threshold = 2
    interval = 5
    timeout = 2
  }
}

provider "aws" {
  region = var.region
}

variable "region" {
  type = string
  default = "us-east-1"
}

variable "availability_zones" {
  type = list(string)
  default = ["us-east-1a", "us-east-1b"]
}

variable "ec2_name" {
  type = string
  default = "ASG-WebServer"
}

variable "instance_type" {
  type = string
  default = "t3.nano"
}


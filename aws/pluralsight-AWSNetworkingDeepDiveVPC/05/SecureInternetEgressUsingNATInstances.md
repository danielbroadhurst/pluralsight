# Secure Internet Egress Using NAT Instances

## Configure Routing for NAT Instance

VPC Dashboard
  - Create Internet Gateway
    - Name: shared-igw
    - Actions: Attach to VPC - shared
  - Create Public Subnet
    - VPC: shared
    - Name: nat-pub
    - CIDR: 10.2.254.0/24
  - Create Route Table
    - Name: nat-pub
    - VPC: shared
  Add Route:
    - 0.0.0.0/0
    - Target: shared-igw
  Edit Subnet Associations
    - Associate: nat-pub

## Configuring a NAT Instance

EC2 Dashboard
  - Allocate Elastic IP Address
  - Create Nat Instance
    - AMI: amzn-ami-vpc-nat (Community AMI)
    - Instance Type: ts.micro
    - Network: shared-vpc
    - Subnet: nat-pub
    - Network Interface Primary IP: 10.2.254.254
    - Security Group
      - Name: Nat Instance
      - SSH (Your IP)
      - Add Rule: All Traffic, 10.0.0.0/8, 192.168.0.0/16 (VPC / On-prem IP)
  - Disable 'Source / destination check'
    -  EC2 Actions, Networking, Source / destination check - Check Stop & Save
  - Assign the Elastic IP to the Nat Instance

## Configuring Routing for a NAT Client

VPC Dashboard
  - Edit shared routes
  - Add Route - Destination: 0.0.0.0/0, Instance: Nat Instance

## Using a Bastion Host

  - ssh onto the NAT Instance
  - copy and paste a private key into a .pem file
  - chmod go -rw key.pem
  - ssh onto the db instance
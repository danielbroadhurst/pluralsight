# Creating Secure and Scalable VPCs

## Why use Separate Public / Private VPC
- Isolate Instances 
  - from the Internet
  - other instances
  - on-prem networks
- Scalability
- Default is usually the Enemy

## Public VPC
- Public VPC
  - Name: web-vpc
  - CIDR: 10.1.0.0/16
- Public Subnet: 
  - VPC: web-vpc
  - CIDR: 10.1.254.0/24
  - Zone: eu-west-2a
- Route Table:
  - Name: web-pub
  - VPC: web-vpc
  - Edit Subnet Associations:
    - Associate subnet (10.1.254.0/24)
- Internet Gateway
  - Name: wed-igw
  - Attach to VPC: web-vpc
  - Edit Route Table
    - Destination: 0.0.0.0/0, Target:igw
    - Destination: ::0/0, Target:igw (ipv6)
- Security Group
  - Name: web-pub-sg
  - VPC: web-vpc
  - SSH: Your IP
  - HTTP/80: 0.0.0.0/0
- Network Interface
  - Name: www1 eth0
  - Subnet: web-pub
  - IP Address: 10.1.254.10
  - Security Group: web-pub-sg
- Elastic IP Address
  - Allocate IP Address
  - Network Interface
    - Associate IP Address to www1 eth0

## Private VPC
- Private VPC
  - Name: shared-vpc
  - CIDR: 10.2.0.0/16
- Private Subnet: 
  - VPC: shared-vpc
  - CIDR: 10.2.2.0/24
  - Zone: eu-west-2a
- Route Table:
  - Name: shared
  - VPC: shared-vpc
  - Edit Subnet Associations:
    - Associate subnet (10.2.2.0/24)
- Security Group
  - Name: database-sg
  - VPC: shared-vpc
  - SSH: 192.168.0.0/16, 10.2.0.0/16
  - MySQL: 10.1.254.0/24
  - ICMP: 0.0.0.0/0, ::0/0 ??

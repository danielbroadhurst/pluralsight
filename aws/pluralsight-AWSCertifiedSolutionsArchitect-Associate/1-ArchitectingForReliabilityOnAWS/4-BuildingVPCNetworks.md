# Building Virtual Private Cloud (VPC) Networks

VPC contains one or more subnets.
  - A subnet exists in an availabilty zone
  - An instance exists in a subnet

Redundancy is achieved by having instances in multiple subnets in different zones.

## Allocating an Elastic IP Address

```bash
aws ec2 allocate-address
```
To release:
```bash
aws ec2 release-address --allocation-id <AllocationId>
```

## Global Accelerator

Static IP addresses are not tied to an AWS Region

Advertised from points-of-presence (POPs)

Connections to a Global Accelerator forwards connections to AWS Resources

## Creating a VPC

VPC Architecture:
  - 2 Availability Zones
  - Public / Private Subnet

VPC Dashboard:
  - Create a VPC
  - Use Wizard to Create VPC with Public / Private Subnets
  - IPv4: 10.0.0.0/16
  - Public Subnet IPv4: 10.0.10.0/24
  - Private Subnet IPv4: 10.0.20.0/24
  - Availability Zone (Both): eu-west-2a
  - Elastic IP Allocation: Choose an IP
  - Create VPC

NAT Gateway has a Public / Private Interface. Instances in a private subnet sends internet bound traffic to a NAT Gateway. The NAT then sends this traffic to the internet gateway.

## Creating Public / Private Subnets

VPC Dashboard - Subnet Tab:
  - Create new Subnet (Public)
  - VPC: One from Above
  - Availability Zone: eu-west-2b
  - Public Subnet IPv4: 10.0.11.0/24
  - Edit Route Table Association: Change to Public one from VPC
  - Create new Subnet (Private)
  - VPC: One from Above
  - Availability Zone: eu-west-2b
  - Public Subnet IPv4: 10.0.21.0/24

## Launching an Instance into a Public Subnet

Command to get the SubnetId of a subnet using the cidr-block.
```bash
aws ec2 describe-subnets --filters Name=cidr-block,Values="10.0.11.0/24"
```
To launch an instance using the CLI
```bash
aws ec2 run-instances --subnet-id <"SubnetId"> --image-id <"AMI ID"> --instance-type <"InstanceType"> --key-name <"KeyName">
```
To associate an elastic IP address to an EC2
```bash
aws ec2 associate-address --instance-id <"InstanceId"> --allocation-id <"ElasticIPAllocationId">
```
To Terminate an EC2
```bash
aws ec2 terminate-instances --instance-id <"InstanceId">
```

## Direct Connect and Transit Gateway

Direct Connect gives you a low-latency connection to an AWS region. Bypasses the internet. There are two types:
  - Dedicated: Physical Connection - 1 or 10 Gbps connection
  - Hosted Connection - Last mile connection. 50 Mbps

VPN Connection is an encrypted IPsec connection over the intenet. Unpredictable latency and can be implemented in two ways:
  - Virtual Private Gateway: VPN Tunnel with only one VPC - Doesn't Scale Well
  - Transit Gateway: Connects VPCs and on-premises networks, Mutliple VPC connections

  ## Connecting VPCs using a Transit Gateway

Create a transit gateway
```bash
aws ec2 create-transit-gateway
```
Create 2 VPCs each with a single subnet
```bash
aws ec2 create-vpc --cidr-block 127.27.0.0/16
aws ec2 create-subnet --vpc-id <"VPCId"> --cidr-block 127.27.1.0/24 --availability-zone eu-west-2a

aws ec2 create-vpc --cidr-block 127.28.0.0/16
aws ec2 create-subnet --vpc-id <"VPCId"> --cidr-block 127.28.1.0/24 --availability-zone eu-west-2b
```
Connect VPCs to Transit Gateway
```bash
aws ec2 create-transit-gateway-vpc-attachment --transit-gateway-id <"TransitGatewayID"> --vpc-id <"VPCId"> --subnet-ids <"SubnetId">
```
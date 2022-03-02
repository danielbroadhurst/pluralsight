# Using a Transit VPC to Connect On-premises and Cloud Resources

## Creating a Transit VPC

## Transit VPC
- Transit VPC
  - Name: transit-vpc
  - CIDR: 10.3.0.0/16
- Transit Subnet: 
  - Name: transit
  - VPC: transit-vpc
  - CIDR: 10.3.0.0/24
  - Zone: eu-west-2a
- Internet Gateway
  - Name: transit-igw
  - Attach to VPC: transit-vpc
- Route Table:
  - Name: transit
  - VPC: transit-vpc
  - Edit Route Table
    - Destination: 0.0.0.0/0, Target:igw
    - Destination: ::0/0, Target:igw (ipv6)
  - Edit Subnet Associations:
    - Associate subnet (10.3.0.0/24)

## Launching the CISCO CSR 1000V

EC2 Dashboard
  - Launch Instance
  - AMI: (csr) 1000v
  - Type: t2.medium
  - Network: transit-vpc
  - Subnet: transit
  - IP: 10.3.0.10
  - Security Group:
    - SSH: (Your IP)
  - Assign an Elastic IP Address

## Creating a VPN Connection between two VPC

VPC Dashboard
  - Create Virtual Private Gateway
    - Name: shared-vgw
    - Actions: Attach to VPC - shared
  - Create Site-to-site VPN Connection
    - Name: transit-shared-vpn
    - Virtual Private Gateway: shared-vgw
    - Customer Gateway: New
      - IP: Elastic IP from CISCO CSR 1000V Instance
      - BGP ASN 65000
  - Download Configuration of VPN
    - Vendor: Cisco Systems
    - Platform: CSRv AMI
    - Software: 12.4
    - Replace \<private IP string> with 10.3.0.10
  - SSH onto Cisco Instance
    - conf t (paste in contents of the Configuration file)
    - show crypto isakmp sa

## Configuring Route Propagation

VPC Dashboard
  - Edit Route Propagation on the shared Route Table
SSH on Cisco Instance
The advertised IP Address needs to be updated.
  - conf t
  - router bgp 65000
  - address-family ipv4
  - network 10.3.0.0 mask 255.255.255.0
  - end

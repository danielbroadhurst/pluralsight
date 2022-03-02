# VPC Peering

## Peering Public and Private VPCs
- Peering Connection
  - Create Peering Connection
  - Name: web-shared-pcx
  - Requester: web-vpc
  - Accepter: shared-vpc
  - Create Peering Connection
  - Actions: Accept Request
- Modify Route Tables
  - Edit: web-pub
    - Add Route: 10.2.2.0/24 (Shared DB Subnet)
    - Target: Peering Connection (web-shared-pcx)
  - Edit: shared
    - Add Route: 10.1.254.0/24 (Web Public Subnet)
    - Target: Peering Connection (web-shared-pcx)
    - If you had multiple Subnets in the same VPC - use (10.1.0.0/16)

If the DB cannot be ping'd then there may be an issue with the Security Group setup not allowing Custom ICMP - may need to add a rule to allow All ICMP from anywhere.
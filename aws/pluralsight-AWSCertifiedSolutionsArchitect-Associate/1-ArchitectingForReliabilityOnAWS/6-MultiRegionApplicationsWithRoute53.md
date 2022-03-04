# Multi-region Applications with Route 53

## Deploying a Multi-Region App

```bash
aws cloudformation deploy --template-file "app-stack.json" --stack-name "app-stack-1"
aws cloudformation deploy --template-file "app-stack.json" --stack-name "app-stack-2"
aws cloudformation describe-stacks --stack-name "app-stack-1"
aws cloudformation describe-stacks --stack-name "app-stack-2"
aws cloudformation delete-stack --stack-name "app-stack-1"
aws ec2 describe-instances --query "Reservations[*].Instances[*].PublicIpAddress" --output=text
aws cloudformation delete-stack --stack-name "app-stack-2"
```

## Active-active Redundancy

Traffic is split equally between the redgions.

Route 53 Dashboard - Hosted Zones:
  - Create Record Set
  - Name: www.<URL>.com
  - Alias: Yes
  - Alias Target: Load Balancer from Region 1 (web tier 1)
  - Alias Target: Load Balancer from Region 2 (web tier 2)
  - Routing Policy: 
    - Weighted = 50
    - Set Id: app-stack-1
  - Evaluate Target Health: Yes

## Active-passive Redundancy

This is when users will hit the Active resource, if there is an error then the passive can be used.

Pilot Light Architecture:

Secondary passive instance are smaller instances which can be scaled up if they are required due to errors with the active stack.

Warm Standby Architecture:

Secondary instances are fully working replicas of the active stack.

Route 53 Dashboard - Hosted Zones:
  - Create Record Set
    - Name: www.<URL>.com
    - Alias: Yes
    - Alias Target: Load Balancer from Region 1 (web tier 1)
    - Routing Policy: 
      - Failover: Primary
      - Set Id: failover-primary
    - Evaluate Target Health: Yes
  - Create Record Set
    - Name: www.<URL>.com
    - Alias: Yes
    - Alias Target: Load Balancer from Region 2 (web tier 2)
    - Routing Policy: 
      - Failover: Secondary
      - Set Id: failover-secondary
    - Evaluate Target Health: Yes

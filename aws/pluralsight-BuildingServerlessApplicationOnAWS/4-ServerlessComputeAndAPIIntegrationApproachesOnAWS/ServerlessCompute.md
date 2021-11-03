# Serverless Compute

##  AWS Lambda
- Billed on usage - requests and resources
- Provides pre-built runtimes for common runtimes
- Requires new tools for local development
- Primary service for integration with other event-driven services
- Works seamlessly with API Gateway

## AWS Fargate
- Billed based on time
- Utilises a container that you maintain
- Does not require cluster configuration
- Enables a more traditional development flow with docker
- Can be run on either ECS or EKS
- Works seamlessly with API Gateway

## Lambda Deep Dive
- Resources
  - Timeout (3 seconds to 15 minutes)
  - Memory (128mb to 10,240mb)
- Runtime & Layers
  - Node.js / Python / Ruby / Java / .NET
  - Lambda Layer 
    - Provide additional native or platform libraries
    - Sharing common code between functions
- Permissions
  - IAM Role gives the function the ability to interact with other services
- Environment
  - Variables which can be made available at runtime
- Custom Code

Things to consider:

**Disposable Compute**

**Cold Starts**

**Concurreny** - Lambda could spin up more than one versions of the function running. 

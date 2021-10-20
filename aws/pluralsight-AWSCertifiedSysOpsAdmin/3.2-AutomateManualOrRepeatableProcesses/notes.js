// AWS SysOps Admin: Automate Manual or Repeatable Processes

// Automating Deployments Using AWS Services

/**
 * How to use AWS Services to automate deployment and processes
 * 
 * Elastic Beanstalk:
 *  - Platform as a Service for Developers
 *  - AWS orchestrates applications and environments using your code
 *  - Only pay for the AWS Services which are used in the backend
 *  - Concepts:
 *    - Applications with Application Versions
 *    - Environments and Environment Tiers, can only host one application at one time. Web Server or Worker.
 *    - Environment Configurations
 *    - Platforms
 *  - Workers will scale up and down dependant on the length of the Queue of work available
 *  - RDS Databases should be deployed outside of the Applications
 *  - Blue/Green deployments can be set up
 * 
 * AWS OpsWorks:
 *  - Configuration Management Service, works with Puppet or Chef
 *  - Operating Modes, Puppet Enterprise / Chef Automate / OpsWorks
 *  - Concepts:
 *    - Stacks represent a set of instances with a common purpose
 *    - Every Stack has one or more Layers that represent a component
 *    - Instances can be 24/7, Time-based or Load-based
 *    - Apps represent your code that you want to deploy to the service
 *    - Used to deploy Chef Cookbooks or Puppet Recipes
 * 
 * AWS CodeStar:
 *  - CodeCommit: AWS Git Service
 *  - CodeBuild: Builds and Test the Code and outputs the Artifacts
 *    - Billed for underlying resources, Docker build environments
 *    - Uses a 'buildspec.yml' file with 4 phases: Install | Pre Build | Build | Post Build
 *  - CodeDeploy: Deploys the Code to EC2, Lambda, S3 or ECS
 *    - Only deploys the code and does not deploy resources
 *    - EC2 or On-prem utilizes the AWS CodeDeploy Agent
 *    - Appspec.yml used to configure deployments - 13 Event hooks, major ones are as follows
 *      - ApplicationStop | DownloadBundle | BeforeInstall | Install | AfterInstall | ApplicationStart | ValidateService
 *  - CodePipeline: Tightly integrate all the CodeStar services.
 *    - CD Service - Controls process from source to deployment
 *    - Steps are separated as Stages
 *    - Stage perform actions: Single Parallel, Sequential
 *    - Ability to load atifacts and create artifacts
 *    - Allows for manual approvals where required 
 * 
 * AWS CloudFormation:
 *  - Concepts:
 *    - Templates are JSON or YAML document that defines resources.
 *    - Stacks are grouping of related resources as one unit.
 *      - Nested Stacks: Stacks are are contained within a parent stack
 *      - Cross-Stack Reference: Referring to exported resources in another stack.
 *      - StackSets: Stack that live across multiple accounts using the same template.
 *    - Change Sets are a summary of proposed updates to a stack.
 *    - Intrinsic Functions: Assist in getting attributes and to assign values to resources during the build 
 */

// Implementing and Scheduling Automation in AWS

/**
 * AWS are responsible for Security of the Cloud - Data and Software Installed
 * Customer is responsible for Security in the Cloud - Physical Hardware & Software Provided
 * 
 * AWS Systems Manager:
 *  - Concepts:
 *    - Known as SSM, allows us to view and control our AWS Infrastructure
 *    - Leverages Managed Instances to configure and maintain compute compliance
 *      - SSM Agent is installed on EC2 Instances to allow management
 *      - Can scan instances and see what patches are applies
 *      - Allows for commands to be excuted remotely
 *    - Store Configurations and Secrets in SSM
 *    - Logical grouping is done via tage known as Resource Tags
 *    - Contains several capabilities grouped into categories
 *    - Simplifies resources and application management at scale
 *  - Patch Manager:
 *    - Uses Patch Baselines to auto-aprrove or auto-reject patches
 *    - Uses Maintenance Windows to apply the patches
 *    - Groups instances using Patch Groups to assign a patch baseline
 *    - All patch updates are executed using a Run Command
 * 
 * AWS EventBridge:
 *  - Concepts:
 *    - Serverless event bus that connects apps with data from sources
 *    - Targets many AWS Targets such as Lambda's, Gateways
 *    - Recieves and Event, applies a Rule and routes the event to the Target
 *  - Scheduled Events, CRON or Event Patterns utilises event data
 * 
 * Amazon S3 - Event Notifications
 *  - S3 can generate notifications triggered by specific events
 *    - New Object Created | Object Removed | Restore Object | Object Lost | Replication
 *  - Targets SNS, SQS or Lambda
 *  - Events are delivered at least one so it could be more
 *  - Create custom filter using key prefixes such as '.py'
 * 
 * AWS Config:
 *  - Records configuration change hisory on resources
 *  - Allows for audits and compliance checks
 *  - Exists per region
 *    - Cross region recording
 *    - Aggregate recording
 *  - Works with SNS to trigger events
 *  - Evaluates rules when changes are recorded
 */
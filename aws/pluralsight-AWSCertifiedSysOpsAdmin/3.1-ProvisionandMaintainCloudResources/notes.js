// Creating and Managing Amazon Machine Images (AMIs)

/**
 * Overview of AMIs and EC2 Images
 * 
 * AMI is the basic unit of deployment in EC2
 * Pre-configured virtual machine that contains OS and Preinstalled Software
 * 
 * EC2 Image Builder is a managed service to build manage and deply images
 * Image Pipeline is an automated framework for building and maintaining images
 * 
 * Image recipe is a document that defines the source image and changes to get to the desired image.
 */

/**
 * DEMO: Using EC2 Image Builder
 * 
 * Create Image Pipeline + Name & Description + Manual
 * Recipe + Create New Recipe - AMI/Docker
 * Select an Image - Amazon Linux 2
 * Components are Software Scripts to install popular software platform, eg, python / AWS CLI
 * Select and add Storage
 * Infrastructure config default
 * Distribution config default
 * Create Pipeline
 */

/**
 * DEMO: Creating an Image with EC2 Image Builder
 * 
 * Select Image - Actions and Create Image
 * Once finished the image will be available in My AMIs
 * Images are Region Based
 * 
 * To Delete, Delete Pipeline -> Delete Recipe -> Delete Infrastructure Config -> Delete Distrubution Settings -> Delete Image
 */

// Creating, Managing, and Troubleshooting in AWS CloudFormation

/**
 * Basics of CloudFormation Concepts - Infrastructure as Code
 * 
 * Stack is a collection of resources to deploy as a group
 * Template is a file that desscribes the stack
 * Change Set is a preview how proposed changes will impact running resources
 * Stack Set are stacks across multiple regions
 * Nested Stacks are stacks created as part of other stacks
 * 
 * Parameters are passed in at runtime: Username and password
 * Mappings are similar to a lookup table: key=Region, value=us-west-1
 * Conditions control whether resources are created or whether certain properties are assigned: Check if env is production before deploying
 * Resources are the AWS resources to deploy: EC2 instance and a RDS
 * Outputs are the value returned from the stacks resources: Security Group ID's or a Bucket Name
 */

/**
 * DEMO: Deploying and Updating a CloudFormation Template
 * 
 * Create Stack - Use a Sample Template has sample templates
 * DependsOn:
 *  - Used to specify that creation of one resource follows another.
 *  - Controls the order
 *  - Does not wait for a success of failuer
 * Wait Conditions:
 *  - Pauses execution of a template and waits for a success signal before continuing execution; eg, Wait for a data script to run on EC2 before moving on. 
 *  - Waits for success before continuing
 * 
 * AWS console Parameters can be set during the build of the stack.
 * Create Stack will trigger the build
 * 
 * To UPDATE:
 * Click Update -> Edit Template in Designer -> View in Designer
 * Create Stack Button will deploy changes
 * View Change Set and Execute to Update the Stack 
 */

/**
 * Working with Multiple CloudFormation Stacks
 * 
 * Nested Stacks:
 *  - Stacks created as part of other stacks
 *  - Uses the AWS::CloudFormation::Stack resource
 *  - Use Outputs and Parameters to pass values between stacks 
 *  - Passing information between the same stack group
 * 
 * Exporting Stack Output Values:
 *  - To share information uses the Export function to output value
 *  - Other stacks then use the ImportValue function to get that value
 *  - Stacks do not have to be part of the same group
 */

// Provisioning Resources Across Multiple AWS Regions and Accounts

/**
 * Options for cross-region and cross-account provisioning.
 * 
 * - Working with CloudFormation StackSets
 *  - Create Admin Account StackSet.
 *  - Create Target Accounts in different regions
 *  - Use Self-Managed Permissions or Service-managed permissions
 * 
 *  Working with StackSets Tutorial available on the AWS Documentation.
 * 
 *  AWS Resource Access Manager:
 *  - Securely share resources such as Aurora DBs across accounts of within organisations.
 *    - Create the Share
 *    - Associate resources with the share
 *    - Specify the principals that can access the shared resource
 * 
 *  Working with IAM Cross-account Roles:
 *  - Create a role in the prod account specifying the dev account as a trusted entity.
 *  - Attach a policy to that role.
 *  - Grant developers access to that role so they can assume it.
 *  - Team members can request access to that role by using the 'Switch Roles'
 */

// Understanding Different Deployment Types in AWS

/**
 * Deployment Types and Use Cases
 * 
 * - Blue/Green and Canary Deployments
 *    - ELB can direct traffic to a deployment
 *    - 2 Environments, 1 running the current deployment and 1 running the new application
 *    - Switch the traffic from the Blue to the Green 
 *    - Canary is a gradual switch of traffic
 * - Rolling deployments
 *    - Roll out changes incrementally across Virtual Machines
 * - In-place deployments
 *    - Update the application but not the Virtual Machine or Infrastructure
 * 
 * AWS Services:
 *  - CloudFormation: Infrastructure as Code
 *  - Elastic Beanstalk: Platform as a Service - Most convinient
 *  - CodeDeploy: Automates Deployement, Comput resources must already exists
 *  - Elastic Container Service: Contain Orchestration Service
 *  - Eleast kubernetes Services (EKS):  Fully managed Kubernetes Server, EC2 or Fargate
 *  - OpsWorks: Configuration management service, works with Chef or Puppet
 */

/**
 * Troubleshoot Deployment Issues in AWS
 * 
 * CloudFormation:
 *  - Insufficient Permissions, must have correct permissions for CloudFormation and underlying services
 *  - Delete Stack Fails, Some resources must be empty, missing permissions, termination protection on template
 *  - Service Quotas / Limits
 *  - Rollback Failed, changes made outside the resources outside of CloudFormation
 * CodeDeploy:
 *  - Ensure CodeDeploy agent is installed and running EC2s
 *  - Correct IAM instance profile is setup
 * AWS OpsWork:
 *  - Unable to manage instance, usually occurs if a dependant resource was edited or deleted
 *  - Instances stuck in booting status, check VPC config
 *  - Instances won't book, could be an issue with the version
 */
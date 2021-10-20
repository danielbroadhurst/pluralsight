// AWS SysOps Admin: Implement High Availability and Resilient Environments

// Implementing Highly Available Architectures on AWS

/**
 * Elastic Load Balancing for High Availability
 * 
 * Application Load Balancer and Auto Scaling Group provides HA
 * The Load Balancer sits between end users and EC2
 * ELB routes requests to available healthy instances
 * Targets can be IP address based or Lambda
 * Load balancer provides SSL
 * Span two or more AZs to provide High Availability.
 */

/**
 * Highly Available Solution Architecture
 * 
 * VPC with Applications setup in two AZs which are in Private Subnets
 * Data layer can be replciated betweeen each subnet
 * Each Subnet has a Public Subnet NAT Gateway which allows connection to public users
 * Application Load Balancer recieves traffic and points it to one of the applications
 * EC2 Scaling Groups can ensure that Applications that become unresponsive are restarted
 * 
 * Auto Scaling Groups can have a Load Balancer added via the console.
 * ELB has Health Checks which can be activated on the Auto Scaling Group
 */

/**
 * Self Healing Instance with Auto Scaling
 * 
 * It is possible to have an EC2 Auto Scaling Group of 1:1:1 
 * This ensures there will only ever be 1 instance running.
 * In case of a Health Check Failure you can use the lifecycle hooks to run commands to
 * - Detach an Elastic IP from an EC2
 * - Create a Snapshot of the EBS Volume
 * Auto Scaling will provision another EC2 and using lifecycle hooks
 * - Attach the Elastic IP to the new EC2
 * - Create an EBS Volume from the Snapshot
 */

/**
 * RDS Multi-AZ Deployments
 * 
 * Highly Available by spanning two zones
 * Can conver a non-multi AZ deployment
 * RDS maintains a synchronous standy replica
 * Automatic failover in the event of an outage
 * Expose a single DNS endpoint
 */

/**
 * Fault Tolerant File Systems
 * 
 * EFS: Managed Network file system - NFS - Share Across EC2 instances - Linux
 * Amazon FSx: SMB Protocol - Multi or Single AZ - Windows
 */

// 
// 
// Implementing Resilient Environments on AWS with Route 53
// 
// 

/**
 * Route 53 Health Checks
 * 
 * Endpoint must be health to receive traffic
 * Monitor by IP or domain name via HTTP, HTTPS or TCP
 * Requests can be sent from up to 8 different regions
 * 
 * Health checks are created via the Route 53 console
 * Defalt settings are usually okay for most use cases.
 * Alarm can be created to notify use when the endpoint is down.
 */

/**
 * Route 53 Routing Policies
 * 
 * Simple: Single Routing Policy to single endpoint in single AZone
 * Active-Active: Available infrastructure in secondary region
 *  Weighted, Latency, Geolocatio. Latency and Geolocation uses the users IP Address to determine where to send traffic.
 * Active-Passive: Standy-only infrastructure in secondary region
 *  Only sends traffic to the secondary endpoint if a health check fails
 * 
 * Create A Record and Route Traffic to Application Load Balance and set Region.
 * Routing policy can be selected from the drop down menu
 * For a failover. 2 A Records should be added. One with Primary and one with Secondary.
 */


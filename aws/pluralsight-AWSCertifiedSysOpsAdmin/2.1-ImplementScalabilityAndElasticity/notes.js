// Implementing Scalable Architectures Using AWS Auto Scaling
// Creating a Launch Template

/**
 * EC2 -> Launch Templates -> Create Launch Template
 * Create Auto Scaling Group
 * Attach Availability Zones
 * Increase the Capacity 
 * Review and Create
 */

// Configuring Scaling Policies

/**
 * Target Tracking will use Average CPU - Bytes I/O - Request Count
 * Simple Scaling will use CloudWatch Alarms to Trigger actions
 * Step Scaling uses CloudWatch Alarms but can have additional Steps
 * 
 * Scheduled Actions can set rules on a Schedule such as Cron or just once
 */

// Auto Scaling Plans

/**
 * AWS Service which is free and runs on Cloudwatch and has Scaling Strategies
 * Can target Scaling Groups or CloudFormation
 */

// Implementing Scalable and Elastic Databases on AWS

/**
 * // Creating a new Database
 * 
 * Amazon will create DB Cluster which is available in multi Availability Zones
 * 
 * Create Database -> Easy Create -> Select Platform -> Default Settings
 * 
 * Databases can be modified via the console to change the size of the instance.
 * 
 * Create Read Replica can be help scale Horizontally via Actions Menu
 * Replica Source -> Set ID -> Create Read Replica
 * 
 * Read Operations can be sent to the read and write to the Main DB.
 */

/**
 * // Aurora DB Setup
 * 
 * Aurora can be MySQL / PostgreSQL
 * Provisioned is where user sets the instance size.
 * Serverless is a managed and scales to your capactiy.
 * 
 * Aurora Clusters can Add Readers or Regions to support capacity and disaster recovery
 */

/**
 * // Adding Caching to Elastic Applications
 * 
 * Temporary storage for frequently accessed data.
 * Application require less processing power.
 * CloudFront, DynamoDB Accellerator, ElastiCache
 * 
 * CloudFront: Caches Static & Dynamic Content - CDN - Edge Locations - Low Latency
 * DynamoDB Accelerator (DAX): Fully Managed in-memory cache by using a DAX Cluster
 * ElastiCache: Managed verisions of Memcached and Redis
 * 
 * Caching can help save money due to being able to reduce load on EC2 Instances
 */
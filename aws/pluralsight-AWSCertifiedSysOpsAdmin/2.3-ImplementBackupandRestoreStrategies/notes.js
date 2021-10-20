// AWS SysOps Admin: Implement Backup and Restore Strategies

/**
 * RPO
 * 
 * Recovery Point Objected
 * Accecptable data loss - linked to when the last backup was taken before disaster.
 * Expressed in hours
 * Example: With an RPO of 1 hour, you could lose up to 1 hour of data.
 */

/**
 * RTO
 * 
 * Recovery time objective
 * Acceptable downtime after the distater.
 * Expressed in hours
 * Example: With an RTO of 1hour, systems should be up and running within 1 hour of disruption.
 */

/**
 * Backup features of AWS Services
 * 
 * AWS Backup - Allows user to manage backup for many services.
 *            - Managed in Console and Resources can be toggled ON/OFF
 *            - Create Backup Plan and set how long and often backups are taken and retained for
 *            - Resources can be assigned to the back up policy which has been created.
 *            - Can use resource ID or by Tags
 * 
 * EBS  - Snapshots of the EBS Volume
 *      - First Snapshot is full and the rest are incremental
 *      - Stored in S3
 *      - Data Lifecycle Manager manages backups automatically by using Tags
 * 
 * RDS  - Automated backup which performs full daily snapshot in a single region
 *      - Snapshots can be user initiated
 *      - Read replicas can be used for scalability but also in disaster recovery by promoting replica
 * 
 * DynamoDB - On demand table backups
 * 
 * StorageGateway - Can be used to back up on-premises files, applications and databases.
 */

/**
 * Restoring Databases with AWS
 * 
 * Restoring to a Point in time:
 *  - Creates a new database instance
 *  - Restore to same/similar size instance
 *  - AWS Backup can be used to achieve restoration
 *  - Select Backup - Restore to Point In Time - Give Identifier - Set Instance Details - Restore
 * 
 * Restoring from a database snapshot:
 *  - Creates a new database instance
 *  - You cannot restore from a snapshot that is shared and encrypted
 *    - Instead, create a copy of the snapshot and restore from the copy
 *  - You can restore from a snapshot and choose a different storage type
 *  - Select Snapshot - Restore Snapshot - Give Identifier - Defaults unless changes require - Restore
 * 
 * Promoting a Read Replica:
 *  - When promoted the DB Instance is rebooted
 *  - No longer a read replica
 *  - Select Replica - Promote - Default - Continue & Promote
 * 
 * Amazon Aurora:
 * Backup
 *  - Cluster volume is backed up automatically
 *  - Retains restore data for the backup retention period
 *  - Backups are continuous and incremental
 *  - Manual snapshots are possible, and you can create a new DB Cluster from a snapshot
 * Restore
 *  - Create a new database cluster from a backup or a snapshot
 *  - Can restore to any point in time in the back up retention period
 *  - Can also clone a database from one cluster to another
 * 
 * Backtracking
 *  - Feature must be enabled when the DB Cluster is created.
 *  - Rewinds the database cluster to a time you specify
 *  - Does not require a new database cluster and the rewind happens in minutes
 *  - Can use this repeatedly back and forth to determin when a change happened
 *  - Limited to 72 hours
 */

/**
 * Implementing S3 Versioning and Lifecycle Rules
 * 
 * Version S3 Buckets:
 *  - Versioning is enabled and suspending at the bucket level
 *  - Keep multiple varients of an object
 *  - Once a bucket is versioned it can never be unversioned; however, it can be suspended
 *  - Versioning state applies to all object in a bucket
 *  - Each new object gets a unique version ID
 *  - Existing objects have a version ID of null until they are modified
 *   
 * Managing S3 Lifecycle:
 *  - Types or Actions are Transistion or Expire
 *  - S3 Standard Storage: Frequently Accessed - No Minimum Storage Duration
 *  - S3 Standard-IA / S3 Intelligent-Tiering / S3 One Zone-IA: Long lived data which has 30 day minimum storage duration
 *  - S3 Glacier - Long term data, retrieval times ranging from minutes to hours - 90 day minimum storage duration
 *  - S3 Glacier Deep Archive - Rarely accessed data - default retrieval of 12 horus - 180 day minimum storage duration
 * 
 * Lifecycle Rules
 *  - Can be used to transistion objects from different storage types and delete files after period of time.
 */

/**
 * Configuring S3 Cross-region Replication
 * 
 *  - Store data closer to your customer
 *  - Store data closer to compute clusters
 *  - Compliance reasons for sensitive data
 * 
 *  - New Objects, metadata and tags are all replicated.
 *  - Existing data is not copied across.
 * 
 * Use Management tab to create replication rules, choose file types and the destination bucket.
 */

/**
 * Executing Disaster Recover Procedures in AWS
 * 
 * Understanding disaster recovery options:
 *  - Backup and Restore: Low Cost / Low Complexity - Snapshots of EBS & RDS - Restore after Event
 *  - Pilot Light: Less stringent, core services are deployed but not running - start and scale after event
 *  - Warm Standby: More stringent, business critical services deployed - scale resources after the event
 *  - Real-time: Zero downtime, near zero loss, mission critical services running in different regions. Route53 can redirect traffic.
 * 
 * Detecting an incident
 *  - AWS Service Health Dashboard: Shows status of AWS Services: https://status.aws.amazon.com/
 *  - Personal Health Dashboard: Shows status of services which are related to your region and services: https://phd.aws.amazon.com/
 *  - Health Checks: Ask a server if it is capable of providing work successfully
 *    - Liveness Check: HTTP Request which checks a 200 status comes back
 *    - Local Health Check: Check critical process is enabled, example, Read I/O of a disk
 *    - Dependency Health Check: Check applications ability to interact with adjacent systems.
 *    - Anomaly Detection: Checks across servers in a fleet which could be behaving differently to the rest of the system.
 * 
 * Managing Drift
 *  - Ensure infrastructure, data amd config at the disaster recovery site are up to date.
 *  - AWS Config: 
 *    - Continuously monitors config changes
 *    - Track relationships and dependencies of resources
 *    - Trigger AWS Systems Manager Automation to raise alarms and fix the drift
 *  - CloudFormation:
 *    - Can detect drifts in the stacks which have been deployed, such as manual changes.
 */
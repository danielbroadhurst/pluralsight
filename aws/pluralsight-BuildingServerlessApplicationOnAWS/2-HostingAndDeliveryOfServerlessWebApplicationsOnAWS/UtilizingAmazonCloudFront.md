# Utilizing Amazon CloudFront

## Creating a CloudFront Distribution

**S3 Bucket Static hosting can be disabled for CloudFront Distribution**
1. Navigate to CloudFront and Create Distribution
1. Origin Domain Name = S3 Bucket
1. Restrict Bucket Access = Yes
1. Origin Access Identity = Create a New Identity
1. Grant Read Permissions on Bucket = Yes, Update...
1. Redirect HTTP to HTTPS
1. Compress Object Automatically
1. Default Root Object = index.html
1. Create Distribution

## Configuring and Invalidating CloudFront
- Add Error Page 403: Forbidden = /index.html & 200 OK
- Create Invalidation by adding object paths to the Create Invalidation window

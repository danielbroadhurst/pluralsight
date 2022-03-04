# Setting up Your AWS Environment

## AWS Budgets
As the root user of an AWS Account:

Check the Receive Billing Alerts box of the Billing Preferences section.
AWS Budgets:
  - Create a Budget
  - Cost Budget
  - Set your Budget
  - Name: Monthly Budget
  - Period: Monthly (Recurring)
  - Budgeted Amount: $10
  - Configure Alert Threshold: 50
  - Enter Email Address

## IAM Principal
Good practice to use an admin user and not a root user.
Set a IAM Password Policy for users.

IAM -> Account Settings -> Set Password Policy

## MFA for the Root User
Activate MFA on your Account from the Your Security Credentials page.

## Creating an Admin Users
Policies determine what permissions an IAM principal has.

Creating an admin user:
  - Create an IAM Group
  - Attach the AdministratorAccess policy to the group
  - Create a new IAM User
  - Assign the user to the group

## CloudTrail Event History
CloudTrail logs all events on your AWS Account for 90 days.

## Configuring the AWS Command Line
Use the following command to configure the AWS CLI
```bash
aws configure
```

## Creating a TLS Certificate using ACM
Before ACM will issue a TLS, you must prove you own the domain name.

In the ACM Service Console
  - Request a Certificate.
  - Public
  - Add domain names - the * (wildcard covers subdomains):
    - db.com
    - *.db.com
  - DNS validation
  - Confirm & Request
  - Create the CNAME records on the Domain DNS
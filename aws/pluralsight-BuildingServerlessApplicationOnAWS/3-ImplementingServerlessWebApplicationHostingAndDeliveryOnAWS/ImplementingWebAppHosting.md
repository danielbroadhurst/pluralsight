# Implementing Web App Hosting

## Source Code Monorepo
- Includes all the code for an application, Front End - Back End and Infrastructure
- Uses the yarn 'workspaces' feature
  - To add a dependency within a specific workspace:
  - ``` yarn workspace <workspace name> add <package name> ```
  - To add a dev dependency within a specific workspace:
  - ``` yarn workspace <workspace name> add <package name> -D ```
  - To add a dependency to the root of the monorepo (must be in root dir):
  - ``` yarn add <package name> -W ```
  - Install all dependencies (must be in root dir):
  - ``` yarn ```

## Creating and Deploying S3 Bucket
*CDK will need to be Bootstrapped to enable usage:*

``` env CDK_NEW_BOOTSTRAP=1 npx cdk bootstrap --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess aws://<Account Number>/<AWS Region> ```

- To deploy the stack use ``` npx cdk deploy ``` from the infrastructure dir

- Example file: ```./src/infrastructure/lib/core/storage.ts```

## Deploying a CloudFront Distribution

- Example file: ```./src/infrastructure/lib/core/webapp.ts```

## Building and Deploying the React Web App

- Uses the ```cdk-webapp-tools``` library to Build and Deploy the Web App
- Example file: ```./src/infrastructure/lib/core/webapp.ts```
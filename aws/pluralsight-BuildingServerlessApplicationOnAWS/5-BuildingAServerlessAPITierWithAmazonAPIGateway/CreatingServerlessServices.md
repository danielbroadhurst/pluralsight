# Creating Serverless Services

Service Folders:

```./src/services/common```

```./src/services/comments```

## Application Services
 - Documents stored in DynamoDB
 - Comments stored in DynamoDB
 - Moderation using SQS
 - Users Auth stored in Cognito
 - Notifications using SNS

## DynamoDB Fundamentals
  - NoSQL Database
  - Billed by provisioned capacity or on-demand
  - Supports either eventually consistent or strongly consistent reads
  - Enables different data modelling
  - Query is more efficient than Scan

## Working with DynamoDB with Single Table Design
  - Primary Key
    - Composed of a partition key and an optional sort key
    - The partition key is used to determine what partition the data will be stored on
    - Primary keys must be unique
    - If using a sort key you can have multiple items with the same PK
    - When using a sort ket you can sort or query by value as well as beginning characters
  - KSUID: An approach for creating K-sortable UUIDs where the ID can be sorted by the timestamp
  - Global Secondary Indexes (GSI)
    - Supports the ability to pick two different values from the table as the PK & SK
    - Eventually consistent with the original table
    - You can select some of all of the attributes to be added to the GSI
    - Common pattern is to reverse the PK & SK
    - Using GSI consumes the throughput

### Using the CDK to Create a DynamoDB Table

Example File: ```./src/infrastructure/lib/core/database.ts```

### Creating the Comments Service

Example File: ```./src/services/comments/index.js```

Example File: ```./src/infrastructure/lib/constructs/lambda.ts```

Example File: ```./src/infrastructure/lib/core/services.ts```

## Validation using lambda-micro

Uses JSON Schemas with the Lambda Micro npm package to validate the input to the routes are present on the request body. Uses methods such as ```validatePathVariables``` and ```validateBpdyJSONVariables```.

Example File: ```./src/services/comments/index.js```

# AWS Step Functions

## Overview

Serverless orchestration service which combines AWS Lambda and other services to define a State Machine workflow.

Made up of State, Tasks and Transistions.

### Standard Workflows
  - Can last up to one year
  - Priced per state transition
  - Asynchronous execution
  - Workflows are executed exactly once
  - Supports all service integrations and patterns

### Express Workflows
  - Can last up to 5 minutes
  - Priced per execution including duration and memory consumption
  - Can be either Asynchronous or Synchronous
  - Async - executed at least once
  - Sync - executed at most once
  - Does not support all async integration

### Creating Step Functions
  - Step functions are defined using Amazon States Language
  - There are pre-defined task types:
    - Task, Pass, Choice, Wait, Parallel & Map, Succeed & Fail
  - Each Step can define how it's input and output are handled


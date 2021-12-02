# Event-based Architecture

## Event-based Services in AWS
- Amazon EventBridge
  - Serverless Event Bus
  - Uses Rules to determine if the Target should be notified
- Amazon SQS
  - Fully managed message queue service
  - SQS Queue holds on to messages
  - Producer sends to Queue which sends the message to the Consumer
  - Has retry behaviour and Dead Letter Queues built in.
  - Standard Queue Type
    - Guarantees "at least once" delivery
    - No guarantee of message delivery order
  - FIFO
    - First-in First-out
    - Provides a guarantee on message delivery order
    - Guarantees "exactly once" delivery to consumer
- Amazon SNS
  - Simple Notification Service
  - Application to Application (A2A) / Application to Person (A2P)
  - Publisher -> Publishes to -> SNS Topic -> Fans out to multiple -> Subscribers
  - Has a DLQ and Standard / FIFO types

## Using Event-based Services

AWS EventBridge rules can be created to send events to targets. An example would be when a file is added to an S3 Bucket.
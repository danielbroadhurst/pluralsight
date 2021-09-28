#python3.6+
import json
import boto3


def lambda_handler(event, context):
    region = event['region']
    ec2 = boto3.client('ec2', region_name=region)
    instances = [event['detail']['instance-id']]
    print(f'instances: {instances}')
    ec2.start_instances(InstanceIds=instances)
    print(f'started your instances: {instances}')

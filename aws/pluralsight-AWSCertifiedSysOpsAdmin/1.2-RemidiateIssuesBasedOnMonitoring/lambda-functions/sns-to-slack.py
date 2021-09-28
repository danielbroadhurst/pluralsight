#!/usr/bin/python3.7
import urllib3
import json

WEBHOOK_URL = "https://hooks.slack.com/services/XXXXXXXXXXXXX" #replace with a webhook from your Slack instance
SLACK_CHANNEL = "#team1" #replace with your channel name
http = urllib3.PoolManager()


def lambda_handler(event, context):
    url = WEBHOOK_URL
    msg = {
        "channel": SLACK_CHANNEL,
        "username": "AWS Notification",
        "text": event['Records'][0]['Sns']['Message'],
        "icon_emoji": "cloud"
    }
    
    encoded_msg = json.dumps(msg).encode('utf-8')
    resp = http.request('POST',url, body=encoded_msg)
    print({
        "event": event,
        "message": event['Records'][0]['Sns']['Message'], 
        "status_code": resp.status, 
        "response": resp.data
    })

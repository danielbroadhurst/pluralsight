Use the "module2-cf.yaml" file in the AWS CloudFormation service to launch an EC2 instance that has the Apache httpd server installed and started. The Amazon CloudWatch Agent will NOT be installed.

Before running the CloudFormation template, you will need an EC2 Key Pair defined in the region in which you are launching the EC2 instance, so that you can select a Key Pair to use for the instance.

See the file "install-cloudwatch-agent.txt" for instructions on installing and configuring the agent.

If you'd like to use the same configuration that I demonstrated in this video course, you can use the "cloudwatch-agent-config.json" file included here in the exercise files, instead of using the amazon-cloudwatch-agent-config-wizard.

Once your CloudWatch Agent is configured and running, if you would like to generate metrics and/or log events into CloudWatch, you can use the following included scripts, executing them from your EC2 instance:
generate-cpu-utilization-metrics.sh
generate-mem-utilization-metrics.sh
generate-throttled-web-traffic.py
generate-unthrottled-web-traffic.py

WARNING: The script "generate-unthrottled-web-traffic.py" generates web requests (and corresponding httpd access_log entries) as fast as the host can execute the requests. This can lead to thousands of log entries in a short period of time. Run this script only for a short amount of time and do not keep it running indefinitely. 



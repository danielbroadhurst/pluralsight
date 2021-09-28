#!/bin/bash
ssh -tt ec2-user@$1 'echo "Redirect 500 /error500" | sudo tee -a /etc/httpd/conf/httpd.conf && sudo systemctl reload httpd && sudo tail -n3 /etc/httpd/conf/httpd.conf'


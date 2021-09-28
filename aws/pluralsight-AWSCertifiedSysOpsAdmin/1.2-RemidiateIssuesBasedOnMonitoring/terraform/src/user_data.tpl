#!/bin/bash -xe

#install and configure apache web server
yum install -y polkit httpd
echo "Globomantics Original Web Page" > /var/www/html/index.html
chmod 644 /var/www/html/index.html
systemctl start httpd

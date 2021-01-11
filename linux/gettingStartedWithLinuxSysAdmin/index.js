/**
 * Getting Started with Linux System Administration
 * 
 * https://bootstrap-it.com/linux-admin/
 */

// Optimizing your Linux System //
// - Monitoring System Resources
// cd /proc                         <--- dynamic system files
// less meminfo                     <--- memory information
// less cpuinfo                     <--- cpu information
// top                              <--- automatically updated display of current processes
// free -h                          <--- display current free memory
// df -t ext4                       <--- displays partitions sizes and information
// sudo apt install iftop           <--- installs a networking version of top to display network information
// sudo iftop -i {networkInterface} <--- displays information about the network interface
// - Monitoring System Processes
// ps                                 <--- displays the current shell processes which are running
// ps aux                             <--- displays all active processes on system
// ps aux | grep {process}            <--- displays a reduced list for the search query 
// journalctl --since "5 minutes ago" <--- displays the system logs from the past 5 minutes
// cd /var/log                        <--- system logs folder which contains log files
// cat syslog | grep {command}        <--- searches the system logs for the provided query
// dmesg                              <--- displays information from the linux kernal ring buffer
// kill {process ID}                  <--- kills the provided process
// killall {processName}              <--- kills all the process with the name provided
// sudo systemctl status {command}    <--- checks the current status of the command
// sudo systemctl disable {command}   <--- disable the command from being started on startup
// sudo systemctl enable {command}    <--- enables the startup command so process is ran when booted 
// sudo systemctl start {command}     <--- starts a process
// sudo systemctl stop {command}      <--- stops a process
// nice {--20 to -19} {command}       <--- a -19 nice process would allow other processes to use the system
// renice {--20 to -19} -p {PID}      <--- changes the nice value of a currently running process

// Working with Users and Group in Linux //
// sudo less /etc/shadow              <--- displays user and password information
// less /etc/passwd                   <--- displays user information
// less /etc/group                    <--- displays group information
// id {username}                      <--- displays user and group information about an id
// who                                <--- displays current user who are logged in 
// w                                  <--- displays who is logged in and what they are doing
// last | less                        <--- displays all the logins from the previous month
// sudo useradd -m {name}             <--- creates a new user
// sudo passwd {name}                 <--- generate a password for the user
// sudo groupapp {group}              <--- creates a new user group
// sudo chown :{group} {folder}       <--- sets the folder ownership to the group provided
// sudo usermod -a -G {group} {user}  <--- adds the user to the user group
// sudo chmod g+w {folder}            <--- adds folder and file write permissions to the group members

// Securing your Linux Server //
// - Object Permissions
// drwxrwxr-x = directory | (object owner can ) read write execute | (group members can) read write execute | (all other non root users) read write execute
// sudo chown {user}:{group} {folder} <--- sets the folder ownership to the group provided and the user
// Read = 4 Write = 2 Execute = 1 so directory object permissions can be set by numbers, eg 777 allows each user type to read/write/execute
// chmod 777 {filename} <--- sets the permissions to read write execute for everyone
// - Extending Object Usability
// sudo chmod +t .                  <--- users can only delete their own files
// sudo ln -s {filename} {command}  <--- creates a symbolic link to the filename to make is easier to run from anywhere on system
// - Hardening a Server
// sudo apt update        <--- updates the package manage
// sudo apt upgrade       <--- installs updated packages
// nmap -v -sT localhost  <--- scans computer for open ports
// nmap -v -sT {url}      <--- scans url for open ports

// Working with Docker and Linux Containers //
// - Installing Docker
// sudo apt update
// sudo apt install apt-transport-https \
//     ca-certificates \
//     gnupg-agent \
//     software-properties-common
// curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
// sudo apt-key fingerprint 0EBFCD88
// sudo add-apt-repository \
//    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
//    $(lsb_release -cs) \
//    stable"
// sudo apt update
// sudo apt install docker-ce
// sudo docker run hello-world
// sudo docker run -it ubuntu bash
// - Launching a Docker Container
// nano Dockerfile

// ##############################
// # Dockerfile to create Ubuntu webserver
// #
// FROM ubuntu:18.04

// RUN apt-get update
// RUN apt-get install -y apache2
// RUN echo "Welcome to my web site" > /var/www/html/index.html
// EXPOSE 80
// ##############################

// docker build -t "webserver" .
// docker images
// docker run -d -p 80:80 webserver /usr/sbin/apache2ctl -D FOREGROUND
// docker ps
// curl localhost
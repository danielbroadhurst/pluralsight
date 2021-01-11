/**
 * Getting Started with the Linux Command Line
 * 
 * https://bootstrap-it.com/linux-cli/
 * 
 * Using tab in a bash terminal will attempt to give you the rest of the command
 */

// Working with Linux Command Line Basics //
// sudo apt update                <--- updates packages before installing them
// sudo apt install info          <--- helpful info tool to display information about commands
// sudo apt install man-db        <--- installs manual if not installed on system
// man {command}                  <--- opens up the manual for the provided command
// wget {url}                     <--- downloads or opens a url which is passed
// info {command} examples simple <--- opens up the commands examples info page
// {command} --help | less        <--- displays a list of commands available for the command, piped to less
// ls -a                          <--- displays all files in the current directory including hidden ones
// ls -l                          <--- displays a list of files in long form
// ls -lh                         <--- same as above with file size in human readable format
// ls -lht                        <--- same as above files in chronological order
// ls -lht /etc                   <--- lists the files of the /etc directory no matter where you are in the system
// ip addr                        <--- displays network information
// cd                             <--- returns back to your home directory
// touch {filename}               <--- creates a file with the filename provided

// Navigating the Linux File System //
// mkdir {folderName}     <--- creates a directory
// nano {filename}        <--- opens or create a file in the pwd, ctrl-x && y will exit
// cp {filename} {folder} <--- copies the file into the folder
// cp {file*} {folder}    <--- copies all the files which start with the specified string to the folder
// rm {file}              <--- removes a file
// rm {file}?             <--- removes files which have the supplied name + one extra character eg, {file1}     
// rm {file}*             <--- removes all files which begin with the supplied name
// rm *                   <--- removes all files in directory
// rmdir {folderName}     <--- removes directory
// mv ../{file}* .        <--- moves all the files which match the supplied string in the directory above pwd to the pwd
// locate {filename}      <--- locates all the files which match the string
// sudo updatedb          <--- updates the file system database
// cat {fileName} | grep {searchquery}                  <--- displays any records which match the search query in the terminal
// cat {fileName} | grep {searchquery} >> {newfilename} <--- appends the results to the provided filename
// head {filename}                      <--- displays the top 10 lines of the file
// tail {filename}                      <--- displays the last 10 linies of the file
// cut -d: -f3 {filename}               <--- pulls out one group of file, -d: delimiter=: -f3 field 3 of the line
// cut -d: -f3 {filename} | sort -n     <--- same as above but pipes the result to a sort feature by numbers "-rn" would reverse sort
// mysql -u root -p <{database.sql}     <--- command would open mysql database engine and import the database.sql file
// tar xzf {archive.tar.gz}             <--- extracts the files and folders from the archive
// tar czf {newArchive.tar.gz} {folder} <--- compresses folder into the archive provided
// gzip {filename}                      <--- compresses a file if it was not compressed using tar
// unzip {filename}                     <--- unzips a folder
// zip {filename.zip} *                 <--- zips all the files in the pwd
// lsusb                                <--- lists all usb devices
// lspci                                <--- lists all devices connected via pci cards
// sudo lshw > lshw-output              <--- prints out the hardware devices connected to a new file
// uname -r                             <--- displays the current linux kernal which is running
// ls /lib/modules/                     <--- contains the kernals which are used for hardware
// ls /lib/modules/`uname -r`           <--- runs the uname command to complete the ls command
// lsmod | grep {search}                <--- lists all the modules running which matches the search query
// modeprobe {kernalModule}             <--- loads a kernal module which may not be running

// Linux Network Connectivity //
// ip route show                      <--- lists the current ip route config - default is usually etho0
// ip addr                            <--- displays the network connection
// sudpo dhclient                     <--- shows if there is a DHCP server on the network
// route                              <--- shows similar information to ip route show
// ifconfig                           <--- similar information to ip addr
// netstat -i                         <--- shows current network interfaces and transfer stats
// netstat -l                         <--- shows all the current open ports
// ss -i                              <--- displays information similar to netstat -l
// host {url}                         <--- displays ip address of url
// ping {ip/url}                      <--- pings a website and lets you know if packets are sent
// cat /etc/resolve.conf              <--- manages DNS settings
// systemd-resolve --status           <--- shows how DNS is currently configured 
// sudo nano /etc/hosts               <--- manaually create indexes for DNS records
// apt install openssh-server         <--- install open ssh on a server
// apt install openssh-client         <--- install open ssh as a client
// cd /etc/ssh                        <--- ssh settings folder
// sudo nano sshd_config              <--- edit server settings file for ssh
// ssh {user}@{port}                  <--- start a ssh session on a remote computer
// ssh -i {key.pem} {user}@{port}     <--- starts a ssh session using a certificate 
// scp {filename} {user}@{port}:{dir} <--- secure copy a file to a remote computer

// Linux Scripting - Example scripts are saved as .sh files // 
// nano {filename.sh}     <--- creates a script file
// #!/bin/bash            <--- tells linux it is an executable script and specifies the bash terminal
// chmod +x {filename.sh} <--- uses change mod command to make the file executable
// ./{filename.sh}        <--- runs the selected script
// man builtins           <--- displays the built in command line commands
/**
 * Getting Started with Linux
 * 
 * https://bootstrap-it.com/linux-start/
 * 
 * Linux has a number run level user modes:
 * 1 single-user
 * 3 multi-user without GUI
 * 5 multi-user with GUI
 * 
 * Key Directories
 * /bin   <--- binary file needed for single-user mode
 * /sbin  <--- binary files needed for multi user mode
 * /boot  <--- linux images and boot config files
 * /dev   <--- Pseudo files representing devices
 * /etc   <--- Configuration files
 * /home  <--- User files
 * /lib   <--- Software library dependencies
 * /root  <--- Root user files
 * /usr   <--- Additional binaries
 * /var   <--- Updating files: logs, application data, cache
 */

/**
 * Linux Servers using Containers
 * 
 */
// Ubuntu //
// sudo apt install lxd                         <--- installs Linux Container Environment
// sudo apt install lxc                         <--- installs Linux Container Environment
// sudo lxc launch images:centos/7/amd64 {name} <--- launches a container which uses the centos distribution
// sudo lxc list                                <--- lists all the containers which are running
// sudo lxc exec {name} /bin/bash               <--- opens up a terminal inside the launched container       
// yum install httpd                            <--- installs Apache
// systemctl start httpd                        <--- starts the apache service
// systemctl enable httpd                       <--- launches the apache service everytime the system is rebooted
// ip a                                         <--- displays the ipaddress information of the system
// echo "Hello" > /var/www/html/hello.html      <--- create a hello.html file and writes "Hello"

// Server Apps - Snap & Nextcloud //
// snap install nextcloud <--- will create a nextcloud file system server

/**
 * Software Package Managers
 * 
 * Debian = APT/DPKG
 * Red Hat Enterprise Linux = Yum/RPM (DNF)
 * Suse = ZYpp
 * Arch Linux = Pacman
 * 
 * sources are kept in the /etc/apt/sources.list file
 * // cd /etc/apt                  <--- moves to apt directory
 * // less sources.list.short      <--- opens up the sources file with white spaces removed
 */
// apt list --all-versions | wc       <--- pipes the list of apps available on apt to the wc command which counts lines/words/characters 
// sudo apt update                    <--- uses root user to update the package manager to latest version
// apt search {search string} | less  <--- searches for packages which match the search 'business cards' and pipes to less
// apt show {packageName}             <--- reveals more information about the selected glabels package
// sudo apt install {packageName}     <--- install the package
// sudo apt-get intall {packageName}  <--- also installs package using apt-get
// yum list {packageName}             <--- search for packages using yum
// yum info {packageName}             <--- displays the information related to a package
// yum install {packageName}          <--- installs the package using yum

/**
 * Useful commands for the Linux Terminal
 */

// clear                                        <--- clears the current terminal
// ls /                                         <--- list the files in a directory
// df -h                                        <--- list folders in the filesystem
// df -ht ext4                                  <--- list the connected drives and where they are mounted
// lsblk | grep sd                              <--- lists block devices connected to the device, uses grep to filter for results containing sd
// sudo mkdir /media/newplace                   <--- uses root user to create a new directory
// sudo mount /dev/{sdblock} /media/newplace    <--- mounts a block device to the newly created directory
// less {filename}                              <--- opens a file in a text editor
// systemctl get-default                        <--- shows current run level
// systemctl isolate rescue.target              <--- restarts the systems and switches to a rescue mode
// systemctl enable multi-user.target           <--- sets the default run level when the system reboots
// cat {filename}                               <--- prints out the contents of a file
// pwd                                          <--- displays the current working directory
// echo $PWD                                    <--- displays the current working directory
// env                                          <--- displays all the environment settings
// env | less                                   <--- pipes the command to less to it display one page at a time
// myval=5                                      <--- sets myval to equal 5 in the env settings
// echo $myval                                  <--- prints out the value of the variable 5 to the terminal
// export myval                                 <--- makes the myval available to all new bash sessions
// bash                                         <--- opens up a new bash session
// exit                                         <--- exits the current bash session
// history                                      <--- record of the most recent 1000 commands
// type wget                                    <--- how a word is interpreted by the bash termial, wget would be a bin commmand
// wget {url}                                   <--- downloads a url
// tar xzf {zipDir}.tgz                         <--- unzips the file x=extract z=compressed f=filename is next string
// make                                         <--- read a makefile and compiles the file
// make install                                 <--- installs a successfully compiled make file
// timedatectl                                  <--- displays the current timezone settings
// timedatectl list-timezones | grep -i America <--- lists all the available timezones, uses the grep pipe to list results containing america
// timedatectl set-timezone America/winnipeg    <--- sets the timezone to Winnipeg America
// dmesg                                        <--- display messages linked to the systems kernal
// dmesg | grep wl                              <--- uses grep to filter out wifi devices connected
// sudo lshw | less                             <--- pipes the results of the list hardware command to less editor
// nano {filename}                              <--- opens up a file in the nano editor     
// sudo cp {filename} {filename}.backup         <--- creates a back up copy of any files

/**
 * Environment commands
 * 
 * cd /usr/share/i18n/locales/  <--- holds all the 
 */

// locale                                 <--- prints out the location settings, such as language and keyboard settings
// localectl status                       <--- shows the status of the current locales
// localectl list-locales                 <--- displays a list of available locales
// localectl set-locale LANG=en_GB.utf8   <--- Sets the locale of the system to English GB

/**
 * less commands
 * 
 * when in less, press q to exit
 */
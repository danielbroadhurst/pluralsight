/**
 * LFCE: Advanced Linux Networking
 * 
 * Lab uses VM Virtual Box
 * 3 Servers, [server0, server1, server2]
 * Redhat CentOS Gnome Desktop
 */

// #### Introduction and Lab Setup #### //
// server0 settings
// Network Adapter 1 - NAT | Network Adapter 2 - Internal Network [intnet1] | Network Adapter 3 - Internal Network [intnet2]
// server1 settings
// Network Adapter 1 - Internal Network [intnet1]
// server2 settings
// Network Adapter 1 - Internal Network [intnet2]

// server0 IP Settings
// su     <--- switches to root user
// nmtui  <--- opens up a network manager UI
// - Edit a Connection
// - Wired Connection 1 - IPv4 Config Manual - Addresses [192.168.1.1/24]
// - Wired Connection 2 - IPv4 Config Manual - Addresses [192.168.2.1/24]
// systemctl restart network  <--- restarts the network adapters

// server1 IP Settings
// su     <--- switches to root user
// nmtui  <--- opens up a network manager UI
// - Edit a Connection
// - enp03 - IPv4 Config Manual - Addresses [192.168.1.100/24] - Gateway [192.168.1.1]
// systemctl restart network  <--- restarts the network adapters

// server2 IP Settings
// su     <--- switches to root user
// nmtui  <--- opens up a network manager UI
// - Edit a Connection
// - enp09 - IPv4 Config Manual - Addresses [192.168.2.200/24]
// systemctl restart network  <--- restarts the network adapters

// #### Network Topology Fundamentals and the OSI Model #### //
// - Topology Models
// Bus       - All nodes connected the same network
// Star      - All nodes connect to central hub
// Ring      - All nodes connect to the next node, like a circle
// Full Mess - Each node has a connection to each other node in the network
// - OSI Model 
//            Layer           Description                                     Technology 
// Layer 7  - Application   - Actual application                            - Browser, FTP, Commands
// Layer 6  - Presentation  - Translation of data for the application layer - HTML, CSS 
// Layer 5  - Session       - Application level socket                      - HTTP, SSH
// Layer 4  - Transport     - Data segmentation and delivery                - TCP, UPD
// Layer 3  - Network       - Addressing and Routing                        - IP
// Layer 2  - Data Link     - Encoding between the end stations             - Ethernet encoding, switches
// Layer 1  - Physical      - The Actual Wire                               - Ethernet NICs, hubs, modems
// - Demo Commands
// - server0
// more installWeb.sh <--- displays the shell script to install an apache web server and create a hello world page
// sh installWeb.sh   <--- runs the script
// - server1
// yum install tcpdump wireshark wireshark-gnome  <--- installs the packages to enable packet sniffing
// tcpdump                <--- starts the tcpdump package
// ping -c 1 192.168.1.1  <--- sends 1 packet to server0
// wireshark              <--- loads up the wireshark network analyser program

// #### Internet Protocol - Addressing and Subnetting Fundamentals #### //
// Network    0.0.0.0
// Broadcast  255.255.255.255
// Loopback   127.0.0.1 (localhost)
// - Demo Commands - IP Config, VLSM
// - server0
// ip addr <--- displays ip settings | lo is the loopback | enp0s3 connection to internet | enp0s8 - server1 | enp0s9 - server2
// sudo cd /etc/sysconfig/network-scripts <--- folder container network scripts
// vim ifcfg-WiredConnection_2            <--- Edit the prefix to 25 and save to change the subnet
// ifdown enp0sp9                         <--- takes the interface down
// ifup enp0sp9                           <--- brings the interface back up onto the network with updated settings
// - server2
// sudo cd /etc/sysconfig/network-scripts <--- folder container network scripts
// vim ifcfg-enp0s3                       <--- Edit the prefix to 25 and save to change the subnet, change the ip to 192.168.2.100
// ifdown enp0sp3                         <--- takes the interface down
// ifup enp0sp3                           <--- brings the interface back up onto the network with updated settings
// - Demo Commands - NAT
// - server0 - Demo to enable internet connectivity on Server 1 using NAT
// firewall-config                        <--- firewall config GUI tool
// - Masquerading                            - enable 'Masquerading Zone'
// - Options                                 - Click 'Runtime To permant'

// #### Internet Protocol - ARP and DNS Fundamentals #### //
// - Demo - Address Resolution Protocol
// - server1
// sudo ping -c 192.168.1.1 <--- pings 1 packet server0
// arp -a                   <--- displays ARP cache which shows IP's and MAC addresses known to system
// ip neighbor              <--- displays similar information to arp command
// wireshark &              <--- loads up the wireshark network analyser program, the '&' runs the process in the background
// arp -d 192.168.1.1       <--- deletes a mapping
// - Demo - Domain Naming System
// - server1
// sudo vim /etc/resolve.conf <--- add nameserver 4.2.2.2 nameserver 8.8.8.8 
// wireshark &                <--- loads up the wireshark network analyser program, the '&' runs the process in the background
// dig www.pluralsight.com    <--- displays the DNS records for the url provided
// host www.pluralsight.com   <--- displays address and IP Addresses

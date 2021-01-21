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
// sudo ping -c 1 192.168.1.1 <--- pings 1 packet server0
// arp -a                     <--- displays ARP cache which shows IP's and MAC addresses known to system
// ip neighbor                <--- displays similar information to arp command
// wireshark &                <--- loads up the wireshark network analyser program, the '&' runs the process in the background
// arp -d 192.168.1.1         <--- deletes a mapping
// - Demo - Domain Naming System
// - server1
// sudo vim /etc/resolve.conf <--- add nameserver 4.2.2.2 nameserver 8.8.8.8 
// wireshark &                <--- loads up the wireshark network analyser program, the '&' runs the process in the background
// dig www.pluralsight.com    <--- displays the DNS records for the url provided
// host www.pluralsight.com   <--- displays address and IP Addresses

// #### Internet Protocol - Routing Packets #### //
// Demo - Internet Protocol, IP Fragmentation
// wireshark &                    <--- loads up the wireshark network analyser program, the '&' runs the process in the background
// ping -c 1 4.2.2.2              <--- pings 1 packet to DNS Server, results are displayed in wireshark
// ping -c 1 -s 1472 192.168.1.1  <--- pings 1 packet of size 1472 to server1, results are displayed in wireshark
// Demo - Traceroute, TTL, Routing and Default Route
// traceroute -n 4.2.2.2          <--- traces the route to the ip address 4.2.2.2 - -n doesn't capture DNS information
// wireshark &                    <--- loads up the wireshark network analyser program, the '&' runs the process in the background
// sudo ping -c 1 192.168.1.1     <--- pings 1 packet server0
// sudo ping -t 5 -c 1 4.2.2.2    <--- pings 1 packet to server0 but the -t flag sets the TTL to 5
// route -n                       <--- displays the route table with the default route, any traffic without a route is sent to 0.0.0.0

// #### Internet Protocol - Routing Packets with Linux #### //
// Demo - Static Routes, Default Routes and VLAN Configuration
// - server2
// ping 192.168.1.1         <--- call fails as routing table does not know about ip
// route -n                 <--- display routing table
// ip route add 192.168.1.1/32 via 192.168.2.1 dev enp0s3 <--- adds route to route table so connection can be made to server0
// ip route del 192.168.1.1                               <--- removes the route as it only allows connection to 1 ip address
// ip route add 192.168.1.0/24 via 192.168.2.1 dev enp0s3 <--- allows access to the whole 192.168.1.0 network
// ip route                                               <--- displays ip route table
// systemctl restart network                              <--- would remove the route when network restarted
// cd /etc/sysconfig/network-scripts/                     <--- files to create networks are stored here
// vi route-enp0s3                                        <--- creates a file << 192.168.1.0/24 via 192.168.2.1 dev enp0s3  <--- add to file
// vi ifcfg-enp0s3                                        <--- edit the interface config file << GATEWAY=192.168.2.1 <--- add to file
// systemctl restart network                              <--- restart network with new config
// ping 4.2.2.2                                           <--- internet access is now usuable on server2
// VLAN Demo is viewable from the video.

// #### Investigating TCP Internals #### //
// - Demo - Connection Establishment, Data Transmission and Termination, Ports and TCP State
// -server1
// wireshark &                        <--- loads up the wireshark network analyser program, the '&' runs the process in the background
// wget http://192.168.1.1/index.html <--- downloads a file from server0, connection can be viewed in wireshark
// ss -ltn -4                         <--- shows all the listening TCP connections on the ip4 network ip addresses
// netstat -an | head                 <--- similar data to above, head just gets a limited amount of data
// - Demo - TCP State
// ssh root@192.168.1.1               <--- ssh onto server0
// ss -t                              <--- lists active connections with the current state
// - Demo - Sliding Window, Congestion Control, UDP
// - server0
// cd /var/www/html/                  <--- move to html dir
// fallocate -l1g largeFile.bin       <--- create a 1g file in the dir
// - server1
// wireshark &                                              <--- loads up the wireshark network analyser program, the '&' runs the process in the background
// scp root@192.168.1.1:/var/www/html/largeFile.bin .       <--- connects to server0 and transfers the large file to the working directory 
// - server0
// tc qdisc add dev enp0s8 root netem delay 3000ms loss 5%  <--- sets the TCP to have a delay of 3000ms and to drop 5% of packages, used to simulate poor network
// tc qdisc del dev enp0s8 root                             <--- deletes the policy
// - server1
// dig www.pluralsight.com                                  <--- runs a dig DNS request command about the URL

// #### Troubleshooting Network Issue #### //
// - Demo - Troubleshooting Network Issues - Layer 1 through Layer 3
// - server1 - (ping: layer 3 Network is unreachable)
// ip route       <--- shows the network information
// ip addr        <--- display the ip address information
// arp -a         <--- display layer network information
// ethtool enp0s3 <--- information about network interface
// - in VM make sure network is connected
// vi /etc/sysconfig/network-scripts/ifcfg-enp0s3     <--- check the interface config file to ensure subnet mask [PREFIX] is correct
// ifdown enp0s3  <--- take the network down
// ifup enp0s3    <--- bring the network back up with new settings
// - Demo - Troubleshooting Network Issues - Layer 4
// - server1 - (ping: no route to host)
// scp root@192.168.1.1:/var/www/html/largeFile.bin . <--- connects to server0 and transfers the large file to the working directory 
// - server0
// ss -lnt4                                                   <--- investigate wether the server is listening on the port for connections.
// firewall-cmd --list-all                                    <--- displays the firewall rules
// firewall-cmd --permenent --zone=public --add-service=ssh   <--- adds ssh service to the firewall
// firewall-cmd --reload                                      <--- reloads the firewall with the updated settings

// Troubleshooting Commands
// Layer 1 - eth-tool
// Layer 2 - arp
// Layer 3 - ip (addr/route) | route | ping
// Layer 4 - netstat | ss

// Wireshark is GUI for analysing the network
/**
 * Docker Networking
 *
 * Linux commands to install bridge-utils and inspect network
 * sudo apt-get install bridge-utils  <--- installs bridge-utils
 * brctl show                         <--- shows bridge networks
 * ip link show                       <--- displays network information
 */

// Three Pillars of Docker Networking //
// - CNM        - Container Network Model <- Spec provised by Docker [Sandox - Endpoint - Network]
// - Libnetwork - Implemenation of CNM by Docker
// - Drivers    - Network specific details [Overlay, MACVLAN, IPVLAN, Bridge]

// Basic Docker Networking Commands //
// docker network                 <--- lists the subcommands
// docker network ls              <--- lists the current networks
// docker network inspect {name}  <--- shows the information about a network
// docker info                    <--- displays information about docker included Network section

// Use Cases and Drivers //
// - Single-host networking
// docker network create -d bridge --subnet 10.0.0.1/24 {networkName}       <--- creates a bridge network with a subnet of 10.0.0.1/24
// docker run -dt --name {name} --network {networkName} {image} sleep 1d    <--- runs a container attached to a network for 1 day
// docker exec -it {name} sh                                                <--- opens up a shell termical on the docker container
// docker run -d --name {name} --network {networkName} -p 5000:8080 {image} <--- runs a container using an image where the host 5000 port is mapped to 8080 and on the selected network

// - Multi-host networking - Underlay Networks work over ports 4789(UDP),7946(TCP/UDP),2377(TCP)
// docker swarm init                                                                                      <--- enables swarm mode on host (supplies a code to run on the other node)
// docker node ls                                                                                         <--- lists the nodes connected to the swarm
// docker network create -d overlay {overlayName}                                                         <--- creates an overlay network driver
// docker service create --name {name} --network {overlayName} --replicas 2 {image} sleep 1d              <--- creates 2 services on nodes on the overlay network
// docker service create --name {name} -p 5000:8080 --network {overlayName} --replicas 3 {image} sleep 1d <--- creates 3 services on nodes on the overlay network and publishes port 5000 and maps to 8080
// docker service ps {name}                                                                               <--- displays information about services

// - Joining Existing Networks with the IPVLAN Driver
// docker network create -d ipvlan --subnet={networkIP} --gateway={netGateway} -o parent=eth0 {name}  <--- creates an ipvlan network on the network IP

// Network Services //
// - Service Discovery
// Service discovery is automatic in Docker for Services and Containers created with --name or --alias
// Every container gets a small DNS resolver which lists on 127.0.0.11:53 - Forwards requests to DNS Server on Docker host
// Network scoped so only containers on same network can be called.
// - The Routing Mesh (Layer 4 - Transport Layer)
// Create a swarm which creates a swarm-wide overlay network called Ingress
// Create a service and publish it on a port (swarm-wide)
// Incoming request can hit any node and will resolve to the service VIP, VIP-based load balancing will balance across all tasks in a service.
// - The Http Routing Mesh (Layer 7 - Application Layer)
// Builds on top of port based / L4 routing mess
// Allows multiple services on the same port
// Uses services with labels to map traffic to ucp-hrm service which then maps the headers to containers

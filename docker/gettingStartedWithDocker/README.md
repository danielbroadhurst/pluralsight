# Getting Started with Docker

Official repo for Getting Started with Docker video training course by [@nigelpoulton](https://twitter.com/nigelpoulton)

## first-container

This folder contains the files to build a single-container web app (express, handlebars...)
- Docker hub image: [nigelpoulton/gsd:first-ctr](https://hub.docker.com/repository/docker/nigelpoulton/gsd)

## multi-container

NEEDS UPDATING
This folder contains the files to build a multi-container web app with Compose.
- Pthon flask app with redis cache
- Docker hub image: [nigelpoulton/gsd:compose-app](https://hub.docker.com/repository/docker/nigelpoulton/gsd)

## swarm-stack

This folder contains the files to build a multi-container web app with Swarm Stacks.
- Pthon flask app with redis cache that also returns hostname of container servicing request
- Docker hub image: [nigelpoulton/gsd:swarm-stack](https://hub.docker.com/repository/docker/nigelpoulton/gsd)


## DOCKER Commands - Deploying a Containerized App

Build an image from a Dockerfile
- docker image build -t {dockerUsername}/{repoName}:{imageName} .
Host a repository on a Registry
- docker login
- docker image push {dockerUsername}/{repoName}:{imageName}
Running a Containerized App
- docker container run -d --name {name} -p 8000:8080 {dockerUsername}/{repoName}:{imageName}
Managing a Containerized App
- docker container stop {name / id}
- docker container start {name / id}
- docker container rm {name / id}
- docker container run -it --name {name} alpine sh  <Opens up an interactive terminal session of an alpine repo.>

## DOCKER Commands - Microservices and the Real World

Multi-container Apps with Docker Compose
- docker-compose up -d 
Docker Swarm - This requires 5 different nodes which are running docker, 3 Managers and 2 Workers
- manager1
  - docker swarm init --advertise-addr=192.168.0.20 
  - docker swarm join-token manager <prints out a docker swarm join token for managers which can be used on other nodes>
  - docker sawrm join-token worker <prints out a docker swarm join token for workers which can be used on other nodes>
- manager2
  - docker swarm join --token <token>
- manager3
  - docker swarm join --token <token>
- worker1
  - docker swarm join --token <token>
- worker2
  - docker swarm join --token <token>
Microservices and Docker Services  - only availble in swarm mode
- docker service create --name {name} -p 8080:8080 --replicas 3 {dockerUsername}/{repoName}:{imageName}
- docker service ps {name}        <--- lists all the services
- docker service scale {name}=10  <--- scales up the service to 10 replicas and keeps 10 running
Multi-container Apps with Docker Stacks
- Image must be in a repo
- docker stack deploy -c docker-compose.yml {name}.
- docker stack ls
- docker stack services {name}
- docker stack ps {name}
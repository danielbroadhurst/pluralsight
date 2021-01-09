/**
 * Docker and Kubernetes: The Big Picture
 */

// Containers: Primer // Containers sit on top of a Linux/Windows Server
// docker image ls                <--- lists all the current images
// docker stop {name}             <--- stops the container
// docker container start {name}  <--- starts a previously stopped container

// Docker //
// docker image build -t {username}/{imageName}:{tag} .                            <--- builds and image from the pwd
// docker image ls {username}/{imageName}:{tag}                                    <--- displays the image information
// docker image push {username}/{imageName}:{tag}                                  <--- pushes to the docker hub registry
// docker container run -d --name {name} -p 8080:8080 {username}/{imageName}:{tag} <--- starts a container and exposes port 8080

// Kubernetes //
// Manages containerized apps at scale. Kubernetes Clusters manage an app.
// Deploys and manages apps, scaling, self healing, running updates.

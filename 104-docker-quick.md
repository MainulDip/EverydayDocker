### Layers:
Docker images consist of several layers. Every layer denotes a collection of filesystem modifications. Each Dockerfile instruction adds a layer on top of the previous one while building a Docker image.

Layers are unchangeable once they are produced, which makes them immutable. Because of its immutability, Docker can effectively reuse layers during image builds and deploys, which speeds up build times and uses less disk space.

Caching in depth and Multilayer Caching https://www.tutorialspoint.com/docker/docker_image_layering_and_caching.htm

### Image:
Docker images are self-contained templates that are used to build containers, in short blueprint of containers. 

```sh
docker images ls -q # listing
docker pull ubuntu:20.04 # pulling
docker build -t myapp:latest . # building image from Dockerfile
docker tag myapp:latest myrepo/myapp:v1.0 # adding extra tag for an existing image
docker push myrepo/myapp:v1.0 # pushing to a registry
docker rmi myapp:latest # removing an image
docker rmi $(docker image ls -q) # deleting all docker local images
docker image inspect myimage:latest # inspecting an image

```


### Container:
A Docker container is a runtime instance of a Docker image. `run`, `stop`, `pause`, `restart`, `logs`, `exec`

```sh
docker run -d -p 8080:80 nginx # running a container form a image
docker run -d -p 8080:80 --name my_container nginx:latest # running an image while assigning a name
docker stop my_container # stopping a container by its name
docker exec -it my_container bash # Executing Commands in a Running Container

docker ps -a # listing all containers
docker logs my_container # viewing the specified container's log

docker rm my_container # removing a docker container
docker container prune # emove all stopped containers & free space
docker rm $(docker ps -aq) # remove all all running/stopped container
```

Creating an image from container `docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]` => `docker commit mywebserver mynewimage`

Important commands
`Docker exec` − Execute a command in an active container.
`Docker cp` − Copy files/folders between a container and the local filesystem.
`Docker top` − Display the running processes of a container.
`Docker attach` − Attach to a running container to interact with it.

### Use .dockerignore File:
If any files or directories are not required for the image, exclude them to avoid the cache being invalidated when these files change.
```sh
# .dockerignore
.git
node_modules
dist
Dockerfile
```
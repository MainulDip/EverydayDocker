<<<<<<< HEAD
# Overview

___

This is a list and lite documentation of everyday use docker commands :)

## Container & Image

___

Container is a running instance of an image. 

```sh
docker images \\ will show local downloaded images
docker pull image:tag \\ will download image
docker run image:tag \\
docker run -d image:tag
docker container ls
docker ps
docker ps -aq
docker ps \\ returns no-formatted processess
docker ps --format=$FORMAT \\ Returns the formated processes that had been assinged previously
```
### Removing Image
```sh
docker image rm [OPTIONS] IMAGE [IMAGE...]

docker image rm node:lts-alpine
```
## port/s & Container Management
=> Container port and host machine ports are different. To access container port, binding them is nessery. If no machine port is assaigned, container will be inaccessable. 
___

Stop(stop) and Remove(rm)
```sh
docker stop [CONTAINER-ID]/[NAME]
docker ps -a
docker rm [CONTAINER-ID]/[NAME]
docker rm $(docker ps -aq)
docker rm -f $(docker ps -aq)
```
Note: Try to Fix "docker rm -f $(docker ps -aq)" not running on linux

Export/Map Single or Multiple Port/s
```sh
docker run -d -p 7000:80 image:tag
docker run -d -p 7000:80 -p 4000:80 image:tag
```

More command
```sh
docker ps --help
```


## Naming and Formatting Processess:

___


Naming Container

```sh
docker run --name customName -d -p 7000:80 image:tag
```
And start/stop "customName" container by this code

```sh
docker start customName
docker stop customName
```

Initiate format on the fly
```sh
docker ps --format="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
```


assaign format process to a variable named FORMAT

```sh
export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
```

Note: "export" will work only unix shells.
Tips: Set git bash as vscode's default terminal. ctrl+shift+p and search for "select default profile" for terminal and select "Git Bash"

Returns no-formatted processess
```sh
docker ps
```

Returns the formated processes console that had been assinged previously by $FORMAT variable

```sh
docker ps --format=$FORMAT
```

## Naming Container | Volumes | Networks:
Allows sharing of data, files and folders.
=> Between host and containers
```sh
docker volume ls
docker network ls
```

```sh
docker run --name volumeTest -v $(pwd):/usr/share/nginx/html:ro -d -p 4000:80 nginx:latest
```

=>For PowerShell on windows 10
```sh
docker run --name wtests --volume ${pwd}:/usr/share/nginx/html -d -p 4000:80 nginx:latest
```

=>For Gitbash on windows 10
#challenge => git bash volume mounting [ resolve the empty ;c directory issues]

```sh
docker run --name wtests --volume /$(pwd):/usr/share/nginx/html -d -p 4000:80 nginx:latest 
```
Ref: https://stackoverflow.com/questions/50608301/docker-mounted-volume-adds-c-to-end-of-windows-path-when-translating-from-linux


## Inspecting Docker Internals With Voulme Mounting:

___


```sh
docker exec -it volumeTest bash
```

Then move to mounted volume by
```sh
cd ./usr/share/nginx/html/
```
And inspect internal file structure and ctrl+d to exit

### Sharing Volume Between Cotainers
___
--volumes-from <containername> is used to share a mounted volume with another container

```sh
docker run --name newsite --volumes-from voulumeTest -d -p 7000:80 nginx:latest
```

### DockerFile : Build Own Image
___




New Code

=======
# Overview

___

This is a list and lite documentation of everyday use docker commands :)

## Container & Image  

___

Container is a running instance of an image. 

```sh
docker images \\ will show local downloaded images
docker pull image:tag \\ will download image
docker run image:tag \\
docker run -d image:tag
docker container ls
docker ps
docker ps -aq






docker ps \\ returns no-formatted processess
docker ps --format=$FORMAT \\ Returns the formated processes that had been assinged previously
```

Then Start The Node Server In Watch Mode By Running

```sh
npm run start
```

After finishing development run
```sh
npm run build
```

## Expose port/s & Container Management

___

Stop(stop) and Remove(rm)
```sh
docker stop [CONTAINER-ID]/[NAME]
docker ps -a
docker rm [CONTAINER-ID]/[NAME]
docker rm $(docker ps -aq)
docker rm -f $(docker ps -aq)
```

Export/Map Single or Multiple Port/s
```sh
docker run -d -p 7000:80 image:tag
docker run -d -p 7000:80 -p 4000:80 image:tag
```

More command
```sh
docker ps --help
```


## Naming and Formatting Processess:

___


Naming Container

```sh
docker run --name customName -d -p 7000:80 image:tag
```
And start/stop "customName" container by this code

```sh
docker start customName
docker stop customName
```

Initiate format on the fly
```sh
docker ps --format="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
```


assaign format process to a variable named FORMAT

```sh
export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
```

Note: "export" will work only unix shells.
Tips: Set git bash as vscode's default terminal. ctrl+shift+p and search for "select default profile" for terminal and select "Git Bash"

Returns no-formatted processess
```sh
docker ps
```

Returns the formated processes console that had been assinged previously by $FORMAT variable

```sh
docker ps --format=$FORMAT
```

## Naming and Formatting Processess:
Allows sharing of data, files and folders.
=> Between host and containers
=> Between containers

```sh
docker run --name volumeTest -v $(pwd):/usr/share/nginx/html:ro -d -p 4000:80 nginx:latest
```

=>For PowerShell on windows 10
```sh
docker run --name wtests --volume ${pwd}:/usr/share/nginx/html -d -p 4000:80 nginx:latest
```

=>For Gitbash on windows 10
#challenge => git bash volume mounting [ resolve the empty ;c directory issues]

```sh
docker run --name wtests --volume /$(pwd):/usr/share/nginx/html -d -p 4000:80 nginx:latest 
```
Ref: https://stackoverflow.com/questions/50608301/docker-mounted-volume-adds-c-to-end-of-windows-path-when-translating-from-linux


=> Enter into the live containers
```sh
docker exec -it wtests bash
la -la
cd usr/share/nginx/html/
ls -la
touch about.html
```
=> Exit from interactive mode => ctrl+d


### Sharing Volume Between Multiple Containers

```sh
sudo docker run --name wsitecopy --volumes-from wtests -d -p 7000:80 nginx:latest
```
### DockerFile: Build Image
___
# Build from nginx base Image
FROM nginx:latest
# Share Everything from this (.) directory and mount it to '/usr/share/nginx/html'
ADD . /usr/share/nginx/html
# Build the image | docker build --help
docker build -t name:tag .
It will build a docker image from this/current (.) directory
```sh
docker build --tag customsite:latest .
```

Build Container From This
```sh
docker run --name customsitecon -d -p 7000:80 customsite:latest
```

### Node/Express Dokerization
```sh
docker build -t user-service-api:latest .
```
=> build user-service-api image using the Dockerfile from this (.) directory


```sh
sudo docker run --name user-api -d -p 7000:4000 user-service-api:latest
```
Note: Map Node/Express Port 4000 With Docker's Port 7000

### Creating Layer in Dockerfile for caching
=> If Dockerfile is not layerd/arranged correctly (not include package.json and package.lock.json inside working directory) docker will download every packages evenif no new package was added/removed from package.json. So add package*.json and run npm install before adding the directory to working directory (ADD . .)

```sh
FROM node:latest
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node index.js
```

### Different Linux Distro => Alpine
Pulling alpine image
```sh
sudo docker pull node:alpine
docker pull nginx:alpine
```
$ docker image ls
REPOSITORY         TAG       IMAGE ID       CREATED       SIZE
user-service-api   latest    f75610179213   9 hours ago   909MB | node:latest
node               alpine    ea83436d30c8   3 days ago    110MB
customsite         latest    09bb10498684   4 days ago    135MB
nginx              latest    f8f4ffc8092c   3 weeks ago   133MB
nginx              alpine    513f9a9d8748   6 weeks ago   22.9MB

Note: Alpine based versions are smaller than latest

### Tags and Versioning:
Use exact version in dockerfile's FROM command to avoid breaking change effect with the custom build.
=> Creating Tag
```sh
docker tag customsite:latest customsite:1
```


### Docker Registries
=> Stores and distribute Docker images.
=> CD/CI pipeline
=> To store your own registry, use Dockerhub | Amazon ECR | quay.io documentation.

### Inspecting and logging Docker Images/Containers
```sh
docker inspect nginx:latest
docker inspect customsitecon:latest
```
```sh
docker logs <containerid>
```

### Bash into containers
```sh
docker exec --help
docker exec -it <containername/id> <bash-directory>
```
Note: to get the bash directory of a running container inspect that first
    and figuire out the bash directory.

```sh
docker exec -it <running-container-name/id> /bin/sh
````

## Notes:

___

### Docker Network
=> Isolated Network. Containers can connect within the same network using their container name (without port or anything). And other service can connect with them using port number.

=>Creating New Network
```sh
docker network ls
docker network create my-mongo-network
```

=> Database connect through network ( -e for environmental variables)
```sh
docker run -d --network my-mongo-network --name my-mongo-con \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
mongo:4.4.10-focal
```

=> Configuire mongo-express with mongodb database to stablish connection through docker network
```sh
docker run -d \
--network my-mongo-network \
--name my-mongo-express-con \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME="admin" \
-e ME_CONFIG_MONGODB_ADMINPASSWORD="password" \
-e ME_CONFIG_MONGODB_SERVER="my-mongo-con" \
mongo-express:1.0.0-alpha.4
```

Note: Specify network to connect using just the name

=>Images
mongo:4.4.10-focal
mongo-express:1.0.0-alpha.4

New Code

#### Happy Coding :) 
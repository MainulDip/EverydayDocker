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

## Notes:

___

New Code

#### Happy Coding :) 
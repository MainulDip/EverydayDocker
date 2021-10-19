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


## Notes:

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
## Notes:

___

New Code

>>>>>>> c22120ec69a0b96b0e7efd50db038ea29a04617b
#### Happy Coding :) 
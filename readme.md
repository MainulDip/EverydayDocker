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

Initiate format on the fly
```sh
docker ps --format="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
```


assaign format process to a variable named FORMAT
Note: "export" will work only unix shells.
Tips: Set git bash as vscode's default terminal. ctrl+shift+p and search for "select default profile" for terminal and select "Git Bash"
```sh
export FORMAT="ID\t{{.ID}}\nNAME\t{{.Names}}\nImage\t{{.Image}}\nPORTS\t{{.Ports}}\nCOMMAND\t{{.Command}}\nCREATED\t{{.CreatedAt}}\nSTATUS\t{{.Status}}\n"
```

Returns no-formatted processess
```sh
docker ps
```

Returns the formated processes that had been assinged previously
```sh
docker ps --format=$FORMAT
```

## Notes:

___

New Code

#### Happy Coding :) 
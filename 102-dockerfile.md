### Building image using `Dockerfile`:
Dockerfile is a text file (no extension) is used to build a container image.

The docker build command creates a Docker image from a `Dockerfile` placed at the provided path. During the build process, Docker follows the instructions in the Dockerfile to generate layers and assemble the final image.

```sh
# Use a base image from Docker Hub
FROM alpine:3.14

# Set the working directory inside the container
WORKDIR /app

# Copy the application files from the host machine to the container
COPY . .

# Expose a port for the application (optional)
EXPOSE 8080

# Define the command to run when the container starts
CMD ["./myapp"]
```
Build the image by `docker build -t myapp:latest .`

### Creating Layer in Dockerfile for caching
If Dockerfile is not layered/arranged correctly (not include package.json and package.lock.json inside working directory) docker will download every packages even-if no new package was added/removed from package.json. So add package*.json and run npm install before adding the directory to working directory (ADD . .)

```sh
FROM node:latest
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node index.js
```

https://www.tutorialspoint.com/docker/docker_image_layering_and_caching.htm


### Layer & Layer Groups | Base(First), Intermediate(Second) & Top(Last):
Every instruction like in Dockerfile is considered a `layer`. Based on 
usages, the layers can be divided into 3 groups.

`Base` Layer: The majority of the time, base layer is created from an already-existing image, like node, alpine, or Linux.

`Intermediate` Layer: are added on top of the base layer. Instructions like `RUN`, `COPY`, or `ADD` are used Install software packages, transfer source code into the image, or configure environment variables, etc.

`Top/Application` Layer: Dockerfile's last layer,contains the actual code for the application and last-minute setups. 

### Caching layers:
To reuse previously built layers without re-building docker use some caching mechanism to reduce computation, bandwidth and time to build an image.

Every Dockerfile commands/instructions are executed line by line to build an image. Every instruction line is a layer. Docker can reuse the one that was already created. `Layer caching` is the term for this procedure. 

### Utilize caching practices:
- Start with a Stable Base Image, ie, `FROM ubuntu:20.04`
- Order Instructions by Volatility (how often it changes), start with least changing layer first.
- Install Dependencies Together and minimize the layer numbers

```Dockerfile
RUN apt-get update && apt-get install -y \
   curl \
   vim \
   git \
   && apt-get clean
```

- Separate Application Code and Dependencies, so that changing the application code will not invalidate the dependency cache.

```Dockerfile
# Install application dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy application code
COPY . /app
```


- Use Multi-Stage Builds to make the final image lean and free of extra layers. Artifacts can be created and dependencies can be cached by intermediate stages.

```Dockerfile
# Build stage
FROM golang:1.16 as builder
WORKDIR /app
COPY . .
RUN go build -o myapp

# Final stage
FROM alpine:3.13
COPY --from=builder /app/myapp /usr/local/bin/myapp
CMD ["myapp"]
```

- Minimize number of layer by combining commands. Here using single `RUN` command with `&&` join

```Dockerfile
RUN apt-get update && \
   apt-get install -y curl vim git && \
   apt-get clean
```

- Use `.dockerignore` File to exclude non-required files for image building. So changing those will not invalidate cache.

```txt
# .dockerignore
.git
node_modules
dist
Dockerfile
```

### Best practice example:
To utilize layer caching

```Dockerfile
# Base image
FROM python:3.9-slim

# Install dependencies
RUN apt-get update && apt-get install -y \
   build-essential \
   libssl-dev \
   libffi-dev \
   python3-dev \
   && apt-get clean

# Copy and install Python dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy application code
COPY . /app

# Set the working directory
WORKDIR /app

# Set the entry point
CMD ["python", "app.py"]
```

### Frequently used commands/instructions in Dockerfile:
`FROM`	Specifying the base image you're building from

`RUN`	Run a command on a new layer of the current image during image build process. ie, `RUN apt update && apt -y install apache2`

`COPY`	Copy files or directories from the host filesystem into the image filesystem

`WORKDIR`	Set the working directory for any subsequent instructions.

`ENV`	It sets the environment variables

`EXPOSE`	Inform Docker that the container has interests in specific network ports at runtime

`ENTRYPOINT` & `CMD` both of this commands, inside Dockerfile or included in `docker run ...`, will run when the container starts. 

But in case of using `ENTRYPOINT ["cmd", "arg1", "arg2]` in Dockerfile along with , commands supplied using `docker run --entrypoint `, later will be appended with the Dockerfile's ENTRYPOINT command. This also support shell like syntax, which will be overridden in the same case. `<INSTRUCTION> ["EXECUTABLE", "PARAMETER"]` is `exec` syntax.

`CMD`	Provides the default command and/or parameters for the Container. So if any commands are supplied after `docker run ... echo Something` will override Dockerfile's one.


`VOLUME`	Creates a mount point with the specified path and marks it as holding externally mounted volumes
`USER`	Sets the username or UID to use when running the image

```Dockerfile
# Use the official Node.js image as a base
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies, run commands are executed during the image build process
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000
# EXPOSE <port> [<port>/<protocol>] ie, `EXPOSE 443/tcp`
# `<port>` − Port that you wish to expose.
# `<protocol>` − optional, with a default of TCP. May be TCP or UDP.

# Set environment variables
ENV NODE_ENV=production

# Default command to run when the container starts
# executes when the container starts
CMD ["node", "index.js"]
# will be same in terminal as `node index.js`
```

### Shell and exec instruction form:
`Shell Form` Takes the form of `<INSTRUCTION> <COMMAND>.`, ie, `CMD echo TEST` or `ENTRYPOINT echo TEST`

`Exec Form`	Takes the form of `<INSTRUCTION> ["EXECUTABLE", "PARAMETER"]`, ie, `CMD ["echo", "TEST"]` or `ENTRYPOINT ["echo", "TEST"]`

### Commands used with Dockerfile:
`docker build -t my-node-app:v1 .` to Build an image from a Dockerfile that is in this directory
`docker tag my-node-app:v1 my-registry/my-node-app:v1` tagging an image.

Other command

```sh
docker run -p 3000:3000 my-node-app:v1
docker stop <container-id or container-name>
docker rmi my-node-app:v1 # to remove an image
```
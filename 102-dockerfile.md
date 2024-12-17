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
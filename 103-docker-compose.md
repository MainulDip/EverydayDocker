### `docker-compose` overview:
Docker Compose is used to simplify the management of multi-container applications. It uses a YAML file in which the definition of services, networks, and volumes that an application requires is described.

Basically, through the docker-compose.yml file, we define the configuration for each container: build context, environment variables, ports to be exposed, and the relationship between services. Running all the defined services can be done by one command, the docker-compose up command, ensuring they work together accordingly. 

It contains
`Version` − This defines the format of the Docker Compose file so that it ensures compatibility with different Docker Compose features.
`Services` − Contains lists of all services (containers) composing the application. Each service is described with uncounted configuration options.
`Networks` − It will specify custom networks for inter-container communication and may specify the configuration options and network drivers.
`Volumes` − Declares shared volumes that are used to allow persistent storage. Volumes can be shared between services or used to store data outside the container's lifecycle.

```yaml
version: '3.8'
services:
   web:
      image: nginx:latest
      ports:
         - "80:80"
      volumes:
         - web-data:/var/www/html
      networks:
         - webnet

   database:
      image: mysql:latest
      environment:
         MYSQL_ROOT_PASSWORD: example
      volumes:
         - db-data:/var/lib/mysql
      networks:
         - webnet

networks:
   webnet:
      driver: bridge

volumes:
   web-data:
   db-data:
```

https://www.tutorialspoint.com/docker/docker_compose.htm

### Compose Commands:
`docker-compose` or `docker compose` both can be used
use `-f` flag to specify filename, multiple compose files are allowed
`docker compose -f docker-compose.yml -f docker-compose.admin.yml run backup_db`

use `-d` flag to run the container in the background

```sh
docker-compose up -d # up/down
docker-compose start/stop/restart
docker-compose build # if a service's Dockerfile is changed
#  or the contents of its build directory
# running`~build` will rebuild the service image

# Running command inside of a running container
# docker-compose exec <service_name> <command>
docker-compose exec web_service bash
# docker compose run to Run a one-off command on a service
# docker compose run [OPTIONS] SERVICE [COMMAND] [ARGS...]
docker compose run service_name bash # starts the service_name service and runs bash as its command
# https://docs.docker.com/reference/cli/docker/compose/run/

# Monitoring commands
docker-compose ps/logs # -a
```

Docs https://docs.docker.com/reference/cli/docker/compose/
& https://docs.docker.com/reference/cli/docker/compose/run/

### Compose Networks:
Docker Compose networks allow for communication between services. By default, Docker Compose defines a single network for all services described under docker-compose.yml. Custom network configuration can also be defined.

Network configuration options
`driver` − This specifies the driver to be used in the network (e.g., bridge, overlay).
`driver_opts` − Options for the network driver.
`ipam − Specifies` the IP address management configurations like subnets and IP ranges.

```yaml
networks:
   frontend:
      driver: bridge
   backend:
      driver: bridge

services:
   web:
      networks:
         - frontend

   api:
      networks:
         - frontend
         - backend

   db:
      networks:
         - backend
```

### Compose Network port mapping:
Used to map host machine's port with the container's exposed port. In this way, services within that very container will then be accessible either from a host's network or from the internet.

### Compose Volumes:
Volumes are for persisting data created or consumed by Docker containers and those are kept independent/separate from the containers.

`Bind Mounts` − is a way through which files and directories can be shared between the host and containers. It provides a high level of flexibility in storing but loses isolation.

Volume configuration options
`External` − Indicates whether the volume is created outside Docker Compose.
`Driver` − Specifies the volume driver to use.
`Driver_opts` − Options to configure the volume driver.

```yaml
volumes:
   db-data:
   app-data:
      external: true

services:
   database:
      image: postgres:latest
      volumes:
         - db-data:/var/lib/postgresql/data

   app:
      image: myapp:latest
      volumes:
         - app-data:/usr/src/app
```

### Environment variables in compose:
Used to pass configuration settings. These variables can be defined within a service's configuration as part of the `environment` section or loaded from an external file.

Variables can be set `inline` with service or using external file
`Inline` − Register environment variables within your service definition.
`env_file` − This command allows environment variables to be loaded from an external file.

```yaml
services:
   web:
      image: myapp:latest
      environment:
         - NODE_ENV=production
         - API_KEY=12345

   database:
      image: postgres:latest
      env_file:
         - .env
```

* External .env file

```txt
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_DB=mydatabase
```
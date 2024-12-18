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
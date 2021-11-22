### Manual Docker Networking and Configuration:
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




Note: Success using the specified container on N4000 CPU Architecture (Low End)

## Bash into mongo container
```sh
docker inspect my-mongo-con
docker exec -it my-mongo-con bash
mongo -u admin -p password --shell
show dbs
``` 

### Connect Node Servers:
```sh

```
# Docker-compose

## Deployment with Docker-compose

The main 2 components needed to deploy API AutoFlow in Docker-compose is a docker image and docker compose service. Generally, deployments will also require load balancers for port access and config maps for customization and solution setup.

- **Dockerize Your Application**: Dockerize your application by creating a Dockerfile, which defines the environment and dependencies required to run your software. Specify the base image, install dependencies, and copy the application code into the Docker image.
- **Define Services in Docker Compose**: Create a **`docker-compose.yml`** file in the root directory of your project. Define the services that make up your software stack within this file. Each service represents a separate component of your application, such as a web server, database, or any other service required for your software to function.
- **Deployment:** Maintains the API AutoFlow nodes (**NOTE: the cluster requires a minimum of 2 nodes to begin operating**)
    - **Config Map** : (optional) This can include several useful files
         - [API AutoFlow System Variables](../../Advanced%20Guide/system-variable)
        - Solution Files : typically acquired through exporting existing configuration
        - License File : product license
        - Additional Files : any files the solution might depend on
    - **Load Balancer** : Generally, this will include 2 ports: 1 for the UI and 1 for the user solution
    - **Specify Container Configurations**: For each service in the **`docker-compose.yml`** file, specify the container configurations. These configurations include the Docker image to use (built from the Dockerfile), exposed ports, environment variables, mounted volumes, and any other necessary settings.
    - **Networking and Service Dependencies**: Define the networking and dependencies between services within the **`docker-compose.yml`** file. Specify which services depend on others and define the networking mode for communication between services.
    - **Build and Run Containers**: Use the **`docker-compose up`** command to build and start the containers defined in the **`docker-compose.yml`** file. Docker Compose will read the file, pull the required Docker images, build any images defined in the Dockerfile, and start the containers for each service.
    - Scale and Manage Services: Docker Compose allows you to scale and manage services easily. You can scale a service by specifying the desired number of containers for that service using the **`docker-compose up --scale &lt;service=&lt;number`** command. Additionally, you can stop and remove containers using **`docker-compose down`** or manage individual services using commands like **`docker-compose start`**, **`docker-compose stop`**, or **`docker-compose restart`**.
- **Monitoring and Logs**: Docker Compose provides options to monitor and access logs from the containers. You can view the logs of a specific service using the **`docker-compose logs &lt;service`** command. Additionally, you can use container monitoring tools or log aggregators to collect and analyze logs from multiple containers.
- **Environment-specific Configurations**: Docker Compose allows you to manage environment-specific configurations using environment variables. You can define environment variables in the **`docker-compose.yml`** file or use an environment file to store sensitive information separately.
- **Continuous Integration and Deployment**: Docker Compose can be integrated into your CI/CD pipelines to automate the building, testing, and deployment of your software. Use Docker Compose commands within your CI/CD scripts or configure your CI/CD tool to utilize Docker Compose for building and deploying your application.

## Service

```jsx
apiVersion: v1
kind: Service
metadata:
  name: autoflow-cluster-service
spec:
  clusterIP: None
  selector:
    app: autoflow
```

## Deployment

```jsx
apiVersion: apps/v1
kind: Deployment
metadata:
  name: deployment
spec:
  selector:
    matchLabels:
      app: autoflow
  replicas: 3
  template:
    metadata:
      labels:
        app: autoflow
    spec:
      volumes:
        - name: autoflow-config-map
          configMap:
            name: autoflow-config-map
      containers:
        - name: autoflow
          image: interactor/api-interactor:latest
          env:
            - name: AUTOFLOW_CLUSTER_KUBERNETES_SERVICE
              value: autoflow-cluster-service
            - name: REPLACE_OS_VARS
              value: "true"
            - name: POD_IP
              valueFrom:
                fieldRef:
                  fieldPath: status.podIP
          command: [ "/app/bin/interactor", "foreground" ]
          volumeMounts:
            - name: autoflow-config-map
              mountPath: /app/data
```

## Config Map

Config maps can be made in several ways but the following command will accomplish what we need:

```jsx
kubectl create configmap autoflow-config-map \
  --from-file config.json \
  --from-file autoflow.conf
```

Where config.json is the solution file made by exporting configuration and autoflow.conf contains the system variables in an environment variable format (KEY=VALUE).

## Load Balancer

This load balancer forwards port 4000 for API AutoFlow UI and port 8080 for general use by solutions (this part is optional).

```jsx
apiVersion: v1
kind: Service
metadata:
  name: autoflow-load-balancer
spec:
  type: LoadBalancer
  selector:
    app: autoflow
  ports:
    - name: ui
      protocol: TCP
      port: 4000
      targetPort: 4000
    - name: solution
      protocol: TCP
      port: 8080
      targetPort: 8080
```
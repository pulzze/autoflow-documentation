# Kubernetes

# Deploying with Kubernetes

The main 2 components needed to deploy API AutoFlow in Kubernetes is a deployment and headless service. Generally, deployments will also require load balancers for port access and config maps for customization and solution setup.

- **Service** : Provides the nodes the ability to connect to pods directly (required for deployment to work)
- **Deployment** : Maintains the API AutoFlow nodes (**NOTE: the cluster requires a minimum of 2 nodes to begin operating**)
- **Config Map** : (optional) This can include several useful files
    - [API AutoFlow System Variables](../../Caching%20and%20Storage/System%20Variable)
    - Solution Files : typically acquired through exporting existing configuration
    - License File : product license
    - Additional Files : any files the solution might depend on
- **Load Balancer** : Generally, this will include 2 ports: 1 for the UI and 1 for the user solution

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
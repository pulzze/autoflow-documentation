---
sidebar_position: 1
title: Docker
sidebar_label: Docker
description: Docker installation guide for API Autoflow
image: img/api-autoflow-logo.png
keywords:
  - docker
---
# Docker

This section will demonstrate how to launch a single docker instance from a shell terminal using a folder to upload configuration options and store data. In order to maintain persistent configuration changes, you will need to mount a folder from your file system. Make sure to add a folder somewhere and open a terminal and navigate to that folder.

You may **optionally** add the following files to that folder:

1. `autoflow.conf` details for this file can be found [here](../../../Documentation/Guide/Settings/global-variable)
2. `config.json` this is an exported configuration
3. `license.json` this is your license file

In order to create a docker container for API AutoFlow, you can use the following command.

```bash
docker run -dit \
  --name api-interactor \
  --mount type=bind,source="$(pwd)",target=/app/data \
  -p 4000:4000 \
  -p 8080:8080 \
  -p 1111-1121:1111-1121 \
  interactor/api-interactor:latest
```


> 💡 Note that ports _8080_, _1111_ and _2222_ are opened to be used as part of the solution you create.
>
> 💡 Port **4000** is used by the API AutoFlow UI.


If you would like to use a specific docker image, you can replace the word `latest` with the desired tag name. Also, you can add/remove ports using the `-p` flag and you may also change the container name by replacing `-name api-interactor`

Once the container is made it will start immediately. You can stop and start it using:

`docker stop api-interactor`

`docker start api-interactor`

If you would like to remove the container:

`docker rm api-interactor`

If you would like to attach to the running console:

`docker attach api-interactor`
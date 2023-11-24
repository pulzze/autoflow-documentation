---
title: Server
sidebar_label: Server
description: API Server
image: img/api-autoflow-logo.png
keywords:
  - server
  - api
---

import ApiServer from "@site/static/img/guide/API/server/server.jpg"

# Server(s) in API

List of configured servers. The `servers` object is used to define the base URL(s) for the API. This object allows you to specify one or more server URLs where the API is hosted or accessible. The `servers` object is often included at the root level of the OpenAPI document.

Here's an example of using the `servers` object:

#### Code-based configuration

```yaml
openapi: 3.0.0
info:
  title: Sample API
  version: 1.0.0
servers:
  - url: https://api.example.com/v1
    description: Production server
  - url: https://staging.api.example.com/v1
    description: Staging server
paths:
  # ...
```

#### Visual configuration

<img src={ApiServer} alt="API Servers" class="myResponsiveImg" width="800"/>

In this example:

- The `servers` object contains an array of server objects, where each object has a `url` property indicating the base URL of the server.
- Each server object may also have an optional `description` property providing additional information about the server.

Here are some key considerations and options related to the `servers` object:

1. **Multiple Servers:**
   - You can define multiple servers if your API is accessible from different base URLs. This is useful, for example, when you have separate servers for production and staging environments.

    ```yaml
    servers:
      - url: https://api.example.com/v1
        description: Production server
      - url: https://staging.api.example.com/v1
        description: Staging server
    ```

2. **Variables in Server URLs:**
   - Server URLs can include variables that can be substituted at runtime. Variables are specified using curly braces `{}`.

    ```yaml
    servers:
      - url: https://{username}.api.example.com/v1
        description: User-specific server
    ```

3. **Default Server:**
   - If no server is specified, clients are expected to use the default server. The first server in the `servers` array is considered the default unless overridden.

    ```yaml
    servers:
      - url: https://api.example.com/v1
        description: Default server
    ```

4. **Variables Resolution:**
   - The variables used in server URLs can be resolved at runtime based on client or user input.

5. **Server-Level Security:**
   - Security schemes defined at the server level apply to all operations within that server unless overridden at the operation level.

    ```yaml
    servers:
      - url: https://api.example.com/v1
        description: Production server
        security:
          - apiKey: []
      - url: https://staging.api.example.com/v1
        description: Staging server
        security:
          - apiKey: []
    ```

Including the `servers` object in your OpenAPI document helps provide clarity about where the API is hosted and how clients should interact with it. This is especially important when dealing with APIs that are deployed across different environments or have variations in their base URLs.

Reference: https://swagger.io/docs/specification/api-host-and-base-path/
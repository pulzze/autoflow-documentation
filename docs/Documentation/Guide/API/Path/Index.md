---
sidebar_position: 2
title: Path
sidebar_label: Path
description: API Paths
image: img/api-autoflow-logo.png
keywords:
  - path
  - api
---

import ApiPath from "@site/static/img/guide/API/path/path.jpg"

# Path(s) in API

List of configured paths

<img src={ApiPath} alt="API Paths" class="myResponsiveImg" width="800"/>

<br />

The `paths` allows you to define various options and attributes for each path. Here are some of the common options and components that can be used within the `paths` object:

1. **HTTP Methods (Operations):**
   - You can define various HTTP methods (operations) such as `get`, `post`, `put`, `delete`, etc., within each path. Each method describes a specific action that can be performed on that path.

    ```yaml
    paths:
      /users:
        get:
          summary: Get a list of users
          # ...
        post:
          summary: Create a new user
          # ...
    ```

2. **Path Parameters:**
   - Path parameters allow you to define dynamic parts of the URL path. They are specified using curly braces `{}` and are used to capture values from the request URL.

    ```yaml
    paths:
      /users/{userId}:
        get:
          summary: Get user by ID
          parameters:
            - name: userId
              in: path
              required: true
              description: ID of the user
              schema:
                type: integer
          # ...
    ```

3. **Query Parameters:**
   - Query parameters are used for filtering or modifying the request. They are typically added to the end of the URL after a question mark `?`.

    ```yaml
    paths:
      /users:
        get:
          summary: Get a list of users
          parameters:
            - name: page
              in: query
              description: Page number for pagination
              schema:
                type: integer
          # ...
    ```

4. **Request and Response Bodies:**
   - You can define request and response bodies for each operation. This includes specifying the expected format, structure, and content type.

    ```yaml
    paths:
      /users:
        post:
          summary: Create a new user
          requestBody:
            description: User information to be added
            required: true
            content:
              application/json:
                schema:
                  $ref: '#/components/schemas/User'
          responses:
            '201':
              description: User created successfully
          # ...
    ```

5. **Headers:**
   - You can specify headers expected in the request or included in the response.

    ```yaml
    paths:
      /users:
        get:
          summary: Get a list of users
          parameters:
            - name: Authorization
              in: header
              description: API key for authorization
              required: true
              schema:
                type: string
          # ...
    ```

6. **Security:**
   - You can associate security requirements with specific paths or operations, specifying how authentication and authorization should be handled.

    ```yaml
    paths:
      /users:
        get:
          summary: Get a list of users
          security:
            - apiKey: []
          # ...
    ```

These are just a few examples of the options available within the `paths` object in OpenAPI. The OpenAPI Specification provides a comprehensive set of features to describe different aspects of your API, allowing for clear documentation and consistent communication of API capabilities. The `paths` section serves as a central place to define the available routes, operations, and associated details for your API.

Reference: https://swagger.io/docs/specification/paths-and-operations/
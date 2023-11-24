---
title: Components
sidebar_label: Components
description: API components
image: img/api-autoflow-logo.png
keywords:
  - components
  - api
---

# Components

List of configured components. The `components` object is a container for various reusable elements, providing a way to define and reference common structures across the API definition. The `components` object includes several sub-objects or options that help organize and modularize the OpenAPI specification.

Here are some of the main options within the `components` object:

1. **Schemas:**
   - The `schemas` object is used to define reusable data models or schema components. These components can be referenced from multiple places in the API definition, promoting consistency.

    ```yaml
    components:
      schemas:
        User:
          type: object
          properties:
            id:
              type: integer
            username:
              type: string
    ```

2. **Responses:**
   - The `responses` object is used to define reusable response components. These components represent potential responses returned by different API operations.

    ```yaml
    components:
      responses:
        Success:
          description: A successful response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
    ```

3. **Parameters:**
   - The `parameters` object is used to define reusable parameter components. These components represent parameters that can be used in various parts of the API definition.

    ```yaml
    components:
      parameters:
        UserId:
          name: id
          in: path
          description: ID of the user
          required: true
          schema:
            type: integer
    ```

4. **Examples:**
   - The `examples` object is used to define reusable examples for schemas. These examples provide sample data that can be used to illustrate the structure of the data.

    ```yaml
    components:
      examples:
        UserExample:
          value:
            id: 1
            username: john_doe
    ```

5. **Request Bodies:**
   - The `requestBodies` object is used to define reusable request body components. These components represent potential request bodies for different API operations.

    ```yaml
    components:
      requestBodies:
        UserRequestBody:
          description: User information to be added
          required: true
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
    ```

6. **Headers:**
   - The `headers` object is used to define reusable header components. These components represent custom headers that can be used in different parts of the API definition.

    ```yaml
    components:
      headers:
        X-Custom-Header:
          description: Custom header for the API
          schema:
            type: string
    ```

7. **Security Schemes:**
   - The `securitySchemes` object is used to define reusable security scheme components. These components represent authentication mechanisms that can be used by various parts of the API definition.

    ```yaml
    components:
      securitySchemes:
        apiKey:
          type: apiKey
          in: header
          name: Authorization
    ```

These components options allow you to organize and reuse common structures within your OpenAPI definition, promoting consistency, reducing redundancy, and making your API specification more modular and maintainable. They enable you to define reusable building blocks that can be referenced throughout the API document.

Reference: https://swagger.io/docs/specification/components/
---
sidebar_position: 1
---
# API Level Security

## OpenAPI based API security

Though OpenAPI itself does not directly provide security mechanisms, it supports the integration and documentation of various security measures in API implementations.  Once the security measures are defined in the OpenAPI, the server that hosts the API needs to be configured for each security feature.

Here are some commonly used security features that can be incorporated into an API implementation using OpenAPI:

- **Authentication**: OpenAPI allows you to define authentication methods for your API. You can specify authentication schemes such as API keys, OAuth 2.0, JWT (JSON Web Tokens), or basic authentication. These authentication schemes can be documented and enforced through OpenAPI.
    
     Refer to Server Level Security documentations to learn how to configure server authentication
     
    
    Example
    
    ```yaml
    openapi: 3.0.3
    info:
      title: My API
      version: 1.0.0
      description: My API with OAuth 2.0 authentication
    
    servers:
      - url: https://api.example.com/v1
    
    components:
      securitySchemes:
        oauth2:
          type: oauth2
          flows:
            authorizationCode:
              authorizationUrl: https://auth.example.com/authorize
              tokenUrl: https://auth.example.com/token
              scopes:
                read: Read access to resources
                write: Write access to resources
    
    security:
      - oauth2: ['read', 'write']
    
    paths:
      /users:
        get:
          summary: Get a list of users
          responses:
            '200':
              description: Successful response
    
      /auth/callback:
        get:
          summary: OAuth 2.0 callback endpoint
          parameters:
            - name: code
              in: query
              required: true
              schema:
                type: string
          responses:
            '200':
              description: Successful response
    ```
    

In this example:

- The API specification includes the **`oauth2`** security scheme for OAuth 2.0 authentication.
- Under **`components`**, the **`oauth2`** security scheme is defined with the **`authorizationCode`** flow. It specifies the **`authorizationUrl`** where the client can initiate the authorization process and the **`tokenUrl`** where the client can obtain an access token.
- The **`scopes`** section under **`flows`** defines two scopes: **`read`** and **`write`**, representing different levels of access to resources.
- The **`security`** section indicates that the OAuth 2.0 authentication scheme with the **`read`** and **`write`** scopes is required for all endpoints within the API.
- The **`/users`** endpoint requires authentication with the OAuth 2.0 scheme.
- The **`/auth/callback`** endpoint is used as the OAuth 2.0 callback URL, where the authorization code is received.

This OpenAPI specification demonstrates how to integrate OAuth 2.0 authentication into your API. It specifies the necessary endpoints, scopes, and security scheme configuration to enable secure authentication and authorization for client applications interacting with the API.

- **Authorization**: OpenAPI enables you to describe and document the authorization mechanisms supported by your API. You can define scopes, roles, or permissions associated with specific API operations, and document how clients can request and obtain the necessary authorization to access protected resources.
    
     Refer to Server Level Security documentations to learn how to configure server authorization
     
    
    Example
    
    ```yaml
    openapi: 3.0.3
    info:
      title: My API
      version: 1.0.0
      description: My API with OAuth 2.0 authentication and authorization
    
    servers:
      - url: https://api.example.com/v1
    
    components:
      securitySchemes:
        oauth2:
          type: oauth2
          flows:
            authorizationCode:
              authorizationUrl: https://auth.example.com/authorize
              tokenUrl: https://auth.example.com/token
              scopes:
                read: Read access to resources
                write: Write access to resources
    
    security:
      - oauth2: ['read', 'write']
    
    paths:
      /users:
        get:
          summary: Get a list of users
          responses:
            '200':
              description: Successful response
          security:
            - oauth2: ['read']
    
      /users/{id}:
        get:
          summary: Get a specific user
          parameters:
            - name: id
              in: path
              required: true
              schema:
                type: string
          responses:
            '200':
              description: Successful response
          security:
            - oauth2: ['read']
    
      /users:
        post:
          summary: Create a new user
          requestBody:
            required: true
            content:
              application/json:
                schema:
                  type: object
                  properties:
                    name:
                      type: string
                    email:
                      type: string
          responses:
            '201':
              description: User created
          security:
            - oauth2: ['write']
    ```
    
    In this example:
    
    - The API specification includes the **`oauth2`** security scheme for OAuth 2.0 authentication and authorization.
    - Under **`components`**, the **`oauth2`** security scheme is defined with the **`authorizationCode`** flow. It specifies the **`authorizationUrl`** where the client can initiate the authorization process and the **`tokenUrl`** where the client can obtain an access token.
    - The **`scopes`** section under **`flows`** defines two scopes: **`read`** and **`write`**, representing different levels of access to resources.
    - The **`security`** section indicates that the OAuth 2.0 authentication scheme with the **`read`** and **`write`** scopes is required for all endpoints within the API.
    - The **`/users`** endpoint requires authentication and the **`read`** scope to access the list of users.
    - The **`/users/{id}`** endpoint requires authentication and the **`read`** scope to access a specific user.
    - The **`/users`** endpoint requires authentication and the **`write`** scope to create a new user.
    
    This OpenAPI specification showcases how to incorporate authentication and authorization using OAuth 2.0. It defines scopes for different levels of access and specifies the required security schemes for each endpoint, ensuring that clients have the appropriate authorization to perform specific operations within the API.
    

- **Security Definitions**: OpenAPI allows you to define security schemes and security requirements at the API level or specific operation level. Security schemes can include API keys, OAuth 2.0 flows (e.g., authorization code, client credentials), or other custom authentication methods. Security requirements define the schemes that need to be satisfied for accessing certain API endpoints.
    
     Refer to Server Level Security documentations to learn how to configure server security schema
     
1. **Token-based Security**: OpenAPI supports token-based security mechanisms like OAuth 2.0 and JWT. You can document the token endpoints, scopes, and token formats required for authentication and authorization. OpenAPI also allows you to specify the location and format of tokens in requests, such as in headers, query parameters, or cookies.
    
     Refer to Server Level Security documentations to learn how to configure server Token-based security
     
2. **Security Extensions**: OpenAPI provides extension points that allow you to include custom security-related information. These extensions can be used to document additional security measures specific to your API implementation, such as HMAC signatures, encryption algorithms, or specific security policies.
    
     Refer to Server Level Security documentations to learn how to configure server security extensions
     
3. **TLS/SSL Configuration**: OpenAPI allows you to document the use of secure communication protocols like HTTPS. You can specify the security requirements for transport-level security, including the supported TLS/SSL versions, cipher suites, and certificate validation options.
    
     Refer to Server Level Security documentations to learn how to configure server TLS/SSL
     
4. **Documentation and Guidelines**: While not directly related to security implementation, OpenAPI supports documenting security-related information and guidelines. It is highly advised to use OpenAPI provided documentation to provide instructions, examples, and best practices for implementing secure API usage, including recommendations for client-side security configurations.
    
    
    ```yaml
    openapi: 3.0.3
    info:
      title: My API
      version: 1.0.0
      description: My API with security measures
    
    servers:
      - url: https://api.example.com/v1
    
    components:
      securitySchemes:
        apiKeyAuth:
          type: apiKey
          in: header
          name: X-API-Key
        bearerAuth:
          type: http
          scheme: bearer
      security:
        - apiKeyAuth: []
        - bearerAuth: []
    
    paths:
      /users:
        get:
          summary: Get a list of users
          security:
            - bearerAuth: []
          responses:
            '200':
              description: Successful response
    
      /auth/token:
        post:
          summary: Get an access token
          requestBody:
            required: true
            content:
              application/json:
                schema:
                  type: object
                  properties:
                    username:
                      type: string
                    password:
                      type: string
          responses:
            '200':
              description: Successful response
              content:
                application/json:
                  schema:
                    type: object
                    properties:
                      access_token:
                        type: string
    
    security:
      - bearerAuth: []
    ```
    

## Custom x-validate feature

Since OpenAPI does not provide validation feature, API AutoFlow has a custom `x-validate` to help the developer perform HTTP request validation before reaching the server.

```yaml
x-validate:
        actions: []
        parameterRequirement: 
          If start_id and end_id is provided, start_id has to be less than or
          equal to end_id.
        parameters:
          - if:
              - start_id
              - end_id
            then:
              less-than-or-eq:
                - start_id
                - end_id
```

### How to use x-validate
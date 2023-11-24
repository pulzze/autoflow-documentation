---
title: Security
sidebar_label: Security
description: API Security
image: img/api-autoflow-logo.png
keywords:
  - security
  - api
  - authentication
---

import ApiSecurity from "@site/static/img/guide/API/security/security.jpg"

# Security and Authentication in API

In OpenAPI, the `security` object is used to specify the security requirements for an API. The `security` object can be defined at the global level for the entire API or at the operation level for specific operations. It allows you to declare the authentication methods and authorization scopes required to access certain parts of your API.

Here are the key components of the OpenAPI `security` options:

1. **Global Security:**
   - Define security requirements at the global level, applying to all operations in the API. This is typically done at the top level of the OpenAPI document.

  #### Code-based configuration

    ```yaml
    security:
      - apiKey: []
    paths:
      # ...
    ```

  #### Visual configuration

  <img src={ApiSecurity} alt="API Servers" class="myResponsiveImg" width="800"/>

   In this example, the API uses an API key for authentication. The `security` array specifies the security scheme (e.g., `apiKey`) and any required scopes.

2. **Operation-Level Security:**
   - Define security requirements at the operation level, providing a way to specify different authentication methods for different operations.

    ```yaml
    paths:
      /users:
        get:
          summary: Get a list of users
          security:
            - apiKey: []
        post:
          summary: Create a new user
          security:
            - oauth2: ['write']
    ```

   In this example, the `GET /users` operation requires an API key (`apiKey`), while the `POST /users` operation requires OAuth 2.0 with the `write` scope.

3. **Security Schemes:**
   - Use the `securitySchemes` object within the `components` section to define the authentication methods that can be referenced in the `security` object.

    ```yaml
    components:
      securitySchemes:
        apiKey:
          type: apiKey
          in: header
          name: Authorization
        oauth2:
          type: oauth2
          flows:
            authorizationCode:
              authorizationUrl: https://example.com/oauth/authorize
              tokenUrl: https://example.com/oauth/token
              scopes:
                read: Read access
                write: Write access
    ```

   In this example, two security schemes (`apiKey` and `oauth2`) are defined in the `components/securitySchemes` section.

4. **Authentication Types:**
   - OpenAPI supports various authentication types, including API keys, OAuth 2.0, HTTP basic authentication, and more. The `type` property within each security scheme specifies the authentication type.

5. **Scopes:**
   - If using OAuth 2.0 or a similar scheme that supports scopes, you can define the available scopes and specify which scopes are required for specific operations.

    ```yaml
    components:
      securitySchemes:
        oauth2:
          type: oauth2
          flows:
            authorizationCode:
              authorizationUrl: https://example.com/oauth/authorize
              tokenUrl: https://example.com/oauth/token
              scopes:
                read: Read access
                write: Write access
    ```

   In this example, the `oauth2` scheme includes two scopes: `read` and `write`.

By using the `security` options, you can clearly define the authentication methods and authorization requirements for your API. This information is crucial for developers who want to consume your API, as it helps them understand how to authenticate themselves and access different parts of the API securely.

Reference: https://swagger.io/docs/specification/authentication/
  Security Authorization Decode action returns decoded components of an authorization token
  Token should be one of these types: [basic, bearer, digest]

  **[Example]**
  [input]
  ```
  {
    "authorization" => "Basic YWRtaW46MTIzNA=="
  }
  ```

  **[Example]**
  [output]
  ```
  {
    "type": "basic", "username": "admin", "password": "1234"
  }
  ```

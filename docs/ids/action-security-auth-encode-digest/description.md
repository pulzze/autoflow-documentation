  Security Auth Encode Digest action returns a digest string

  **[Example]**
  [input]
  ```
  {
    "type": "digest",
    "parameters": {
      "algorithm": "SHA-256",
      "nonce": "7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v",
      "opaque": "FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS",
      "qop": "auth, auth-int",
      "realm": "http-auth@example.org",
      "type": "digest"
  }}
  ```


  **[Example]**
  [output]
  ```
  digest algorithm=SHA-256, nonce="7ypf/xlj9XXwfDPEoM4URrv/xwf94BcCAzFZH4GiTo0v", opaque="FQhe/qaU925kfnzjCev0ciny7QMkPqMAFRtzCUYo5tdS", qop=auth, auth-int, realm="http-auth@example.org", type=digest
  ```

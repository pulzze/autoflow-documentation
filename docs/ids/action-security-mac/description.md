  Security Mac action Computes a MAC (Message Authentication Code) of type algorithm from Data
  supported algorithm:
  ```
  aes_128_cbc, aes_192_cbc, aes_256_cbc, aes_128_cfb128, aes_192_cfb128, aes_256_cfb128, aes_128_cfb8, aes_192_cfb8, aes_256_cfb8, blowfish_cbc, des_cbc, des_ede3_cbc, md4, md5, poly1305, rc2_cbc, sha, sha224, sha256, sha384, sha512, sha3_224, sha3_256, sha3_384, sha3_512
  ```

  **[Example]**
  [input]
  ```
  {
    "algorithm": "aes_128_cbc",
    "data": "teststring",
    "handle key": "truncate",
    "key": "",
    "mac length": 0
  },
  ```


  **[Example]**
  [output]
  ```
  B3C5B1652AE70AF32F9022D2EB00162B
  ```

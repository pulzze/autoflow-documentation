  Security Decrypt action returns decrypted data
  input data should be a hex string
  supported ciper:
  ```
  aes_128_cbc, aes_192_cbc, aes_256_cbc, aes_128_ccm, aes_192_ccm, aes_256_ccm, aes_128_cfb128, aes_192_cfb128, aes_256_cfb128, aes_128_cfb8, aes_192_cfb8, aes_256_cfb8, aes_128_ctr, aes_192_ctr, aes_256_ctr, aes_128_ecb, aes_192_ecb, aes_256_ecb, aes_128_gcm, aes_192_gcm, aes_256_gcm, aes_ige256, blowfish_cbc, blowfish_cfb64, blowfish_ecb, blowfish_ofb64, des_cbc, des_cfb, des_ecb, des_ede3_cbc, des_ede3_cfb, rc2_cbc, rc4
  ```

  **[Example]**
  [input]
  ```
  {
    "aad": "test",
    "cipher": "aes_256_ctr",
    "data": "3DB8139FDB222A4728C799",
    "handle data": "pad",
    "handle key": "truncate",
    "handle vector": "truncate",
    "key": "testtesttesttest",
    "tag": "",
    "tag length": 0,
    "vector": ""
  }
  ```

  **[Example]**
  [output]
  ```
  teststring
  ```

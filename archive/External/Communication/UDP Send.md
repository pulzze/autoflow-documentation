# UDP Send

UDP Send actions send data to the address:port and the response is stored in the response-target.

 **Properties**
 

**Data**:                       Data to send

**Address**:                 Destination Address

**Port**:                        Destination Port Number

 **Output**
 

**Output-location**: Location to store the output data

 **Sample Configuration**
 

Click to learn how to paste configuration into your solution.

{

"$action": "communication/udp-send",

"address": "127.0.0.1",

"data": "Testing",

"mock-result": "success",

"output-location": {

"__$afref__": "data",

"path": [

"result"

]

},

"port": 14000,

"use-mock-result": false

}

 **TEST THE ACTION**
 

Resulting in the following packet being sent out.

```bash
$ sudo tcpdump -i lo0 udp port 14000 -vvv -X

tcpdump: listening on lo0, link-type NULL (BSD loopback), capture size 262144 bytes

17:02:05.256998 IP localhost.27674  localhost.14000: UDP, length 7
```
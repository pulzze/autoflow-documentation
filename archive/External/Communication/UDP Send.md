# UDP Send

UDP Send actions send data to the address:port and the response is stored in the response-target.

&gt; **Properties**
&gt; 

**Data**:                       Data to send

**Address**:                 Destination Address

**Port**:                        Destination Port Number

&gt; **Output**
&gt; 

**Output-location**: Location to store the output data

&gt; **Sample Configuration**
&gt; 

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

&gt; **TEST THE ACTION**
&gt; 

Resulting in the following packet being sent out.

```bash
$ sudo tcpdump -i lo0 udp port 14000 -vvv -X

tcpdump: listening on lo0, link-type NULL (BSD loopback), capture size 262144 bytes

17:02:05.256998 IP localhost.27674 &gt; localhost.14000: UDP, length 7
```
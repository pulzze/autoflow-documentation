# Timer Delete

Deletes a timer

&gt; **Properties**
&gt; 

**timer-id**:           Timer-id can be selected from drop down, or dynamically referenced by saving the timer-id at the time of creation.

{

"$product": {

"deployment_mode": "SOLO",

"name": "API AutoFlow",

"version": "3.0.2"

},

"Flow": [

{

"default-test": "a7be5877-4c8c-449c-812c-865c83364b9c",

"flow": [

{

"$action": "config/delete-timer",

"timer-id": "54e82f24-b843-405b-ba9d-0823c71f2c96",

"use-mock-result": false

}

],

"id": "7e785bea-7b61-4418-a45a-bdb410864a1f"

},

{

"default-test": "fc5d4c08-e9a7-4261-aa5d-dac858ed8229",

"flow": [

{

"$action": "config/get-timer",

"mock-result": {

"interval": 5000,

"name": "timer-name"

},

"output-location": {

"__$afref__": "data",

"path": [

"timer"

]

},

"timer-id": "4a43ddac-0e56-4bd4-a2c7-adcc8b70e5ef",

"use-mock-result": false

}

],

"id": "9fe838bf-e5b2-4cc0-984d-ec1ef6f21ee8"

},

{

"default-test": "0f393b8b-a788-4190-bf27-37718cc02aac",

"flow": [

{

"$action": "config/update-timer",

"error-cutoff": 0,

"flow-id": "46c78327-1e1c-4efb-a2c7-d03407f745e5",

"interval": 2000,

"output-location": {

"__$afref__": "data",

"path": []

},

"timer-id": "4a43ddac-0e56-4bd4-a2c7-adcc8b70e5ef",

"use-mock-result": false

}

],

"id": "2f929cc5-f079-487d-a21a-78a0b8868b08"

},

{

"default-test": "0f7d09bc-9a17-4205-996f-f4e60997eb8b",

"flow": [

{

"$action": "config/stop-timer",

"timer-id": "54e82f24-b843-405b-ba9d-0823c71f2c96",

"use-mock-result": false

}

],

"id": "7fde098e-42c8-48b0-8579-d6e7a49b0833"

},

{

"default-test": "64a7534c-0522-437a-84c0-d9b424a1250a",

"flow": [

{

"$action": "config/start-timer",

"timer-id": "54e82f24-b843-405b-ba9d-0823c71f2c96",

"use-mock-result": false

}

],

"id": "58a8e4d6-3dec-4ecc-9492-119ede1744e6"

},

{

"default-test": "ed509e4f-b71d-4dbe-affb-4c9f4c8466bb",

"flow": [

{

"$action": "data/log",

"label": "test flow",

"level": "info",

"value": "executed"

}

],

"id": "46c78327-1e1c-4efb-a2c7-d03407f745e5"

},

{

"default-test": "46a15b06-ca2b-40e8-968d-7a904ab84504",

"flow": [

{

"$action": "config/create-timer",

"error-cutoff": 0,

"flow-id": "46c78327-1e1c-4efb-a2c7-d03407f745e5",

"interval": 5000,

"mock-result": "{timer-id}",

"output-location": {

"__$afref__": "data",

"path": [

"timer"

]

},

"timer-name": "test timer",

"use-mock-result": false

}

],

"id": "c16688ec-04f3-4305-b495-9f6b6449004a"

}

],

"Inbound": [

{

"id": "211a263c-7d3a-4162-9105-4ded01ef1173",

"port": 45535,

"type": "http server"

}

],

"InboundEndpoint": [

{

"decode-content": true,

"endpoint-type": "Basic",

"id": "7c652edf-e03a-46d6-845b-ebe6e850f902",

"method": "ANY",

"path": "/start",

"type": "endpoint"

},

{

"decode-content": true,

"endpoint-type": "Basic",

"id": "e951c936-c8a0-48d8-91f9-aad3cccedfc3",

"method": "ANY",

"path": "/delete",

"type": "endpoint"

},

{

"decode-content": true,

"endpoint-type": "Basic",

"id": "9954546f-50f0-4dda-8943-18834ac7ec74",

"method": "ANY",

"path": "/stop",

"type": "endpoint"

},

{

"decode-content": true,

"endpoint-type": "Basic",

"id": "cc0f57a7-6cc8-4b40-9828-12f2a3302661",

"method": "ANY",

"path": "/create",

"type": "endpoint"

},

{

"decode-content": true,

"endpoint-type": "Basic",

"id": "4f040a4d-0299-43cc-8256-1bc10bca1534",

"method": "ANY",

"path": "/update",

"type": "endpoint"

},

{

"decode-content": true,

"endpoint-type": "Basic",

"id": "0683a4b3-a0c6-4c15-bce6-b098ca8fb0a3",

"method": "ANY",

"path": "/get",

"type": "endpoint"

}

],

"ResourceInfo": [

{

"id": "7c652edf-e03a-46d6-845b-ebe6e850f902",

"parentId": "211a263c-7d3a-4162-9105-4ded01ef1173",

"resourceType": "InboundEndpoint",

"title": "Start Timer"

},

{

"id": "0f393b8b-a788-4190-bf27-37718cc02aac",

"parentId": "2f929cc5-f079-487d-a21a-78a0b8868b08",

"resourceType": "Test",

"title": "default-test"

},

{

"id": "0f7d09bc-9a17-4205-996f-f4e60997eb8b",

"parentId": "7fde098e-42c8-48b0-8579-d6e7a49b0833",

"resourceType": "Test",

"title": "default-test"

},

{

"id": "a7be5877-4c8c-449c-812c-865c83364b9c",

"parentId": "7e785bea-7b61-4418-a45a-bdb410864a1f",

"resourceType": "Test",

"title": "default-test"

},

{

"id": "7e785bea-7b61-4418-a45a-bdb410864a1f",

"parentId": "e951c936-c8a0-48d8-91f9-aad3cccedfc3",

"resourceType": "Flow"

},

{

"id": "e951c936-c8a0-48d8-91f9-aad3cccedfc3",

"parentId": "211a263c-7d3a-4162-9105-4ded01ef1173",

"resourceType": "InboundEndpoint",

"title": "Delete Timer"

},

{

"id": "64a7534c-0522-437a-84c0-d9b424a1250a",

"parentId": "58a8e4d6-3dec-4ecc-9492-119ede1744e6",

"resourceType": "Test",

"title": "default-test"

},

{

"id": "9954546f-50f0-4dda-8943-18834ac7ec74",

"parentId": "211a263c-7d3a-4162-9105-4ded01ef1173",

"resourceType": "InboundEndpoint",

"title": "Stop Timer"

},

{

"id": "ed509e4f-b71d-4dbe-affb-4c9f4c8466bb",

"parentId": "46c78327-1e1c-4efb-a2c7-d03407f745e5",

"resourceType": "Test",

"title": "default-test"

},

{

"id": "cc0f57a7-6cc8-4b40-9828-12f2a3302661",

"parentId": "211a263c-7d3a-4162-9105-4ded01ef1173",

"resourceType": "InboundEndpoint",

"title": "Create Timer"

},

{

"id": "46a15b06-ca2b-40e8-968d-7a904ab84504",

"parentId": "c16688ec-04f3-4305-b495-9f6b6449004a",

"resourceType": "Test",

"title": "default-test"

},

{

"id": "9fe838bf-e5b2-4cc0-984d-ec1ef6f21ee8",

"parentId": "0683a4b3-a0c6-4c15-bce6-b098ca8fb0a3",

"resourceType": "Flow"

},

{

"id": "2f929cc5-f079-487d-a21a-78a0b8868b08",

"parentId": "4f040a4d-0299-43cc-8256-1bc10bca1534",

"resourceType": "Flow"

},

{

"id": "7fde098e-42c8-48b0-8579-d6e7a49b0833",

"parentId": "9954546f-50f0-4dda-8943-18834ac7ec74",

"resourceType": "Flow"

},

{

"id": "58a8e4d6-3dec-4ecc-9492-119ede1744e6",

"parentId": "7c652edf-e03a-46d6-845b-ebe6e850f902",

"resourceType": "Flow"

},

{

"id": "4f040a4d-0299-43cc-8256-1bc10bca1534",

"parentId": "211a263c-7d3a-4162-9105-4ded01ef1173",

"resourceType": "InboundEndpoint",

"title": "Update Timer"

},

{

"id": "211a263c-7d3a-4162-9105-4ded01ef1173",

"parentId": null,

"resourceType": "Inbound",

"title": "test"

},

{

"id": "0683a4b3-a0c6-4c15-bce6-b098ca8fb0a3",

"parentId": "211a263c-7d3a-4162-9105-4ded01ef1173",

"resourceType": "InboundEndpoint",

"title": "Get Timer"

},

{

"id": "46c78327-1e1c-4efb-a2c7-d03407f745e5",

"parentId": null,

"resourceType": "Flow",

"title": "test flow"

},

{

"id": "c16688ec-04f3-4305-b495-9f6b6449004a",

"parentId": "cc0f57a7-6cc8-4b40-9828-12f2a3302661",

"resourceType": "Flow"

},

{

"id": "fc5d4c08-e9a7-4261-aa5d-dac858ed8229",

"parentId": "9fe838bf-e5b2-4cc0-984d-ec1ef6f21ee8",

"resourceType": "Test",

"title": "default-test"

}

],

"Test": [

{

"id": "0f393b8b-a788-4190-bf27-37718cc02aac",

"value": {

"body": "",

"header": {},

"path": {},

"path-string": "",

"query": {}

}

},

{

"id": "0f7d09bc-9a17-4205-996f-f4e60997eb8b",

"value": {

"body": "",

"header": {},

"path": {},

"path-string": "",

"query": {}

}

},

{

"id": "a7be5877-4c8c-449c-812c-865c83364b9c",

"value": {

"body": "",

"header": {},

"path": {},

"path-string": "",

"query": {}

}

},

{

"id": "64a7534c-0522-437a-84c0-d9b424a1250a",

"value": {

"body": "",

"header": {},

"path": {},

"path-string": "",

"query": {}

}

},

{

"id": "ed509e4f-b71d-4dbe-affb-4c9f4c8466bb",

"value": {

"input": {}

}

},

{

"id": "46a15b06-ca2b-40e8-968d-7a904ab84504",

"value": {

"body": "",

"header": {},

"path": {},

"path-string": "",

"query": {}

}

},

{

"id": "fc5d4c08-e9a7-4261-aa5d-dac858ed8229",

"value": {

"body": "",

"header": {},

"path": {},

"path-string": "",

"query": {}

}

}

]

}
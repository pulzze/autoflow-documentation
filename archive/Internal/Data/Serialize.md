# Serialize

Serialize into binary data using a binary schema.

 **Properties**
 

**Value**:                      Location of the value to check

**schema-id**:             Binary Schema to use for serializing given value

**target**:                     Target binary packet type to serialize against

**value**:                      The value object to serialize with

 **Output**
 

**Output-location**: Location to store the output data

 **Example binary schema configuration**
 

{

"info": {},

"packets": {

"packet1": {

"fields": [

{

"filler": "0",

"name": "packet_length",

"size": 4,

"size_unit": "byte",

"type": "packet_length",

"value_type": "string"

},

{

"filler": "0",

"name": "packet_type",

"size": 4,

"size_unit": "byte",

"value_type": "string"

}

]

}

}

}

**Example value**

{

"packet_length": "0004",

"packet_type": "TEST"

}

**Example serialized binary output**

0004TEST
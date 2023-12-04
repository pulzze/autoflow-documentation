> **key** <u>string</u>
>> `Enter topic key`

When a producer sends a message to a topic, it can include a key along with the message payload. The key is an optional piece of metadata that is used to determine the partition to which the message will be written. The key is specified as part of the `ProducerRecord` when sending a message.
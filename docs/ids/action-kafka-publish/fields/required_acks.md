> **required_acks** <u>undefined</u>

The producer configuration parameter `acks`, short for acknowledgments, controls the level of acknowledgment the producer requires from the broker after a message is sent. This parameter determines the durability and reliability guarantees for produced messages.

The acks configuration can take the following values:
- acks=0: The producer does not wait for any acknowledgment from the broker. The message is considered sent as soon as it's handed off to the network. This option provides the lowest latency but offers no durability guarantees. If the broker or partition leader fails before the message is replicated, it may be lost.
- acks=1: The producer waits for acknowledgment from the leader replica of the partition. Once the leader receives the message and appends it to its log, the producer considers the message sent. This option provides a balance between latency and durability.
- acks=all or acks=-1: The producer waits for acknowledgment from all in-sync replicas (ISRs) of the partition. This ensures that the message is not lost even if the leader fails. This option provides the highest level of durability but may introduce additional latency.
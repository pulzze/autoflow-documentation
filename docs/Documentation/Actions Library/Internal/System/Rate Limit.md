# Rate Limit

Check whether configured rate limit has been hit or not and return a boolean value.

&gt; **Properties**
&gt; 

**key**:                          Rate limit key. Key can be customized to create rate limits per user, per client, or per application

**count**:                      Number of hits allowed per duration

**duration**:                 Duration in seconds for which rate limit is applied to

&gt; **Output**
&gt; 

Output-location: Location to store the output data

**Example**

Keys can be customized for various use:

1. Per incoming request Use a key that is unique to the request such as server, path, method:

test_server:/api/v1/test_endpoint:POST

1. Per incoming request per user

Use a key that is unique to the request such as server, path, method and add user id:

test_server:/api/v1/test_endpoint:POST:user_id

1. Per target service

If you are calling a target service from multiple flows, you can use a generic target service key to ratelimit the requests collectively:

target_service_name
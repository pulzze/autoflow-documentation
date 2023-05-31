This Action is used to limit the number of requests for a particular Action based on the given input.
This Action can be used to limit API calls, etc., to limit excessive requests or to prevent service abuse.
<br/>

- count : Number of triggers allowed in the duration.
- duration : Duration of the limit in seconds (3600 seconds is 1 hour).
- key : A key to categorize triggers. Limits apply to triggers with the same key.

<br/>

**[Example]**
```
[count]
  > number: 5
[duration]
  > number: 10
[key]
  > string : my_action
----------------------------------------
-> return : {"currentTriggerCount":1,"limitExceeded":false}
```

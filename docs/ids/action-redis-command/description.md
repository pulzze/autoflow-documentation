This action returns the result value of the redis command based on the message you sent.
<br/>

- processReference : Select your Redis Client.
- message : Write your Redis command. The command unit of Redis must be written with each string of the array.

<br/>

**[Example]**

*Ex01)*
```
[processReference] : select your Client
[message] : array >
            > string : SET
            > string : mykey
            > string : hello
-------------------------------------
-> return : OK

'OK' means that 'hello' is set in
  one of the key values 'mykey' of redis.

```
*Ex02)*
```
[processReference] : select your Client
[message] : array >
            > string : GET
            > string : mykey
-------------------------------------
-> return : hello

'hello' means that the key value('mykey')
 set in Ex01 is return.


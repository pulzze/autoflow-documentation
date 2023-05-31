This Action returns  a log message based on the given input, and outputs the message according to the specified log 'level'.
<br/>

- label : If you want to label in log messeage.
- level : Select log level
- value : Want to put in log message.

<br/>

**[Example]**
```
[label]
  > string : MyApp
[level]
  > enum : info
[value]
  > string : This is a test log message.
----------------------------------------
-> return : [info] MyApp: This is a test log message.
```

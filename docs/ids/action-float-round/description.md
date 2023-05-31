This Action is used to round a given floating-point number to the nearest integer.
Rounding up if the decimal part is 0.5 or greater, and rounding down if the decimal part is less than 0.5.
For negative numbers, rounding up if the decimal part is less than or equal to -0.5, and rounding down if the decimal part is greater than -0.5.

<br/>

**[Example]**
*Ex01)*
```
[float] : 4.2
[precision] : 0
-------------
-> return : 4
```
*Ex02)*
```
[float] : 4.2
[precision] : 1
-------------
-> return : 4.2
```
*Ex03)*
```
[float] : -1.5
[precision] : 0
-------------
-> return : -2
```
*Ex04)*
```
[float] : -1.5
[precision] : 1
-------------
-> return : -1.5
```

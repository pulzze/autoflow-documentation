---
title: Data Types
sidebar_label: Data Types
description: Description on types of data
image: img/api-autoflow-logo.png
keywords:
  - data types
  - string
  - number
  - object
  - array
hide_table_of_contents: false
sidebar_class_name: hidden
---

# Data Types
Data types describe the different types or kinds of data that you are gonna store and work with.

In API AutoFlow, there are five basic types of data. The seven most basic types of data are strings, numbers, object, array, booleans, undefined, and null. We refer to these as data types. A single variable can only store a single type of data. That means it’s important for you to learn to store the data correctly.

API AutoFlow is gonna identify what type of data you’re working with based off of the data received, or the way that you configured. It’s important that you remember and practice these differences, otherwise, data could get stored in an improper format and bite you later.

A common error that you will see when there's data format mismatch is

```error
Expected a 'string' but received 'null'
```


## JSON
JSON (JavaScript Object Notation) is NOT a data type. It is simply a way to express data in a string format for communicating values between APIs and also humans. But once the application “decodes” that representation, it becomes machine readable types: string, number, object, array, null. The application cannot work with JSON without parsing it into a useable data structure. So once the data is decoded, we don’t have to think about JSON anymore, that’s just how we communicate it between applications.


#### JSON
```
'{first_name: "Jon", last_name: "Doe"}'
```

#### Object
```js
{
  first_name: "Jon",
  last_name: "Doe",
}
```

## Object
Storing data based on a key-value pair.  A curly braces `{}` is used to denote an object.

You can group related data together into a single data structure by using an object:

```js
{
  first_name: "Jon",
  last_name: "Doe",
}
```
An object contains properties, or key-value pairs. The object above has two properties. Each property has a name, which is also called a "key", and a corresponding "value".

- In the above example, _first_name_ is the key and _Jon_ is the value. Together, the key and value make up a single property.
- "Value" in the above example is a string since it has double quotes `"Jon"`. It can be any data format.
- "Key" does not have double quotes.


#### Accessing value from an object

Key is used when accessing the value.  In the above example, to get value "Doe", the key "last_name" would be used.


## Array
Storing data based on a list. A square bracket `[]` is used to denote an object.

Arrays consist of an ordered collection or list containing zero or more data types, and use numbered indices starting from 0 to access specific items. Arrays can contain any data type, including numbers, strings, and objects.

```js
[Jon, Doe]
```

#### Accessing value from array

Position number is used to access the value. 

- The position number starts from "0" when counting from left -> right.
- The position number starts from "-1" when counting from right -> left.

In the above example,
- To get the value "Jon", either position "0" or "-2" is used.
- To get the value "Doe", either position "1" or "-1" is used.


## String
String is a **text** representation of data. A single `''` or double quotes `""` are used to denote string.


## Number
API AutoFlow has only one type of number.  Numbers can be written with, or without, decimals:

```
3.14;     // A number with decimals
314;       // A number without decimals
```

## Boolean
A booleans can have one of two values: true or false.

You can use the [condition](../../Documentation/actions-library/data/condition/) actions to find out if an expression is true or false.


## Null
No data type.  This is different to no-value.
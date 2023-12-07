Array of column names or condition objects with operator and column keys.
Optionally, or condition can be configured using an object with 'or' key and an array of conditions as its value.
When a list of columns to match is provided as below, query will match against the value provided in the data field.
If no data of the provided column name exist, the match will not be tried even if column name is given.
```
[
  "column1",
  "column2"
]
```
When a object is given in a list, operator will be used to compare the column values.
Query will match against the value provided in the data field.
If no data of the provided column name exist, the match will not be tried even if column name is given.
```
[
  {
    "operator": "=",
    "column": "column1"
  }
]
```

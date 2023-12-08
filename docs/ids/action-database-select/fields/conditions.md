Condition field allows dynamic configuration of query conditions based on dynamic data provided.

Column field defines which columns to do the operation on.
Data field contains all the dynamic data, often passed in from various API requests, that includes data to be operated on as well as data to be checked for conditions.
Condition field defines which columns to check for equality or other defined comparisons.

When a list of binary columns names is provided as below, query will match rows that have columns with value provided in the data field. If no data of the provided column name exist in the data field, the match will not be tried even if column name is given.
```
[
  "column1",
  "column2"
]
```

When a list of objects is provided as below, operator will be used to compare the column values.
Query will match rows that have columns with value provided in the data field successfully compare against the operator. If no data of the provided column name exist, the match will not be tried even if column name is given.
```
[
  {
    "operator": "=",
    "column": "column1"
  }
]
```

Optionally, an or condition can be configured using an object with 'or' key and an array of conditions as its value.

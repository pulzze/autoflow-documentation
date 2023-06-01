# Create Insert SQL from Object

Sequelize object action to convert Object into an Insert SQL.

&gt; **Properties**
&gt; 

**Object**:        The object with both the column (object key) and the values to be inserted

**Table**:          Name of the table to insert the data

&gt; **Output**
&gt; 

**Output-location**: Response from the database

&gt; **Example**
&gt; 

Given below 

**Object**

```json
{“column1”: “value1”,  “column2”: “value2”,  “column3”: “value3”}
```

**Table** : table_name

The SQL query will be generated

```sql
INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);
```
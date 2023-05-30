# Create Upsert SQL from Object

Sequelize object action to convert Object into an Upsert SQL.

**Properties**

Object:        The object with both the column (object key) and the values to be upserted.

Table:                     Name of the table to insert the data

id-name:     ON DUPLICATE KEY UPDATE clause condition (column)

id-value:      ON DUPLICATE KEY UPDATE clause condition (value)

**Output**

Output-location: Response from the database

**Example**

Given below

Object

```json
{ “column1”: “value1”,  “column2”: “value2”,  “column3”: “value3”}
```

table :                      table_name

id_name :   id_name

id_value :    id_value

The SQL query will be generated

```sql
INSERT INTO table_name (column1,column2,column3)
VALUES ("value1","value2","value3")
ON DUPLICATE KEY UPDATE id_name=id_value
```
# Chunk

Returns list of lists containing count elements each, where each new chunk starts step elements into the enumerable.

 **Properties**
 

**Array**:                      Location of the list to chunk

**Count**:                     The number of elements for the new chunk (list)

**Step**:                       The steps into the enumerable each new chunk starts

**Leftover**:                 The value to fill the last chunk if not completely filled

 **Output**
 

**Output-location**: Location to store the output data

 **Example**
 

Let’s say we have a list with six elements.

**Array**: Location of the original list

```jsx
[1, 2, 3, 4, 5, 6]
```

**Count**:  3                 Group the chunk in elements of three.  

**Step**:  2                   The start of each chunk to start two steps into the enumerable.  

**Leftover**: 7               If the last chunk is not completely filled, include this value to the end.

**Result**

```jsx
[[1, 2, 3], [3, 4, 5], [5, 6, 7]]
```
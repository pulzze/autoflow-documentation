This action can convert an array into an object in different ways.

1. If a key is provided, it will traverse each item in the array and add it to an object using the value for that items key. Useful for converting an array of unique objects with IDs.
2. If no key is provided, it will expect an array of arrays where the first item is the key. Useful if you have an array of tuples.

# Elixir Script

Action to apply Elixir expressions.

 **Properties**
 

**Expression**:            Elixir expressions

**Variables**:               The location of the variable to work with

**Name**:                     Name of the new variable

**Target**:                    The location to get the data from

 **Output**
 

**Output-location**: Location to store the output data

**Example**

Let’s say we want to apply string concatenate (joining) function in Elixir

“Hello” &lt; “ World”

**Result**

Hello World

Using the Testing feature, let’s send a value of “Hello” in the request body

Add a Data Expression action and assign where you want to read the array from (variable - target), where you want to put the resulting value (target), and the Elixir expression to apply. In this case request body &lt; “ World”

To display the result on the browser, let’s copy the data in the response body
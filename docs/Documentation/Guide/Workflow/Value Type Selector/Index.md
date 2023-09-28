---
sidebar_position: 4
---

import ValueTypeOverview from "@site/static/img/Guide/value-type-selector/value_type_overview.png"

# Value Type Selector

Value type selectors are how you define data used in your configuration. For example, you can define data with a simple data type such as string, array, or object. You can also reference data from a variable or HTTP request.

<div class="myResponsiveImg">
    <img src={ValueTypeOverview} alt="Value Type Overview" class="myResponsiveImg"/>
</div>

## Most commonly used

- Values
- Reference / **data**

---

## Values

Values statically define the type of input field for an action. For example, to provide a static string value to an action's input field, select the `string` data type and provide the string message.

- String
- Number
- Boolean
- Null
- Array
- Object

## Reference

Reference value type is used to reference data from a variable, process, or an api operation.

- data
- process
- api operation

## Conditions

The condition value type compares two booleans and outputs a boolean value. For example, an `AND` condition outputs true only if both booleans being compared are true.

- and: True if ALL booleans are true, otherwise false
- or: True if ANY booleans are true, otherwise false
- not: True if boolean is false, otherwise true

## Comparison

The comparison value type compares two sets of data and outputs a boolean value. For example, it is commonly used in the IF condition to compare two values and perform a list of actions.

- equal
- less-than
- less-than-or-equal
- greater-than
- greater-than-or-equal

## Execution

Execution value type is used to provide ways to execute a flow of actions. This is a more advanced use of workflow where action configuration that is either created dynamically, or stored else where can be executed at runtime.

- action

Configuration Execute action executes a user defined custom flow configuration.
Flow configuration consists of return scope reference and array of actions.
Scope Reference consists of scope name and path within that scope.
Action configuration consists of category, name, output scope reference, and action input settings.
<br/>

**[Example]**

```
{
  "__struct__": "Flow",
  "return": {
    "__struct__": "ScopeReference",
    "scope": "variable",
    "path": [
      "return"
    ]
  },
  "actions": [
    {
      "__struct__": "Action",
      "category": "system",
      "name": "log",
      "output": {
        "__struct__": "ScopeReference",
        "scope": "variable",
        "path": [
          "test"
        ]
      },
      "input": {
        "label": "test label",
        "level": "debug",
        "value": "config/execution Executed Value"
      },
      "visualId": "test label"
    }
  ]
}
```

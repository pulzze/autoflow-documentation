# Syslog UDP RFC5424

RFC5424 is “the new format” of Syslog.

 **Properties**
 

**Message**:                Syslog message

**Address**:                 Destination address. e.g. 127.0.0.1

**Port**:                         Destination port

**Facility**:                    Syslog facility

**Severity**:                  Syslog severity

**Hostname**:              Hostname to be used

**Process-name**:       A process name to be used

**Process-id**:              Process ID to be used

**Message-id**:            Message ID to be used

Structured-data: Add structured data to Syslog message. Must be an array of objects with keys “element-id” and “parameter” (a single layer object with string key/values)

 **Output**
 

**Output-location**: Location to store the output data
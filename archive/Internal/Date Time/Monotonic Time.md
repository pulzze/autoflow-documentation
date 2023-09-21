# Monotonic Time

Monotonic gives access to monotonic clocks on various platforms (Mac OS X, Windows, and POSIX). A monotonic clock is a time source that won’t ever jump forward or backward (due to NTP or Daylight Savings Time updates). Monotonic uses Thomas Habets’s cross-platform “monotonic_clock” library under the hood.

 **Properties**
 

**Time-unit**:   Select from second, millisecond, microsecond, nanosecond

 **Output**
 

**Output-location**: The location to store the timestamp
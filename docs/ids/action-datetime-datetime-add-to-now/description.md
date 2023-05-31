Adds a specified amount of time to Now.
Accepts a count in specified unit. Negative values will move backwards in time.
Takes changes such as summer time/DST into account.
This means that adding time can cause the wall time to "go backwards" during "fall back" during autumn.
Adding just a few seconds to a datetime just before "spring forward" can cause wall time to increase by more than an hour.

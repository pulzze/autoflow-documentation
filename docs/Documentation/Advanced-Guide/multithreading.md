---
sidebar_position: 5
title: Multithreading
description: Leverage multithreading actions for optimized execution
---

import SystemAsync from "@site/static/img/advanced-guide/multithreading/system-async-light.png"
import SystemAsyncStream from "@site/static/img/advanced-guide/multithreading/system-async-stream-light.png"

API AutoFlow handles core utilization automatically. To add multithreading, all we need to do is use either of these 2 async actions:

1. <a href="#async">system/async</a>
2. <a href="#async-stream">system/async-stream</a>

## Async

The `system/async` action allows you to define multiple threads performing different tasks and awaiting their results. Each of the tasks is assigned an ID to store the result after completion. The action itself will not move on until all threads are complete. A timeout can be provided to cancel execution if a thread takes to long to complete.

<div>
    <img src={SystemAsync} alt="System Async"/>
</div>

## Async-Stream

The `system/async-stream` action allows you to apply logic to an array of values in parallel threads. This is useful if you have complex tasks to perform for each item that could be performed simultaneously. A timeout can be provided to cancel execution if a thread takes to long to complete. If it is important to return the result in the same order as the original array, you can use the `ordered` field to make it so. Otherwise, setting `ordered` to false may provide improvement to performance.

<div>
    <img src={SystemAsyncStream} alt="System Async"/>
</div>

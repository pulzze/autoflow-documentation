---
sidebar_position: 6
---

import ResponseMapping from "@site/static/img/guide/data-mapping/response_mapping.png"
import HttpResponse from "@site/static/img/guide/data-mapping/http_response.png"

# Data Mapping

Data mapping is a foundational feature of API AutoFlow. Each data point can be mapped to a literal value, complex data structure, a data reference, or another workflow of actions. This mapping is available throughout the product, which is why there is no specific page for data mapping. Use Data Reference to map data between different workflows and actions.

## HTTP Response Mapping

To map data to HTTP response, configure data in the HTTP Response located at the bottom of each action. Throughout the workflow, you can use Conditionals to create custom response objects that can be mapped to the action’s HTTP response.

### HTTP Response

By default, each operation provides a HTTP response mapping feature. You can use data from the workflow to populate each field.

<div class="myResponsiveImg">
    <img src={HttpResponse} alt="HTTP Response" class="myResponsiveImg"/>
</div>

### Response Mapping

API needs to respond with different data for each status code.

Throughout the workflow, an object with `body`, `header`, and `status_code` is created and mapped to the operation’s HTTP Response.

<div class="myResponsiveImg">
    <img src={ResponseMapping} alt="Response Mapping" class="myResponsiveImg"/>
</div>

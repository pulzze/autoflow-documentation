---
sidebar_position: 5
---

import ResponseMapping from "@site/static/img/Guide/data-mapping/response_mapping.png"
import HttpResponse from "@site/static/img/Guide/data-mapping/http_response.png"

# Data Mapping

The data stored in the scopes can be mapped throughout the product, which is why there is no specific page for data mapping. Use the Data Reference to map data between different workflows and actions.

## HTTP Response Mapping

To map data to the HTTP response, insert the data in the HTTP Response located at the bottom of each action. Throughout the workflow, you can use Conditionals to create custom responses objects that can be mapped to the action’s HTTP response.

### HTTP Response

By default, each operation provides a HTTP response mapping feature. You can use the data from the workflow to populate each field.

<div class="myResponsiveImg">
    <img src={HttpResponse} alt="HTTP Response" class="myResponsiveImg"/>
</div>

### Response Mapping

API needs to respond with different data for each status code.

Throughout the workflow, an object with `body`, `header`, and `status_code` is create and mapped to the operation’s HTTP Response.

<div class="myResponsiveImg">
    <img src={ResponseMapping} alt="Response Mapping" class="myResponsiveImg"/>
</div>

---
title: License
sidebar_label: License
description: License is where you can apply the purchased license.
image: img/api-autoflow-logo.png
keywords:
  - license
---

import AlertsAndNotifications from "@site/static/img/guide/License/alerts-and-notifications.png"

# License

The License pane displays the applied license type and status.

There are three types of license

- Unlicensed version (no production ready features)
- Tier 1 - Startup beginning (limited to #### calls per month)
- Tier 2 - Startup growth (limited to #### calls per month)
- Tier 3 - Enterprise (Full version with out limit)

Startup and enterprise license provides features that are needed for production. Also, without purchasing the startup or enterprise license, customers are not eligible to purchase support.

## What’s a Call and how is it counted

Call is an incoming HTTP call. The call is counted each time the server receives an API call.

## Alerts and notification

When the call limit approaches, the license pane will display alerts to notify when the product will reach the limit.

<div class="myResponsiveImg">
    <img src={AlertsAndNotifications} alt="Alerts And Notifications" class = "myResponsiveImg"/>
</div>

## What happens when the call limit is reached?

The server will continue to operate, but you would not be able to login until you apply the upgraded license.

## What are production ready features?

There are many features that need to be production-ready. Critical features that are not included in the unlicensed version include auto-loading of servers and clients, clustering, and boot.

## How to obtain a license

Contact your sales rep or email sales@interactor.com for a quote.

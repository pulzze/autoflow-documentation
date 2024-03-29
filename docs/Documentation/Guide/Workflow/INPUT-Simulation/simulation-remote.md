---
sidebar_position: 1
title: Simulation Remote
sidebar_label: Simulation Remote
description: Right pane simulation control
image: img/api-autoflow-logo.png
keywords:
  - simulation
  - remote
hide_table_of_contents: true
---


import ActionData from "@site/static/img/guide/data-simulation/action_data.png"
import Trace from "@site/static/img/guide/data-simulation/trace.png"
import ColorIndicationFailure from "@site/static/img/guide/data-simulation/color_indication_failure.png"
import ColorIndicationSuccess from "@site/static/img/guide/data-simulation/color_indication_success.png"
import SimulationSection from "@site/static/img/guide/data-simulation/simulation_section.png"
import SimulationButton from "@site/static/img/guide/data-simulation/simulation_button.png"

# Simulation Remote

Simulation happens as part of the selected. However, there are times when you need to execute simulation from another section of the product. That’s when you would use the Simulation Remote.

## Data simulation

### Simulation button

The simulation button appears when the three dots at the end of the operation are clicked.

<div class="myResponsiveImg">
    <img src={SimulationButton} alt="Simulation Button" class="myResponsiveImg"/>
</div>

### Simulation section

Once simulated, a simulation section will appear on the right pane.

<div class="myResponsiveImg">
    <img src={SimulationSection} alt="Simulation Section" class="myResponsiveImg"/>
</div>

- Use the thunder icon to run the simulations.
- Use the Add button to create more simulations when multiple mock data are required for testing.

### Color indication

<img src={ColorIndicationSuccess} alt="Color Indication Success" />

However, when any part of the operation fails, it will indicate in red.

<img src={ColorIndicationFailure} alt="Color Indication Failure" />

### Trace

The trace shows the data at a certain state as it passes through the chain of actions.

<div class="myResponsiveImg">
    <img src={Trace} alt="Trace" class="myResponsiveImg"/>
</div>


### Action’s Data

When the trace button is clicked, the trace result appears on the right-bottom pane.

<div class="myResponsiveImg">
    <img src={ActionData} alt="Action's Data" class="myResponsiveImg"/>
</div>

### Result

The resulting data of the action.

### Data

The data that the action has received.

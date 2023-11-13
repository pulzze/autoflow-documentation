---
title: Settings
sidebar_label: Settings
description: Settings has the product configuration
image: img/api-autoflow-logo.png
keywords:
  - settings
---

import FeedbackInfo from "@site/static/img/guide/settings/feedback-info.png"
import DarkMode from "@site/static/img/guide/settings/dark-mode.png"
import ChangeLicenseAddress from "@site/static/img/guide/settings/change-license-address.png"
import EnterLicense from "@site/static/img/guide/settings/enter-license.png"
import Users from "@site/static/img/guide/settings/users.png"
import SystemEnvironment from "@site/static/img/guide/settings/system-environment.png"
import DownloadConfiguration from "@site/static/img/guide/settings/download-configuration.png"
import ServerStart from "@site/static/img/guide/settings/server-start.jpg"
import SettingsLeftNavigation from "@site/static/img/guide/settings/setting-left-navigation.jpg"

# Settings

<div class="colTwoBlock">
    <div class="colTwoLeft">
        <div class="colTwoWrapper">
            <h2>Configuration Management</h2>
            <p>The settings tab is located at the bottom of the left navigation.</p>
        </div>
    </div>
    <div class="colTwoRight">
          <h4>Tutorial</h4>
          <a target="_blank" href="https://www.youtube.com/watch?v=Ywv_cIZtMTI"><button class="btnVideo">🎥 Watch Video</button></a>
   </div>
    <div class="colTwoClearer"></div>
</div>

<img src={SettingsLeftNavigation} alt="Settings Left Navigation" class="myResponsiveImg" width="200px"/>

### **Upload Configuration**


1. Press the **Upload** button to import the configuration to your API AutoFlow.

<img src={DownloadConfiguration} alt="Download Configuration" class="myResponsiveImg" width="400px"/>

2. **Drag-and-drop** the configuration file to the box.

<img src="https://github.com/pulzze/autoflow-documentation/assets/85649767/7d3ba7eb-607a-4816-af7e-a9432d479890" alt="Upload Configuration" class="myResponsiveImg" width="400px"/>

3. **START** the server.

<img src={ServerStart} alt="Server Start" class="myResponsiveImg" width="700px"/>

By default, the server is in OFF status when the configuration is uploaded

:::tip
If the configuration is provided as a JSON text, create a new file with a **.json** extention and upload to API AutoFlow
:::

### **Download Configuration**

Press the Download button to save the configuration on your computer. The default file name is config.json.


## System Environment

<div class="myResponsiveImg">
    <img src={SystemEnvironment} alt="System Environment" class="myResponsiveImg"/>
</div>

### Assign **Name to API AutoFlow**

the API AutoFlow for running multiple instances

### Change **Port** number

for the API AutoFlow is by default `4000`. You can change the port but need to restart API AutoFlow to take effect.

## Users

<div class="myResponsiveImg">
    <img src={Users} alt="Users" class="myResponsiveImg"/>
</div>

### Separate workspace

- Each user has a separate workspace
- Each workspace is secured from other users
- Users can not assign a port number that is already in use by another user

### Administrator

- Can add and delete users

### Member

- Can NOT add or delete users

## License

### Enter the license number.

<div class="myResponsiveImg">
    <img src={EnterLicense} alt="Enter License" class="myResponsiveImg"/>
</div>

### Change License Server Address

If installed behind a firewall and a proxy need to be used

<div class="myResponsiveImg">
    <img src={ChangeLicenseAddress} alt="Change License Address" class="myResponsiveImg"/>
</div>

## Dark Mode

Turn the Dark Theme on and off

<div class="myResponsiveImg">
    <img src={DarkMode} alt="Dark Mode" class="myResponsiveImg"/>
</div>

## Feedback Info

Interactor support team may ask you to download the usage info.

<div class="myResponsiveImg">
    <img src={FeedbackInfo} alt="Feedback Info" class="myResponsiveImg"/>
</div>

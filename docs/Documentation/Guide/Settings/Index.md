---
sidebar_position: 13
---

import FeedbackInfo from "@site/static/img/Guide/Settings/feedback_info.png"
import DarkMode from "@site/static/img/Guide/Settings/dark_mode.png"
import ChangeLicenseAddress from "@site/static/img/Guide/Settings/change_license_address.png"
import EnterLicense from "@site/static/img/Guide/Settings/enter_license.png"
import Users from "@site/static/img/Guide/Settings/users.png"
import SystemEnvironment from "@site/static/img/Guide/Settings/system_environment.png"
import DownloadConfiguration from "@site/static/img/Guide/Settings/download_configuration.png"

# Settings

## **Configuration Management**


### **Download Configuration**

Press the Download button to save the configuration on your computer. The default file name is config.json.

<div class="myResponsiveImg">
    <img src={DownloadConfiguration} alt="Download Configuration" class="myResponsiveImg"/>
</div>

### **Upload Configuration**

Press the **Upload** button to import the configuration to your API AutoFlow.

<div class="myResponsiveImg">
    <img src="https://github.com/pulzze/autoflow-documentation/assets/85649767/7d3ba7eb-607a-4816-af7e-a9432d479890" alt="Upload Configuration" class="myResponsiveImg"/>
</div>

:::tip
If the configuration is provided as a JSON text, create a new file with a **.json** extention and upload to API AutoFlow
:::

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

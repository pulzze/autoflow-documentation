---
sidebar_position: 4
---

import DownloadLogs from '@site/static/img/deployment/versioning/version_location.png';
import CreateNewVersion from '@site/static/img/deployment/versioning/create_new_version.png';
import DeleteVersion from '@site/static/img/deployment/versioning/delete_version.png';
import CurrentlyRunningVersion from '@site/static/img/deployment/versioning/currently_running_version.png';
import VersionCheckBlue from '@site/static/img/deployment/versioning/version_check_blue.png';

version_check_blue
currently_running_version
delete_version
create_new_version
version_location

# Versioning

API AutoFlow provides versioning for each of the following sections:

- Server versioning
- API versioning
- Service versioning
- Client versioning
<!-- - Intent versioning -->

## Where to find the version

Version is located at the top of each section’s page.

<div class="myResponsiveImg">
    <img src={DownloadLogs} alt="Version Location" class="myResponsiveImg"/>
</div>

## How to create a new version

Click the + button next to the version number.

<div class="myResponsiveImg">
    <img src={CreateNewVersion} alt="Create New Version" class="myResponsiveImg"/>
</div>

Create a new version number.

You can duplicate the content from an existing version.

## How to delete a version

Click the trash button next to the version number.

<div class="myResponsiveImg">
    <img src={DeleteVersion} alt="Delete Version" class="myResponsiveImg"/>
</div>

A confirmation popup will appear before deleting.

## Currently running version

 **IMPORTANT**: The version that you are working on may be different from the currently running version.


<div class="ResponsiveImg">
    <img src={CurrentlyRunningVersion} alt="Currently Running Version" width="300px" height="auto"/>
</div>

Currently running version is denoted with a check mark.

When the check mark is BLUE, you are working on the currently running version of the configuration

<div class="ResponsiveImg">
    <img src={VersionCheckBlue} alt="Version Check Blue" width="300px" height="auto"/>
</div>

When a version that’s not currently running is selected, the check turns GREY.

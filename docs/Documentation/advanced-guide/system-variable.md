---
sidebar_position: 2
---
# System Variable

[Home](../../Documentation/Overview) &gt; [Getting Started](../getting-started)

These system variables are configurable in 3 ways.

1. In the configuration file (by default this is the autoflow.conf file in the data folder within the install location)
2. On the settings page within the products UI (this writes the values into the configuration file)
3. As shell variables with the prefix **AUTOFLOW_** (for instance AUTOFLOW_CONFIG_FILE)

The CONFIG_FILE variable is unique in that it is only usable as a shell variable since the configuration file itself defines the other variables. Shell variables override the variables in the configuration file.

### ADMIN_PASSWORD

Used to set the initial password and bypass the first user page. Requires ADMIN_USERNAME to be set as well.

### ADMIN_USERNAME

Used to set an initial username and bypass the first user page. Requires ADMIN_PASSWORD to be set as well.

### BOOT_FILE

This file is used to automatically load solutions during bootup. This variable is predominantly used in docker deployments. The file itself can be created by downloading a config from an existing installation. This value will be ignored if configuration already exists but can be forced to be used with BOOT_FILE_REPLACES_CONFIG.

### BOOT_FILE_REPLACES_CONFIG

Determines whether the BOOT_FILE should replace existing config. The value can be 'true' or 'false'.

### CLUSTER_HOSTS

A comma separated list of hosts to include in the cluster. Only used if CLUSTER_MODE is 'hosts'.

### CLUSTER_KUBERNETES_POLLING_INTERVAL

The polling interval to maintain the cluster in kubernetes. Only used if CLUSTER_MODE is 'kubernetes'.

### CLUSTER_KUBERNETES_SERVICE

The name of the kubernetes headless service. Only used if CLUSTER_MODE is 'kubernetes'.

### CLUSTER_MODE

This determines the clustering strategy. Values can be 'kubernetes', 'hosts', or 'dynamic'. Only used if DEPLOYMENT_MODE is 'cluster'.

### CONFIG_FILE

The customizable environment variables for the product. Since this value is an environment variable itself, it can only be used as a command line argument; otherwise, the default CONFIG_FILE will be used within the DATA_DIRECTORY.

The file is structured as KEY=VALUE. For example:

```jsx
NAME=My Application
UI_PORT=8080
```

### DATA_DIRECTORY

The default location for product specific files. For instance, the product CONFIG_FILE and LICENSE_FILE are product specific files. Default: data

### DEPLOYMENT_MODE

The deployment mode to use. Values can be 'solo' and 'cluster'.

### DIRECTORY

The directory for all *relative* file system access.

### LICENSE_ADDRESS

The server address to use for license validation.

### LICENSE_FILE

The file to use for license validation. Should contain license information provided by the license server.

### LICENSE_PORT

The server port to use for license validation.

### LOG_LEVEL

The log level to use during operation. Values can be 'debug', 'info', 'warn', and 'error'.

### LOG_MODE

The log mode to use during operation. Values can be 'json' and 'plain'. The 'json' option is useful for integration with logging tools like fluentd/logstash.

### NAME

The name to use for this installation. The name will be listed in the UI browser title.

### PORT_OFFSET

This is an offset to apply to all ports configured in the solution. This can be useful if you want to deploy multiple instances of the same soluton on the same system but use different ports.

### UI_PORT

The port to serve the UI. Default: 4000
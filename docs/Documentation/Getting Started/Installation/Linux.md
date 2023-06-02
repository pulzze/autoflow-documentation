---
sidebar_position: 3
---
# Linux

### **Extract**

Unzip the downloaded file

```bash
tar -xzf [file_name].tar
```

Go to the directory where it was extracted. For example,

```bash
cd ~/interactor/bin
```

# **Developer Mode**

### **Start**

Issue the following command

```bash
./interactor console
```

**http://localhost:4000**

### **Stop**

API AutoFlow will terminate when the terminal is closed.

# **Production Mode**

### **Start**

Issue following commands to start API AutoFlow

```bash
./interactor start
```

Open up the browser and go to below URL

**http://localhost:4000**

### **Stop**

Issue the following command

```bash
./interactor stop
```


# **Remote Access**

### **IP Address**

Open up the browser and go to URL

```bash
http://[server_ip]:4000
```
### **Firewall Issue (opening port)**

For remote access, you may need to open a TCP port 4000 for API AutoFlow User Interface:

Red Hat example
```bash
su
firewall-cmd --permanent --add-port 4000/tcp
systemctl restart firewalld
```
Similarly, to use a port you configured in API AutoFlow need to be open.

```bash
firewall-cmd --permanent --add-port 1234/tcp
firewall-cmd --permanent --add-port 2000-3000/tcp
systemctl restart firewalld
```




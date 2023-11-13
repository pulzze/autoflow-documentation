---
sidebar_position: 3
title: Remote access
sidebar_label: Remote access
description: How to access API Autoflow from remote services
image: img/api-autoflow-logo.png
keywords:
  - remote access
---

# Remote Access

### **IP Address**

```bash

http://[server_ip_address]:4000

```

### Firewall blocking the connection

For remote access, you may need to open a TCP port 4000 for API AutoFlow User Interface:

**Red Hat example**

```bash
su
firewall-cmd --permanent --add-port 4000/tcp
systemctl restart firewalld
```

Similarly, to use a port you configured in API AutoFlow needs to be open.

```bash
firewall-cmd --permanent --add-port 1234/tcp
firewall-cmd --permanent --add-port 2000-3000/tcp
systemctl restart firewalld
```

**Ubuntu Example**

```bash
sudo iptables -I INPUT 3 -p tcp --dport 4000 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT

sudo apt-get install iptables-persistent                  
sudo netfilter-persistent save
```

Similarly, to use a port you configured in API AutoFlow need to be open.

```bash
sudo iptables -I INPUT 3 -p tcp --dport 2000:3000 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
sudo iptables -I INPUT 3 -p tcp --dport 1234 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT

```

---

Google Cloud example??
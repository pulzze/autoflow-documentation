# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Node version

This project needs node version >=16.14".

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## Use Case template

### Overview
This section should explain what the purpose of the demo is. What should the user expect to learn and how is this document going to demonstrate it. This is for a high level understanding of what’s going to happen.

### Supporting Concepts
This section should provide links to documentation for required knowledge. For example, if the demo will jump straight into implementation, it will be important for the user to know how to get there and do it themselves. What do they need to know to even get started. Additionally, are there any concepts covered that won’t be explained in this demo. For example, what is a service operation? The user may not know anything about our product at all.

### Details
Explain the details of the demo. This is where the demo really begins but we need to make sure every input and output is explained (possibly in a bullet list). Think of this section as the blackbox view of the demo or the specifications for it. Is there any special logic or cases the user should be expecting? This is setting expectations for the actual content so the user doesn’t get lost or question where it’s going.

### Content
The content needs to be careful not to assume the reader knows anything about the product. Every time there is a concept that the user needs to know, it should include one of the links listed in the supporting concepts (above). Just make sure this section explains each step so the user can follow along.

### Configuration & Code Download
---
sidebar_position: 9
title: Glossary
sidebar_label: Glossary
description: Glossary of commonly used terms
image: img/api-autoflow-logo.png
keywords:
  - glossary
  - terms
---

# Glossary

## A

### API

> An API (Application Programming Interface) is a set of protocols and tools that allows different software applications to communicate and interact with each other, enabling them to access and share data or functionality seamlessly.


### API gateway

> An API gateway is a server that acts as an entry point for multiple microservices, managing and orchestrating their communication, handling tasks such as authentication, load balancing, and request routing.

[API gateway vs. management vs. server](#api-gateway-vs-management-vs-server)

### API harmonization

> API harmonization refers to the process of standardizing and aligning different API (Application Programming Interfaces) to ensure consistency, interoperability, and seamless integration across various systems and platforms.

[API standardization vs. API harmonization](#api-standardization-vs-api-harmonization)

### API management

> API management involves the planning, deployment, and monitoring of API (Application Programming Interfaces), ensuring efficient development, seamless integration, and robust security across the API lifecycle.

[API gateway vs. management vs. server](#api-gateway-vs-management-vs-server)

### API standardization

> API standardization involves establishing and adhering to a set of consistent specifications and protocols to promote interoperability, ease of integration, and uniformity in the design and implementation of Application Programming Interfaces.

[API standardization vs. API harmonization](#api-standardization-vs-api-harmonization)

### API standardization vs. harmonization

> API standardization is about defining and adhering to a set of rules, while API harmonization is about coordinating and aligning APIs to work cohesively.

- API standardization emphasis is on creating uniformity in the design, structure, and implementation of APIs.
- API harmonization emphasis is on ensuring that various APIs across different systems or platforms can collaborate effectively without inconsistencies or conflicts.

### API gateway vs. management vs. server

- API gateway is focused on managing the traffic and interactions between clients and microservices
- API management involves a broader set of tasks throughout the API lifecycle
- API server refers to the server-side implementation responsible for processing API requests. 

> API management often includes an API gateway as a key component, while an API server may or may not have the extensive management and gateway features associated with API management platforms.

### API security

> API security involves implementing measures and protocols to protect API from unauthorized access, data breaches, and other potential threats, ensuring the integrity and confidentiality of the information exchanged between software applications.

### API server

> An API server is a software component that facilitates communication between different software applications by processing requests, executing operations, and managing the exchange of data through API (Application Programming Interfaces).

[API gateway vs. management vs. server](#api-gateway-vs-management-vs-server)

### API Schema

> API Schema refers to a formalized, structured representation of the expected data format, types, and relationships that an API endpoint can send or receive, providing a blueprint for developers interacting with the API.

### Array

> An array is a data structure that stores a collection of elements, indexed numerically and accessible by their positions, with dynamic sizing and support for various data types.

For example,

The value "John" is in position "0" and "Doe" is in position "1".

```json
["john", "doe"]`
```

### Automation

> Automation in software solutions involves the use of technology to perform tasks, processes, or workflows without manual intervention, increasing efficiency and reducing the need for human involvement.

## B

### Boolean

> A Boolean is a primitive data type representing "true" or "false" values, often used in logical expressions and conditional statements.

## C

### CI/CD

> CI/CD (Continuous Integration/Continuous Deployment) is a software development practice that involves automating the integration, testing, and deployment of code changes to deliver more frequent and reliable software releases.

### Citizen developer

> A citizen developer is an individual, typically outside of the IT department, who uses low-code or no-code platforms to create applications and automate workflows without extensive programming expertise.

### Client

> In a software solution, a client is a computer program or device that requests services or resources from a server in a client-server architecture.

### Client-server architecture

> Client-server architecture is a computing model where client devices communicate with a central server to request services, typically involving the distribution of tasks and resources between the client and server components.

### Cluster

> Cluster in Kubernetes is a set of interconnected virtual or physical machines that collectively run containerized applications and manage resources using a shared control plane.

### Conditional

> A conditional refers to a logic construct that allows the execution of different actions based on specified logical conditions. For example, IF condition, SWITCH condition.

### Configuration

> A configuration refers to the process of setting up and customizing API Autoflow using pre-built components.

### Config Map

> In Kubernetes, a ConfigMap is an API object used to store configuration data separately from application code, allowing for the dynamic configuration of containers without modifying the underlying images.

### CORS

> CORS (Cross-Origin Resource Sharing) in API refers to a security feature that permits or restricts web browsers from making requests to a domain different from the one that served the original web page, preventing unauthorized cross-origin access to resources.

### Console

> A console is a text-based interface or window within an integrated development environment (IDE) or a command-line interface (CLI) used for interacting with and monitoring the execution of a program.

### Container

> A container in IT is a lightweight, portable, and self-sufficient software unit that encapsulates an application and its dependencies, ensuring consistent deployment and execution across various computing environments.

For example, Docker is one of several containerization platforms

### Connection

> A connection refers to the established communication link between different components or systems, facilitating the exchange of data and information

### CPU

> CPU (Central Processing Unit) is the primary component of a computer that performs arithmetic and logic operations, executing instructions stored in memory to carry out tasks.

### Curly braces {}

> A curly braces {} are used to define blocks of code, including function bodies, control flow structures, and object literals.
>
> The most common use is in defining an object data structure

For example

```json
{"name":"John Doe"}
```

## D

### Data abstraction

> Data abstraction is where the essential features of a data type are identified and separated from the details of their implementation, allowing for the creation of abstract and modular structures.

### Data-in-transit (Data-in-motion)

> Data-in-transit refers to information that is actively moving from one location to another over a network, susceptible to interception or monitoring during the transmission process.

### Data-at-rest

> Data-at-rest refers to information that is stored and inactive in a persistent storage medium, such as a hard drive or database, posing security considerations for the stored data.

### Data collection

> Data collection is the systematic gathering and recording of information from various sources for the purpose of analysis, research, or decision-making.

### Data handling

> Data handling involves the processes of collecting, organizing, storing, and manipulating data to ensure its accuracy, security, and accessibility for various purposes within a system or application.

### Data normalization

> Data normalization is the process of organizing and structuring a database to reduce redundancy and improve efficiency by minimizing data duplication and adhering to a set of rules.

### Data processing

> Data processing is the systematic and automated transformation of raw data into meaningful information through various computational and analytical methods.

### Data transformation

> Data transformation is the process of converting data from one format, structure, or representation into another, often to meet specific requirements for analysis, integration, or storage.

### Data collection vs. handling vs. normalization vs. processing vs. transformation

- Data collection is about gathering information
- Data handling involves managing data comprehensively
- Data normalization focuses on organizing databases efficiently
- Data processing transforms raw data into meaningful information
- Data transformation converts data between different formats or structures.

### Data Schema

> Data Schema is a structured representation defining the organization, relationships, and constraints of data within a database, facilitating consistency and integrity in data storage and retrieval.

### Data structure

> A data structure is a way of organizing and storing data that enables efficient manipulation, retrieval, and modification of information.

### Data type

> A data type defines the nature of a value, specifying the kind of data it represents and the operations that can be performed on it.  For example, string, number, object, and array.

### DB (Database)

> A database is a structured collection of data organized in a way that allows efficient storage, retrieval, and manipulation of information.  For example, Oracle, MySQL, or Postgres database.

### Debugging

> Debugging is the process of identifying and fixing errors or bugs in a computer program to ensure its correct and intended functionality.

### Decode

> Decoding refers to the process of converting encoded data back into their original form.

### Deployment

> Deployment is the process of making a developed application available for use, typically involving installation, configuration, and activation in a production environment.

### Docker (Dockerize)

> Docker is a platform that enables the creation, deployment, and management of containers, facilitating the development and deployment of applications in isolated and consistent environments.

### Docker-compose

> Docker Compose is a tool that allows defining and running multi-container Docker applications using a YAML file to configure services, networks, and volumes in a streamlined and reproducible way.

## E

### Encode

> Encoding is the process of converting data into a specific format for secure transmission, storage, or processing.

### Enterprise

> Enterprise solutions are comprehensive, scalable, and integrated applications designed to meet the complex and diverse needs of large organizations, addressing various business processes and functions.

### Environment (System) variables

> Environment variables are global settings in a computing environment that store information and are accessible by various features running on API Autoflow.

### Exception

> An exception is an unexpected event or error condition that disrupts the normal flow of program execution, requiring specialized handling to prevent application failure.

## F

### Firewall

> A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules, acting as a barrier between a trusted internal network and untrusted external networks.

## H

### Headless service

> In Kubernetes, a headless service is a service that doesn't assign cluster-internal IP addresses to its pods, making it suitable for services that require direct communication between clients and individual pods.

### History

> The history refers to a record of changes or actions made within API Autoflow, providing a chronological account of user interactions and modifications.

### HTTP

> HTTP (Hypertext Transfer Protocol) is a foundational protocol used for communication on the World Wide Web, governing the transfer of hypertext documents and other data between clients and servers.

## I

### Integration

> Integration involves combining different systems, applications, or components to work together seamlessly, sharing data and functionalities to enhance overall performance and functionality.

### Interoperability

> Interoperability is the ability of different systems, applications, or components to seamlessly exchange and use data or services, ensuring effective communication and collaboration across diverse technologies.

## J

### JSON (JavaScript Object Notation)

> JSON (JavaScript Object Notation) is a stringified consisting of object (key-value pairs), arrays, and nested structures. It is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.

## K

### Kafka

> Apache Kafka is an open-source distributed event streaming platform that enables the building of real-time data pipelines and streaming applications.

### Key-value pair

> A key-value pair is a combination of a unique identifier (key) and its associated value, commonly used in objects and maps for data organization.

### Kubernetes

> Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.

## L

### Layout

> A layout refers to the arrangement and organization of visual elements within an application's user interface, defining the structure and presentation of content.

### Load Balancer

> A load balancer is a network device or software application that distributes incoming network traffic across multiple servers to ensure efficient use of resources, improve responsiveness, and enhance the availability of applications or services.

### Logs

> Logs are records of events, activities, or messages generated by applications or systems, serving as a valuable tool for troubleshooting, debugging, and monitoring performance.

## M

### Metadata

> Metadata is descriptive information about data, providing details such as its structure, format, origin, and context, facilitating efficient management, discovery, and understanding of the data.

### Method in API

> A method is an operation or function that defines a specific action to be performed, typically associated with HTTP methods like GET, POST, PUT, or DELETE for data retrieval, creation, update, or deletion, respectively.

### Messaging Bus

> A messaging bus is a communication infrastructure that allows different software components or systems to exchange messages, facilitating asynchronous and decoupled interactions in distributed architectures.

### Microservices

> Microservices is an architectural approach in software development that structures an application as a collection of loosely coupled, independently deployable services, each responsible for specific business capabilities.

### MQTT

> MQTT (Message Queuing Telemetry Transport) is a lightweight, open, and efficient messaging protocol designed for low-bandwidth, high-latency, or unreliable networks, commonly used in IoT (Internet of Things) and other scenarios requiring efficient, real-time communication.

### MVP

> MVP (Minimum Viable Product) is a development strategy that involves creating a version of a product with the minimum features necessary to meet user needs and gather feedback, enabling iterative improvements and efficient resource utilization.

## N

### Navigation

> Navigation refers to the user interface elements and interactions designed to facilitate the movement between different screens, modules, or components within the application.

### Null

> Null is a primitive value representing the intentional absence of any object value or reference.

### Number

> A number is a primitive data type that represents numeric values, including integers and floating-point numbers.

## O

### Object

> An object is a composite data type that stores "key-value" pairs and represents a collection of related properties and methods.

### OpenAPI

> OpenAPI, formerly known as Swagger, is a specification for building and documenting RESTful APIs, providing a standardized way to describe API endpoints, request/response formats, and authentication mechanisms.

### Operation

> An operation refers to a specific task or function performed by a program or system to achieve a desired outcome.

For example, Server operation and Service operation.

## P

### Parameter

> In an API, a parameter is a variable or value passed with an API request, providing additional information to customize the request or influence the behavior of the API endpoint.

### Path in URL

> In a URL, the path is the portion that specifies the hierarchical location of a resource on the server, indicating the route to access a specific web page or endpoint.

### Platform

> A platform is a comprehensive environment or framework that provides a set of tools, services, and libraries for developing, deploying, and managing applications across various devices or systems.

### POC

> POC (Proof of Concept) is a small-scale, experimental implementation or demonstration conducted to validate the feasibility, functionality, or viability of a proposed idea or technology.

### Port in Server

> In a server, a port is a communication endpoint assigned to a specific process or service, allowing multiple applications to run on the same server and be reachable through unique port numbers.

### Postman

> Postman is a collaboration platform for API development that simplifies the testing, documentation, and sharing of APIs by providing a user-friendly interface for designing and managing requests.

### Protocols

> Protocols are predefined rules and conventions that dictate the format, sequence, and error handling of data exchanged between systems, ensuring standardized communication and interoperability.

> Some common protocols include HTTP (Hypertext Transfer Protocol), FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol), TCP/IP (Transmission Control Protocol/Internet Protocol), SSH (Secure Shell), DNS (Domain Name System), WebSocket, MQTT (Message Queuing Telemetry Transport), and Bluetooth.

## Q

### Query

> A query is a request for specific information or action performed on a database, typically using a query language like SQL to retrieve, update, or manipulate data.

## R

### Rate limit

> Rate limiting is a mechanism that restricts the number of requests a user or client can make within a specified time period, preventing abuse and ensuring fair usage of resources.

### Right Pane

> The right pane in API Autoflow is a data visualization pane for logs, workflow replay, and simulation.

### Replay

> Replay refers to the capability to re-execute or reproduce an actions within the workflow for testing, debugging, or analysis purposes.

### Return-on-investment (ROI)

> Return on investment (ROI) is a financial metric that measures the profitability or efficiency of an investment by comparing the gain or loss relative to its cost.

## S

### Scalability

> Scalability refers to its ability to handle increased workloads, user growth, or resource demands efficiently, often achieved through horizontal or vertical scaling.

### Scope

> Scope refers to the context or range within which variables are defined and accessible, influencing their visibility and lifespan in a program.

### Server

> A server is a system that provides services, resources, or data to other application.
> 
> Some common server includes, Web, Mail, FTP, File, and Application servers

### Service

> A service is a self-contained unit of functionality or business logic that can be accessed and utilized by other components or applications over a network.
> 
> Service are like function in programming language. It has INPUT and OUTPUT.

### Simulation

> Simulation refers to the capability to mimic or emulate the input data to the workflow, allowing developers to test, visualize, and refine their designs as they build the workflow.

### SQL

> SQL (Structured Query Language) is a standard programming language for managing and manipulating relational databases, enabling tasks such as data querying, insertion, updating, and deletion.

### Square bracket []

> Square brackets [] are often used to denote an array or list, representing a collection of elements that can be individually referenced using an index or key.

### Staging

> Staging is an environment that closely resembles the production environment, allowing for testing, validation, and quality assurance before deploying changes or updates.

### String

> A string is a sequence of characters that represents text and is enclosed within single or double quotes.

## T

### TCP

> TCP (Transmission Control Protocol) in a software solution is a reliable, connection-oriented communication protocol that ensures the secure and ordered delivery of data between devices over a network.

### TCP/IP

> TCP/IP (Transmission Control Protocol/Internet Protocol) in a software solution is a suite of communication protocols that facilitates the transmission of data between devices on the Internet, providing a standardized framework for network communication.

### TLS

> TLS (Transport Layer Security) in a server is a cryptographic protocol that ensures secure communication by encrypting data transmitted between clients and servers, providing confidentiality and integrity for sensitive information.
> 
> HTTPS is a specific implementation of HTTP over TLS, focusing on securing web-based communication

### Toolbar

> A toolbar is a graphical user interface element containing icons or buttons that provide quick access to frequently used functions or commands.

### Tracing

> Tracing refers to the process of visually mapping and documenting the flow and interactions between different components or actions within the workflow for clarity and analysis.

### Transaction

> A transaction refers to a set of data received by the workflow.
> 
> Transaction can be transformed into simulation.

## U

### Ubuntu

> Ubuntu is a popular open-source Linux distribution known for its user-friendly interface, extensive software ecosystem, and community-driven development.

## V

### Variable

> A variable is a named storage location representing a value that can be changed during the execution of a program, allowing for dynamic data manipulation.

Refer to [scope](#scope) for arranging variable in context or range. 

### Version

> Versioning refers to the management of different iterations or releases of the server, service, and different parts of solution enabling tracking, rollback, and collaboration among users working on distinct versions.

## W

### Workflow

> A workflow is a visual representation of a series of interconnected steps or actions that automate processes, guiding the execution and logic of the application.

### Workspace

> A workspace is a canvas where users design and build the workflow by organizing various actions to create and customize their applications.
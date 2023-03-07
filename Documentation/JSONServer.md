# JSON Server

`json-server` is a tool that allows you to quickly create a fake RESTful API by serving data from a JSON file. 
It is often used for prototyping, testing, and mocking APIs during development.

## How do you install the JSON server?

You can install using npm. Here are the steps to install `json-server`:

```
npm install -g json-server
```

NOTE: The `-g` flag tells npm to install json-server globally, so it can be accessed from any directory on your system.

Once the installation is complete, you can start using json-server by creating a db.json file in your project directory and running the following command:

```
json-server --watch [name-of-file].json
```

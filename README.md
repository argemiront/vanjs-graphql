# VanJS - Clear and Performant GraphQL

Code for the talk on VanJS meetup about GraphQL.


## Prerequisites 

- npm
- git
- node


## Installation

To set up the code you will need to pull down the source codes from github repo as follows:


```shell
cd ~
git clone https://github.com/argemiront/vanjs-graphql.git
cd vanjs-graphql

npm install
```

## Starting Local Server

You can serve the API at your local machine on `http://localhost:3000`. To start serving the API, 

```shell
npm start
```

You can change the port on the `index.js` from the root folder of the project in the following line:

```
server.listen({ port: 3000 }).then(({ url }) => console.log(`serving at: ${url}`));
```

## Branches

### 1.basic
Basic structure with schema, resolvers and server inside the `index.js` file.

### 2.folders
The `graphql` folder is created. Schemas and its resolvers now are in separated folders.

The [merge-graphql-schemas](https://www.npmjs.com/package/merge-graphql-schemas) library is used to automatically merge schemas and resolvers inside the folder that follows the pattern:

- schemas: **schema_name**.typedefs.gql
- resolvers: **resolver_name**.resolvers.js

The data is moved to the `database.js` lib inside the `utils` folder. It provides functions to fetch the data.


### 3.middleware
Middleware are added to the project in 3 different ways:

- added in the GraphQL context for authentication purpose;
- to run with all resolvers;
- to run before a specific resolver;

Middleware are merged with the original schema and resolvers by the `applyMiddleware` functions from the [graphql-middleware](https://www.npmjs.com/package/graphql-middleware) library.


### 4.dataloader
The [dataloader](https://github.com/graphql/dataloader) middleware is added here to batch and cache database requests.

The branch has two parts, on **4.1** it is only added a `console.log` on the database library to demonstrate the issue with multiple data load. On **4.2** the issue is solved by applying the dataloader.


### 5.directives
In the last part two directives are created to perform additional computation on the server before the data is sent to the client.

Creating a new directive can be accomplished with the following procedures:

- add the directive to the schema
- extend the **SchemaDirectiveVisitor** class
- override the desired visitor method

## Further Reading

- [Apollo GraphQL](https://www.apollographql.com/docs/apollo-server/)
- [GraphQL Docs](https://graphql.org/learn/)

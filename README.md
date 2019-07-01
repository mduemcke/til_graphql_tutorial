# Graphql tutorial (TIL)

## Introduction to Graphql

### What is GraphQL?

GraphQL is a data query and manipulation language

Flexible approach for developing web applications, a driver might have been to overcome difficulties with REST-based apis. GraphQL is good for lightweight data transfers among others needed for mobile applications.

Supports reading (query), writing (mutations) and subscriptions to data changes

### Some strenghts

- makes the data transferred a conscious choice and avoids sending unnecessary data as a response
- no multiple round trips to get nested data
- avoid to construct multiple endpoints for different shapes of responses

### History

Developed by FB in 2012, was used internally first and released for public use in 2015

Since 2018 there is a "GraphQL Foundation" which is hosted by Linux Foundation

## Tutorial

By extending the skeletton from this repo, add implementatons below.
Only the files `schema.graphql` and  `resolvers.js`need to be changed. An example implementation is in the git commit history. The git commit names are given in parenthesis.

1) Implement a query that returns a list of employees (`Adding a query that returns a type object`)

2) Implement a query that searches an employee by its role (`Adding a query with an argument`)

3) Make queries also return the employee's address which is stored in a separate collection (`Dealing with nested objects`)

4) Cleanup by removing resolver logic that GraphQL can guess from the schema (`GraphQL can infer simple resolver logic`)

5) Implement a function that adds a new employee to the list of employees (`Adding a mutation`)

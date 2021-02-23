const {buildSchema} = require('graphql')

const schema = buildSchema (`
   type User {
      id: ID
      fname: String!
      lname: String!
      email: String!
      password: String!
   }
   type List {
      id: ID
      name: String
      count: String
      timeprocess: String
      employees: String
      timeactive: String
      inprocess: String
   }
   input UserInput {
      id: ID
      fname: String!
      lname: String!
      email: String!
      password: String!
   }
   input ListInput {
      id: ID
      name: String!
      count: String!
      timeprocess: String!
      employees: String!
      timeactive: String!
      inprocess: String!
   }
   type Query {
      getAllUser: [User]
      getUser(id: ID): User
      getAllList: [List]
   }
   type Mutation {
      createUser(input: UserInput): User!
   }
`)

module.exports = schema
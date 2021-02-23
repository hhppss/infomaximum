import gql from 'graphql-tag';

export const GET_ALL_USER = gql`
   query {
      getAllUser {
         id, fname, lname, email, password
      }
   }
`
export const GET_ONE_USER = gql`
   query getUser($id: ID){
      getUser(id: $id) {
         id, fname, lname, email, password
      }
   } 
`
export const GET_ALL_LIST = gql`
   query {
      getAllList {
         name, count, timeprocess, employees, timeactive, inprocess
      }
   }
`
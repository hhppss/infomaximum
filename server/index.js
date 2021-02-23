const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const users = [{id: 1, fname: "Евгений", lname: "Е", email: "efge", password: "123"}]
const lists = [
   {
      id: 1, 
      name: "Рассмотрение кредитной заявки", 
      count: "382619" , 
      timeprocess: "20ч 43 мин", 
      employees: "120 сотрудников", 
      timeactive: "1ч 7 мин(10,5%)", 
      inprocess: "129 сценариев"
   },{
      id: 2, 
      name: "Оформление страховых премий", 
      count: "3892" , 
      timeprocess: "76 ч 47 мин", 
      employees: "53 сотрудника", 
      timeactive: "1ч 7 мин (10,5%)", 
      inprocess: "122 сценариев"
   },{
      id: 3, 
      name: "Подготовка и прохождение платежей", 
      count: "892" , 
      timeprocess: "109 ч 47 мин", 
      employees: "54 сотрудника", 
      timeactive: "2ч 7 мин (10,5%)", 
      inprocess: "12 сценариев"
   }
   ,{
      id: 4, 
      name: "Подготовка и прохождение платежей", 
      count: "892" , 
      timeprocess: "109 ч 47 мин", 
      employees: "54 сотрудника", 
      timeactive: "2ч 7 мин (10,5%)", 
      inprocess: "12 сценариев"
   }
   ,{
      id: 5, 
      name: "Подготовка и прохождение платежей", 
      count: "892" , 
      timeprocess: "109 ч 47 мин", 
      employees: "54 сотрудника", 
      timeactive: "2ч 7 мин (10,5%)", 
      inprocess: "12 сценариев"
   }
]

const app = express();
app.use(cors()); 

const createUser = (input) => {
   const id = Date.now()
   return {
      id, ...input
   }
}

const root = {
   getAllUser: () => {
      return users
   },
   createList: ({ input }) => {
      const list = createList(input)
      users.push(list)
      return list
   },
   getAllList: () => {
      return lists
   },
   getUser: ({id}) => {
       return users.find(user => user.id == id)
   },
   createUser: ({ input }) => {
      const user = createUser(input)
      users.push(user)
      return user
   }
}

app.use('/graphql', graphqlHTTP({
   graphiql: true,
   schema,
   rootValue: root
}))

app.listen(5000, () => console.log('server started on port 5000'));
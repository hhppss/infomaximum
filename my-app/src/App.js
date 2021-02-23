import React from 'react'
import LoginPage from './components/login/LoginPage'
import './App.css'
import RegisterForm from './components/register/RegisterForm'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { Edit } from './components/edit/Edit'
import ListProcess from './components/listprocess/ListProcess'

function App() {  
  
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/edit" component={Edit}/>
        <Route path="/list" component={ListProcess} />
      </Switch>
    </Router>
  )
}

export default App;

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import AlertTemplate from 'react-alert-template-basic'
import { positions, transitions, Provider as AlertProvider } from 'react-alert'

const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
})

const options = {
    position: positions.MIDDLE,
    timeout: 2000,
    offset: '10px',
    transition: transitions.FADE
  }

ReactDOM.render(
    <ApolloProvider client={client}>
        <AlertProvider template={AlertTemplate} {...options}>
            <App />
        </AlertProvider>
    </ApolloProvider>,
  document.getElementById('root')
);

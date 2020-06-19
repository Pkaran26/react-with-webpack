import React from 'react'
import Header from './header'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'

const App = ()=>(
  <div>
    <BrowserRouter>
      <Header />
      <h1>Welcome</h1>
      <Switch>
        <Route exact={true} path="/" component={ (props)=> <Home { ...props } /> } />
        <Route exact={true} path="/about" component={ (props)=> <About { ...props } /> } />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App

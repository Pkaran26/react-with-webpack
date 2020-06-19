import React from 'react'
import { render } from 'react-dom'
import Header from './header'

const App = ()=>(
  <div>
    <Header />
    <h1>hello</h1>
  </div>
)

render(<App />, document.getElementById("app"))

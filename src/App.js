import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import DropDownFilter from './components/DropDownFilter'

const App = () => {
  return (
    <div className="App">
      {/* <h1>Hello World Don Checking for Push</h1> */}
      <div className="field is-horizontal">
        <DropDownFilter/>
      </div>
    </div>
  )
}

export default App

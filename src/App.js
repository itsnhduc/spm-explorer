import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Search from './comps/Search'
import MasterHeader from './comps/MasterHeader'
import MasterFooter from './comps/MasterFooter'
import Package from './comps/Package'
import User from './comps/User'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <MasterHeader />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/package/:name" component={Package} />
            <Route path="/user/:name" component={User} />
          </Switch>
        </BrowserRouter>
        <MasterFooter />
      </div>
    )
  }
}

export default App

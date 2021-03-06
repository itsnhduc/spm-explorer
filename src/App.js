import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Search from './comps/Search'
import MasterHeader from './comps/MasterHeader'
import MasterFooter from './comps/MasterFooter'
import Package from './comps/Package'
import User from './comps/User'
import GettingStarted from './comps/GettingStarted'
import ContactUs from './comps/ContactUs'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <MasterHeader />
        <main>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Search} />
              <Route path='/package/:name' component={Package} />
              <Route path='/user/:name' component={User} />
              <Route path='/getting-started' component={GettingStarted} />
              <Route path='/contact' component={ContactUs} />
            </Switch>
          </BrowserRouter>
        </main>
        <MasterFooter />
      </div>
    )
  }
}

export default App

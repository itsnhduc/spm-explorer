import React, { Component } from 'react'
import Search from './comps/Search'
import MasterFooter from './comps/MasterFooter'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Search />
        <MasterFooter />
      </div>
    )
  }
}

export default App

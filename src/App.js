import React, { Component } from 'react'

import { Footer } from 'react-materialize'

import Search from './comps/Search'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Search />
        <Footer copyrights='&copy; 2017 SPM' className='grey darken-3'>
          <h5 className='white-text'>SPM Explorer</h5>
          <span className='grey-text text-lighten-4'>Explore packages</span>
        </Footer>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import { Footer } from 'react-materialize'
import './MasterFooter.css'

class MasterFooter extends Component {
  render () {
    return (
      <Footer copyrights='&copy; 2017 SPM'>
        <h4 className='white-text'>SPM Explorer</h4>
        <span className='grey-text text-lighten-4'>Explore packages</span>
      </Footer>
    )
  }
}

export default MasterFooter

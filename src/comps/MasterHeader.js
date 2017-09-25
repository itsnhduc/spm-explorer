import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'

class MasterHeader extends Component {
  render () {
    return (
      <div className="MasterHeader">
        <Navbar brand='&nbsp;SPM Explorer' right>
          <NavItem href='/'>Search</NavItem>          
          <NavItem href='/get-started'>Getting started</NavItem>
          <NavItem href='/contact'>Contact Us</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default MasterHeader

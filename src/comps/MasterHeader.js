import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './MasterHeader.css'

class MasterHeader extends Component {
  render () {
    return (
      <div className="MasterHeader">
        <Navbar brand='&nbsp;SPM Explorer' right>
          <NavItem href='/'>Search</NavItem>
          <NavItem href='/contact'>Contact Us</NavItem>
          <NavItem href='/getting-started'>Getting Started</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default MasterHeader

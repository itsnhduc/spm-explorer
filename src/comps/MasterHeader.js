import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './MasterHeader.css'

class MasterHeader extends Component {
  render () {
    return (
      <div className="MasterHeader">
        <Navbar brand='&nbsp;SPM Explorer' right>
          <NavItem href='/'>SEARCH</NavItem>
          <NavItem href='/contact'>CONTACT US</NavItem>
          <NavItem href='/getting-started'>GETTING STARTED</NavItem>
        </Navbar>
      </div>
    )
  }
}

export default MasterHeader

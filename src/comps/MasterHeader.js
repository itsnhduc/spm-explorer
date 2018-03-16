import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import './MasterHeader.css'

class MasterHeader extends Component {

  render () {
    const items = [
      { key: 'SEARCH', href: '' },
      { key: 'CONTACT US', href: 'contact' },
      { key: 'GETTING STARTED', href: 'getting-started' }
    ]

    return (
      <div className='MasterHeader'>
        <Navbar brand='&nbsp;SPM Explorer' right>
          {items.map(i => {
            const isActive = window.location.pathname.split('/')[1] === i.href
            return (
              <NavItem key={i.key} href={'/' + i.href} className={isActive ? 'active' : ''}>
                {i.key}
              </NavItem>
            )
          })}
        </Navbar>
      </div>
    )
  }
}

export default MasterHeader

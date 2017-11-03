import React, { Component } from 'react'

import { Row, Col } from 'react-materialize'

import CompCard from './CompCard'

class Front extends Component {
  constructor () {
    super()
    this.state = {
      sections: {
        'Most Stars': [],
        'Most Installs': [],
        'Most Recent': []
      }
    }

    const fetchUrl = 'http://localhost:3000/api/pkgs?limit=5&order='
    const fetchInfo = {
      'Most Stars': 'star_count',
      'Most Installs': 'install_count',
      'Most Recent': 'timestamp'
    }

    Object.keys(fetchInfo).forEach(name => {
      fetch(fetchUrl + fetchInfo[name] + '&order_type=desc')
        .then(res => res.json())
        .then(pkgs => {
          this.setState({
            sections: {
              ...this.state.sections,
              [name]: pkgs
            }
          })
        })
    })
  }
  render () {
    const secKeys = Object.keys(this.state.sections)
    const secUrl = {
      'Most Stars': '/most/stars',
      'Most Installs': '/most/installs',
      'Most Recent': '/most/recent'
    }
    return (
      <Row>
        {secKeys.map(sectionName => (
          <Col l={12 / secKeys.length} m={12} s={12} key={sectionName}>
            <h5><a href={secUrl[sectionName]}>{sectionName}</a></h5>
            {this.state.sections[sectionName].map((card, i) => <CompCard key={i} card={card} />)}
          </Col>
        ))}
      </Row>
    )
  }
}

export default Front

import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Jumbo from './Jumbo'
import CardListing from './CardListing'

class StatListing extends Component {
  constructor () {
    super()
    this.state = {
      results: []
    }
  }

  componentDidMount () {
    const stat = this.props.match.params.stat
    const fetchUrl = 'http://localhost:3000/api/spmpackages?filter[limit]=5&filter[order]='
    const fetchInfo = {
      'stars': 'star_count',
      'installs': 'install_count',
      'recent': 'timestamp'
    }
    fetch(fetchUrl + fetchInfo[stat])
      .then(res => res.json())
      .then(pkgs => {
        this.setState({ results: pkgs })
      })
  }
  
  render () {
    return (
      <div>
        <Jumbo>
          <h2>Most {this.props.match.params.stat} packages</h2>
        </Jumbo>
        <Row>
          <Col l={10} m={12} offset='l1 m0'>
            <CardListing title='All Packages' cards={this.state.results} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default StatListing

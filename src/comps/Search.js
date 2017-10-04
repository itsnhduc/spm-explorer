import React, { Component } from 'react'
import { Row, Col, Input } from 'react-materialize'
import Front from './Front'
import Jumbo from './Jumbo'
import CardListing from './CardListing'

class Search extends Component {
  constructor () {
    super()
    this.state = {
      query: '',
      results: []
    }
  }

  search (query) {
    this.setState({ query }, () => {
      const fetchUrl = 'http://localhost:3000/api/spmpackages?filter[limit]=10&filter[where][name][regexp]=spm-pkg-' + query
      fetch(fetchUrl)
        .then(res => res.json())
        .then(pkgs => {
          this.setState({ results: pkgs })
        })
    })
  }

  render () {
    return (
      <div>
        <Jumbo>
          <Input s={12} label='Search for packages' onChange={(event, query) => this.search(query)} />
        </Jumbo>
        <Row>
          <Col l={10} m={12} offset='l1 m0'>
            {this.state.query.length > 0 ? <CardListing title='Search Results' cards={this.state.results} /> : <Front />}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Search

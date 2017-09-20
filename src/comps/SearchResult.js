import React, { Component } from 'react'

import { Row, Col } from 'react-materialize'

import CompCard from './CompCard'

class SearchResult extends Component {
  render () {
    return (
      <Row>
        <Col m={12}>
          <h5>Search Result</h5>
        </Col>
        {this.props.results.map((card, i) => (
          <Col m={4}>
            <CompCard key={i} card={card} />
          </Col>
        ))}
      </Row>
    )
  }
}

export default SearchResult

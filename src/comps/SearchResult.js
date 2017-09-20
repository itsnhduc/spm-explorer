import React, { Component } from 'react'

import { Row, Col } from 'react-materialize'

import CompCard from './CompCard'

class SearchResult extends Component {
  render () {
    return (
      <div>
        <h4>Search Result</h4>
        <Row>
          {this.props.results.map((card, i) => (
            <Col m={4}>
              <CompCard card={card} />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default SearchResult

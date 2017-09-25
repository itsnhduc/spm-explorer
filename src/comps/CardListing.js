import React, { Component } from 'react'

import { Row, Col } from 'react-materialize'

import CompCard from './CompCard'

class CardListing extends Component {
  render () {
    return (
      <Row>
        <Col m={12}>
          <h5>{this.props.title}</h5>
          {this.props.cards.length ? '' : 'No packages found'}
        </Col>
        {this.props.cards.map((card, i) => (
          <Col key={i} m={4}>
            <CompCard card={card} />
          </Col>
        ))}
      </Row>
    )
  }
}

export default CardListing

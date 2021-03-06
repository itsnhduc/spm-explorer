import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import CompCard from './CompCard'

class CardListing extends Component {
  render () {
    return (
      <div>
        <div>
          <h4>{this.props.title}</h4>
          {this.props.cards.length ? '' : 'No packages found'}
        </div>
        <Row>
          {this.props.cards.map((card, i) => (
            <Col key={i} m={4}>
              <CompCard card={card} />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default CardListing

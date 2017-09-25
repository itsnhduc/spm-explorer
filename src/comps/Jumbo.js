import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'

class Jumbo extends Component {
  render () {
    return (
      <Row className="center-align white-text valign-wrapper jumbo">
        <Col m={6} s={12} offset='m3 s0'>
          {this.props.children}
        </Col>
      </Row>
    )
  }
}

export default Jumbo

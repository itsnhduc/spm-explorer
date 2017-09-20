import React, { Component } from 'react'

import { Row, Col, Card, Icon } from 'react-materialize'

class CompCard extends Component {
  render () {
    return (
      <a href={'/' + this.props.card.name}>
        <Card title={this.props.card.name}>
          <Row>
            <Col m={8}>{this.props.card.description}</Col>
            <Col m={4} className="right-align">
              <Icon>file_download</Icon> {this.props.card.star_count}&nbsp;
              <Icon>star</Icon> {this.props.card.install_count}
            </Col>
          </Row>
        </Card>
      </a>
    )
  }
}

export default CompCard

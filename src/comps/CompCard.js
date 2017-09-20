import React, { Component } from 'react'

import { Row, Col, Card, Icon, Button } from 'react-materialize'

class CompCard extends Component {
  render () {
    return (
      <a href={'/' + this.props.card.name}>
        <Card title={this.props.card.name} actions={[
          <Row>
            <Col m={6} s={12}>
              <Button waves='light'>{this.props.card.star_count}<Icon left>cloud_download</Icon></Button>
            </Col>
            <Col m={6} s={12}>
              <Button waves='light'>{this.props.card.install_count}<Icon left>star</Icon></Button>
            </Col>
          </Row>
        ]}>
          {this.props.card.description}
        </Card>
      </a>
    )
  }
}

export default CompCard

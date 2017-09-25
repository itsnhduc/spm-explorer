import React, { Component } from 'react'

import { Row, Col, Card, Icon, Button } from 'react-materialize'

class CompCard extends Component {
  render () {
    return (
      <Card title={<a href={'/package/' + this.props.card.name}><strong>{this.props.card.name + '@' + this.props.card.version}</strong></a>} actions={[
        <Row key={1}>
          <Col m={6} s={12}>
            <Button waves='light'>{this.props.card.star_count}<Icon left>cloud_download</Icon></Button>
          </Col>
          <Col m={6} s={12}>
            <Button waves='light'>{this.props.card.install_count}<Icon left>star</Icon></Button>
          </Col>
        </Row>
      ]}>
        <p>by <a href={'/user/' + this.props.card.author}><strong>{this.props.card.author}</strong></a></p>
        {this.props.card.description}
      </Card>
    )
  }
}

export default CompCard

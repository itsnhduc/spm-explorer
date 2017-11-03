import React, { Component } from 'react'

import { Card } from 'react-materialize'

class CompCard extends Component {
  render () {
    return (
      <Card title={<a href={'/package/' + this.props.card.name}><strong>{this.props.card.name.replace('spm-pkg-', '') + '@' + this.props.card.commits[0].version}</strong></a>}>
        <p>by <a href={'/user/' + this.props.card.author}><strong>{this.props.card.author}</strong></a></p>
        {this.props.card.description}
      </Card>
    )
  }
}

export default CompCard

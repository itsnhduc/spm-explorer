import React, { Component } from 'react'
import { Card } from 'react-materialize'
import './CompCard.css'

class CompCard extends Component {
  render () {
    const title = this.props.card.name.replace('spm-pkg-', '') + '@' + this.props.card.commits[0].version
    return (
      <Card title={
        <span>
          <a href={'/package/' + this.props.card.name}>
            <strong>{title}</strong>
          </a>
          <span className='new badge' data-badge-caption=''>{this.props.card.language}</span>
        </span>
      }>
        <p>by <a href={'/user/' + this.props.card.author}><strong>{this.props.card.author}</strong></a></p>
        {this.props.card.description}
      </Card>
    )
  }
}

export default CompCard

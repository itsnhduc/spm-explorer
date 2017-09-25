import React, { Component } from 'react'
import CardListing from './CardListing'
import Jumbo from './Jumbo'

class User extends Component {
  constructor () {
    super()
    this.state = {
      pkgs: []
    }

    const fetchUrl = 'http://localhost:3000/api/spmpackages?filter[where][author]=itsnhduc'
    fetch(fetchUrl)
      .then(res => res.json())
      .then(pkgs => {
        this.setState({ pkgs })
      })
  }

  render () {
    return (
      <div>
        <Jumbo>
          <h2>{this.props.match.params.name}</h2>
        </Jumbo>
        <CardListing title="Published packages" cards={this.state.pkgs} />
      </div>
    )
  }
}

export default User

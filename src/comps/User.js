import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import CardListing from './CardListing'
import Jumbo from './Jumbo'

class User extends Component {
  constructor () {
    super()
    this.state = {
      pkgs: []
    }
  }

  componentDidMount () {
    const fetchUrl = 'http://localhost:3000/api/pkgs?author=' + this.props.match.params.name
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
        <Row>
          <Col l={10} m={12} offset="l1 m0">
            <CardListing title="Published packages" cards={this.state.pkgs} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default User

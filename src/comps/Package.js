import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Jumbo from './Jumbo'

class Package extends Component {
  constructor () {
    super()
    this.state = {
      pkg: []
    }
  }

  componentDidMount () {
    const fetchUrl = 'http://localhost:3000/api/spmpackages?filter[where][name]=' + this.props.match.params.name
    fetch(fetchUrl)
      .then(res => res.json())
      .then(pkgs => {
        this.setState({ pkg: pkgs[0] })
        console.log(this.state.pkg)
      })
  }

  render () {
    return (
      <div>
        <Jumbo>
          <h2>{this.state.pkg.name}</h2>
          <h4>by <a href={'/user/' + this.state.pkg.author}><strong>{this.state.pkg.author}</strong></a></h4>
        </Jumbo>
        <Row>
          <Col l={10} m={12} offset="l1 m0">
            <section>
              <h5>Version</h5>
              <p>{this.state.pkg.version}</p>
            </section>
            <section>
              <h5>Description</h5>
              <p>{this.state.pkg.description}</p>
            </section>
            <section>
              <h5>Stats</h5>
              <p>Installs: {this.state.pkg.install_count}</p>
              <p>Stars: {this.state.pkg.star_count}</p>
            </section>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Package

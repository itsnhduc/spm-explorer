import React, { Component } from 'react'

import { Row, Col, Input } from 'react-materialize'

class SearchForm extends Component {
  constructor () {
    super()
    this.state = {
      query: ''
    }
  }

  handleChange (event, query) {
    this.props.change(query)
  }

  render () {
    return (
      <Row className='center-align grey darken-3 white-text'>
        <Col m={6} s={12} offset='m3 s0'>
          <h4>SPM Explorer</h4>
          <Input s={12} label='Search for packages' onChange={this.handleChange.bind(this)} />
        </Col>
      </Row>
    )
  }
}

export default SearchForm

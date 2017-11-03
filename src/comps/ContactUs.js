import React, { Component } from 'react'
import { Row, Col, Card, Input, Button } from 'react-materialize'
import Jumbo from './Jumbo'

class ContactUs extends Component {
  render () {
    return (
      <div>
        <Jumbo>
          <h2>Contact Us</h2>
        </Jumbo>
        <Row>
          <Col l={8} m={12} offset='l2 m0'>
            <Card>
              <Row>
                <Col m={6} s={12}>
                  <h4>Submit a Feedback</h4>
                  <Row>
                    <Input type='text' s={12} label='Title' />
                    <Input type='textarea' s={12} label='Content' />
                    <Button type='submit' waves='light'>Submit</Button>
                  </Row>
                </Col>
                <Col m={6} s={12}>
                  <h4>Contact Us</h4>
                  <p>(emails here)</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ContactUs

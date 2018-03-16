import React, { Component } from 'react'
import { Row, Col, Card } from 'react-materialize'
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
              <Row className='center-align'>
                <Col m={12} s={12}>
                  <h4>Personnel</h4>
                  <p>
                    <a href="mailto:DUC014@e.ntu.edu.sg?Subject=SPM%20Feedback" target="_top">
                      Duc Nguyen
                    </a>
                  </p>
                  <p>Kevin Jones (supervisor)</p>
                  <h4>Faculty</h4>
                  <p>School of Computer Science Engineering</p>
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

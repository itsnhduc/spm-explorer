import React, { Component } from 'react'
import { Row, Col, Card, Table } from 'react-materialize'
import FontAwesome from 'react-fontawesome'
import Jumbo from './Jumbo'

class GettingStarted extends Component {
  render () {
    const downloadInfo = {
      win: { name: 'Windows', icon: 'windows', link: '#' },
      mac: { name: 'macOS', icon: 'apple', link: '#' },
      linux: { name: 'Linux', icon: 'linux', link: '#' },
    }

    return (
      <div>
        <Jumbo>
          <h2>Getting Started</h2>
        </Jumbo>
        <Row>
          <Col l={8} m={12} offset='l2 m0'>
            <Card>
              <section>
                <h4>Installing SPM</h4>
                <Row className='center-align'>
                  {Object.keys(downloadInfo).map(platform => (
                    <Col key={platform} m={4} s={12}>
                      <a href={downloadInfo[platform].link}>
                        <Card>
                          <FontAwesome name={downloadInfo[platform].icon} size='3x' />
                          <h5>{downloadInfo[platform].name}</h5>
                        </Card>
                      </a>
                    </Col>
                  ))}
                </Row>
              </section>
              <section>
                <h4>Initializing SPM</h4>
                <pre><code>$ spm init</code></pre>
              </section>
              <section>
                <h4>Package actions</h4>
                <h5>Syntax</h5>
                <pre><code>$ spm [action] [package]</code></pre>
                <h5>Actions</h5>
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>add</td>
                      <td>Add a package with the specified name</td>
                    </tr>
                    <tr>
                      <td>remove</td>
                      <td>Remove an installed package with the specified name</td>
                    </tr>
                    <tr>
                      <td>star</td>
                      <td>Add a star to an installed package with the specified name</td>
                    </tr>
                    <tr>
                      <td>search</td>
                      <td>Search for a package with the specified name</td>
                    </tr>
                  </tbody>
                </Table>
              </section>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default GettingStarted

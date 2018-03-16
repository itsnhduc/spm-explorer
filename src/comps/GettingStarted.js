import React, { Component } from 'react'
import { Row, Col, Card, Table } from 'react-materialize'
import FontAwesome from 'react-fontawesome'
import Jumbo from './Jumbo'

class GettingStarted extends Component {
  render () {
    const downloadInfo = {
      win: { name: 'Windows', icon: 'windows', link: '#' },
      mac: { name: 'Mac OS', icon: 'apple', link: '#' },
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
                          <h3>{downloadInfo[platform].name}</h3>
                        </Card>
                      </a>
                    </Col>
                  ))}
                </Row>
              </section>
              <section>
                <h4>Management Files and Directories</h4>
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><pre><code>{'spm.json'}</code></pre></td>
                      <td>File</td>
                      <td>Record installed dependencies' name and version</td>
                    </tr>
                    <tr>
                      <td><pre><code>{'.spm'}</code></pre></td>
                      <td>Directory</td>
                      <td>Store installed dependencies</td>
                    </tr>
                  </tbody>
                </Table>
              </section>
              <section>
                <h4>Usage</h4>
                <Table>
                  <thead>
                    <tr>
                      <th>Command</th>
                      <th>Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td><pre><code>{'$ spm init'}</code></pre></td>
                      <td>Initialize SPM</td>
                    </tr>
                    <tr>
                      <td><pre><code>{'$ spm add'}</code></pre></td>
                      <td>Install all packages listed in spm.json</td>
                    </tr>
                    <tr>
                      <td><pre><code>{'$ spm add <name>[@<version>]'}</code></pre></td>
                      <td>Install a new package and add to spm.json</td>
                    </tr>
                    <tr>
                      <td><pre><code>{'$ spm remove <name>'}</code></pre></td>
                      <td>Remove a package listed in spm.json</td>
                    </tr>
                    <tr>
                      <td><pre><code>{'$ spm find [--author] <name>'}</code></pre></td>
                      <td>Find packages</td>
                    </tr>
                    <tr>
                      <td><pre><code>{'$ spm list'}</code></pre></td>
                      <td>List all packages in spm.json</td>
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

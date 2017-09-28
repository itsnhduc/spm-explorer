import React, { Component } from 'react'
import { Row, Col, CardPanel } from 'react-materialize'
import clipboard from 'clipboard-js'
import ReactMarkdown from 'react-markdown'
import Jumbo from './Jumbo'

class Package extends Component {
  constructor () {
    super()
    this.state = {
      pkg: [],
      readme: 'Loading README content...'
    }
  }

  componentDidMount () {
    const pkgInfoUrl = 'http://localhost:3000/api/spmpackages?filter[where][name]=' + this.props.match.params.name
    fetch(pkgInfoUrl)
      .then(res => res.json())
      .then(pkgs => {
        this.setState({ pkg: pkgs[0] })
      })
      .then(() => {
        const readmeInfoUrl = 'https://api.github.com/repos/' + this.state.pkg.author + '/' + this.state.pkg.name + '/readme'
        fetch(readmeInfoUrl)
          .then(res => res.json())
          .then(readmeInfo => {
            this.setState({ readme: atob(readmeInfo.content) })
          })
      })

  }

  copyCmd() {
    clipboard.copy('spm install ' + this.state.pkg.name.replace('spm-pkg-', ''))
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
            <Row>
              <Col l={3} m={12}>
                <CardPanel className="pkg-left-info">
                  <section>
                    <h5>Version</h5>
                    <p>{this.state.pkg.version}</p>
                  </section>
                  <section>
                    <h5>Standard Installation</h5>
                    <pre>
                      <code>
                        $ spm install {this.state.pkg.name ? this.state.pkg.name.replace('spm-pkg-', '') : ''}
                        <a className="copy-anchor" href="#" onClick={this.copyCmd.bind(this)}>Copy</a>
                      </code>
                    </pre>
                  </section>
                  <section>
                    <h5>Description</h5>
                    <p>{this.state.pkg.description}</p>
                  </section>
                </CardPanel>
              </Col>
              <Col l={9} m={12}>
                <CardPanel>
                  <ReactMarkdown source={this.state.readme}/>
                </CardPanel>
              </Col>
            </Row>
            
          </Col>
        </Row>
      </div>
    )
  }
}

export default Package

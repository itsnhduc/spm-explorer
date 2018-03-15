import React, { Component } from 'react'
import { Row, Col, Card, Button, Icon, ProgressBar, Collection, CollectionItem } from 'react-materialize'
import clipboard from 'clipboard-js'
import ReactMarkdown from 'react-markdown'
import Jumbo from './Jumbo'
import './Package.css'

class Package extends Component {
  constructor () {
    super()
    this.state = {
      pkg: [],
      readme: ''
    }
  }

  componentDidMount () {
    const pkgInfoUrl = 'http://localhost:3000/api/pkgs?name=' + this.props.match.params.name
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

  copyCmd () {
    clipboard.copy('spm install ' + this.state.pkg.name.replace('spm-pkg-', ''))
  }

  render () {
    return (
      <div>
        <Jumbo>
          <h2>{this.state.pkg.name ? this.state.pkg.name.replace('spm-pkg-', '') : ''}</h2>
          <h4>by <a href={'/user/' + this.state.pkg.author}><strong>{this.state.pkg.author}</strong></a></h4>
        </Jumbo>
        <Row>
          <Col l={10} m={12} offset='l1 m0'>
            <Row>
              <Col l={4} m={12}>
                <Card className='pkg-left-info'>
                  <section>
                    <h5>Versions</h5>
                    <Collection>
                      {this.state.pkg.commits && this.state.pkg.commits.map(c => <CollectionItem key={c.version}>{c.version}<Icon left>chevron_right</Icon></CollectionItem>)}
                    </Collection>
                  </section>
                  <section>
                    <h5>Standard Installation</h5>
                    <pre className='bordered'>
                      <code>
                        $ spm install {this.state.pkg.name ? this.state.pkg.name.replace('spm-pkg-', '') : ''}[@&lt;version&gt;]
                        <a className='copy-anchor' href='#' onClick={this.copyCmd.bind(this)}>Copy</a>
                      </code>
                    </pre>
                  </section>
                  <section>
                    <h5>Description</h5>
                    <p>{this.state.pkg.description}</p>
                  </section>
                  <section>
                    <h5>Documentation</h5>
                    <a href={this.state.pkg.docs_url} target='_blank'>
                      <Button waves='light'>Go to documentation <Icon right>open_in_new</Icon></Button>
                    </a>
                  </section>
                  <section>
                    <h5>Actions</h5>
                    <a href={this.state.pkg.tarball_url}>
                      <Button waves='light'>Download Latest ({this.state.pkg.install_count})</Button>
                    </a>
                  </section>
                </Card>
              </Col>
              <Col l={8} m={12}>
                <Card>{this.state.readme.length ? <ReactMarkdown source={this.state.readme}/> : <ProgressBar />}</Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Package

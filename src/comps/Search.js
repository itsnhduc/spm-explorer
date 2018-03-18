import React, { Component } from 'react'
import { Row, Col, Input } from 'react-materialize'
import debounce from 'debounce'
import QueryString from 'query-string'
import Front from './Front'
import Jumbo from './Jumbo'
import CardListing from './CardListing'

const ALL_LANG_VAL = 'All'
const LIMIT_OPTIONS = [5, 10, 15]

class Search extends Component {
  constructor () {
    super()
    this.state = {
      query: '',
      lim: LIMIT_OPTIONS[0],
      lang: ALL_LANG_VAL,
      allLang: [],
      results: []
    }
    this.search = debounce(this.search, 300)
  }

  componentDidMount () {
    const fetchLangUrl = 'http://localhost:3000/api/pkgs/attr/language'
    fetch(fetchLangUrl)
      .then(res => res.json())
      .then(allLang => {
        this.setState({ allLang })
      })
  }

  handleLimChange (e) {
    this.setState({
      lim: e.target.value
    }, () => {
      if (this.state.query.length > 0) {
        this.search(this.state.query)
      }
    })
  }

  handleLangChange (e) {
    this.setState({
      lang: e.target.value
    }, () => {
      if (this.state.query.length > 0) {
        this.search(this.state.query)
      }
    })
  }

  search (query) {
    this.setState({ query }, () => {
      if (query.length > 0) {
        const queries = QueryString.stringify({
          name_regex: query,
          limit: this.state.lim,
          language: this.state.lang !== ALL_LANG_VAL ? this.state.lang : undefined
        })
        const fetchUrl = 'http://localhost:3000/api/pkgs?' + queries
        fetch(fetchUrl)
          .then(res => res.json())
          .then(pkgs => {
            this.setState({ results: pkgs })
          })
      } else {
        this.setState({ results: [] })
      }
    })
  }

  render () {
    return (
      <div>
        <Jumbo>
          <Row>
            <Input s={7} label='Search for packages (regex supported)' onChange={(event, query) => this.search(query)} />
            {this.state.allLang.length === 0 ? '' : (
              <Input s={3} type='select' label='Language' defaultValue='1' onChange={this.handleLangChange.bind(this)}>
                <option value={ALL_LANG_VAL}>All</option>
                {this.state.allLang.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </Input>
            )}
            <Input s={2} type='select' label='Limit' defaultValue='1' onChange={this.handleLimChange.bind(this)}>
              {LIMIT_OPTIONS.map(lim => (
                <option key={lim} value={lim}>{lim}</option>
              ))}
            </Input>
          </Row>
        </Jumbo>
        <Row>
          <Col l={10} m={12} offset='l1 m0'>
            {this.state.query.length > 0 ? <CardListing title='Search Results' cards={this.state.results} /> : <Front />}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Search

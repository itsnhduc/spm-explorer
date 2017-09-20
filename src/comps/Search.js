import React, { Component } from 'react'

import Front from './Front'
import SearchForm from './SearchForm'
import SearchResult from './SearchResult'

class Search extends Component {
  constructor () {
    super()
    this.state = {
      query: '',
      results: []
    }
  }

  search (query) {
    this.setState({ query }, () => {
      const fetchUrl = 'http://localhost:3000/api/spmpackages?filter[limit]=10&filter[where][name][regexp]=spm-pkg-' + query
      fetch(fetchUrl)
        .then(res => res.json())
        .then(pkgs => {
          this.setState({ results: pkgs })
        })
    })
  }

  render () {
    return (
      <div>
        <SearchForm change={this.search.bind(this)} />
        {this.state.query.length > 0 ? <SearchResult results={this.state.results} /> : <Front />}
      </div>
    )
  }
}

export default Search

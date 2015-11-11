import React     from 'react'
import _         from 'lodash'

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

function match(value, item) {
  const regexp = new RegExp(escapeRegExp(value), 'i')
  return regexp.test(item.name) || regexp.test(item.phone.replace(/ /g, ''))
}

function isNumber(number) {
  return /^(\+?255\-?|0)[0123456789]{9}$/.test(number.replace(/ /g, ''))
}

class DefaultResults extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { results } = this.props
    return (
      <ul style={{position: 'absolute', background: '#fff', border: '1px solid #ddd', width: '200px', listStyle: 'none', margin: 0, padding: 0, zIndex: 4}}>
        {results.map((result, key) => {
          return (
            <li key={key}>
              <span style={{float: 'right'}}>
                {result.phone}
              </span>
              <a href='#' onClick={() => this.props.onSelectionChanged(result)}>
                {result.name} 
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}

class PhoneLookup extends React.Component {
  constructor(props) {
    let entries = {}
    props.entries.forEach(item => { entries[item.phone] = item })
    super({
      entries, ...props
    })
    this.state = {
      value    : '',
      results  : [],
      entry    : null,
      isNumber : false
    }
  }
  handleChange(event) {
    const { entries } = this.props
    const value = event.target.value
    const results = value ? _.pick(entries, item => match(value, item)) : {}
    this.setState({ 
      value, 
      results, 
      isNumber : isNumber(value),
      entry    : null 
    })
  }
  selectEntry(entry) {
    this.setState({
      value    : entry ? entry.name : '',
      results  : [],
      isNumber : false,
      entry
    })
  }
  reset() {
    this.selectEntry()
  }
  render() {
    const { value, results, entry, isNumber } = this.state
    const { maxResults, resultsComponent } = this.props
    const inputStyle = !!entry ? {backgroundColor: '#fff4a8'} : !!isNumber ? {backgroundColor: '#a8f4a8'} : {}
    const keys = _.keysIn(results)
    const Results = resultsComponent
    return (
      <div>
        <input 
          style    = {inputStyle}
          type     = 'text'
          value    = {value}
          onChange = {this.handleChange.bind(this)}
        />
        {(!!entry || isNumber) && (
          <span>
            <button onClick={this.reset.bind(this)}>
              Reset
            </button>
            <button>
              Call
            </button>
          </span>
        )}
        {!!keys.length && (
          <Results 
            onSelectionChanged = {this.selectEntry.bind(this)}
            results            = {keys.slice(0, maxResults ? maxResults : -1).map(key => results[key])} />
        )}
      </div>
    )
  }
}

PhoneLookup.defaultProps = {
  maxResults       : 10,
  entries          : [],
  resultsComponent : DefaultResults
}

export default PhoneLookup

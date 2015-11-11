import React     from 'react'
import _         from 'lodash'

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

function match(value, item) {
  const regexp = new RegExp(escapeRegExp(value), 'i')
  return regexp.test(item.name) || regexp.test(item.phone.replace(/ /g, ''))
}

class DefaultResults extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { results, onSelectionChanged } = this.props
    return (
      <ul style={{position: 'absolute', background: '#fff', border: '1px solid #ddd', width: '200px', listStyle: 'none', margin: 0, padding: 0, zIndex: 4}}>
        {results.map((result, key) => {
          return (
            <li key={key}>
              <span style={{float: 'right'}}>
                {result.phone}
              </span>
              <a href='#' onClick={() => onSelectionChanged(result)}>
                {result.name} 
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}

class DefaultInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { entry, value, onValueChange, onReset, onCallNumber, isValidNumber, currentEntry } = this.props
    const inputStyle = !!entry ? {
      backgroundColor: '#fff4a8'
    } : isValidNumber ? {
      backgroundColor: '#a8f4a8'
    } : {}
    return (
      <div>
        <input 
          type     = 'text'
          style    = {inputStyle}
          value    = {value}
          onChange = {onValueChange}
        />
        {(!!entry || isValidNumber) && (
          <span>
            <button onClick={onReset}>
              Reset
            </button>
            <button onClick={() => onCallNumber(entry.phone)}>
              Call
            </button>
          </span>
        )}
      </div>
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
    const { entries, regexp } = this.props
    const value = event.target ? event.target.value : event
    const results = value ? _.pick(entries, item => match(value, item)) : {}
    this.setState({ 
      value, 
      results, 
      isNumber : regexp.test(value.replace(/ /g, '')),
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
    const { maxResults, resultsComponent, inputComponent, onCallNumber } = this.props
    const keys = _.keysIn(results)
    const Results = resultsComponent
    const Input = inputComponent
    return (
      <div>
        <Input 
          value         = {value}
          entry         = {entry}
          isValidNumber = {isNumber}
          onReset       = {this.reset.bind(this)}
          onCallNumber  = {onCallNumber}
          onValueChange = {this.handleChange.bind(this)} />
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
  resultsComponent : DefaultResults,
  inputComponent   : DefaultInput,
  regexp           : /^(\+?[0-9]{1,3}\-?|0)[0123456789]{9}$/,
  onCallNumber     : number => { alert(`Call number ${number}`) } 
}

export default PhoneLookup

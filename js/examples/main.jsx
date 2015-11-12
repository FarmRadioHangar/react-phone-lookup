import React       from 'react'
import ReactDOM    from 'react-dom'
import PhoneLookup from '../../modules/PhoneLookup'

import entries     from '../../testdata/entries'
import randomize   from '../../testdata/randomize'

class Results extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { results, onSelectionChange } = this.props
    return (
      <div 
        className = 'list-group' 
        style     = {{marginTop: '-1px', width: '100%', margin: 0, padding: 0, zIndex: 4}}>
        {results.map((result, key) => {
          return (
            <a 
              key       = {key} 
              className = 'list-group-item' 
              href      = '#' 
              onClick   = {() => onSelectionChange(result)}>
              <h4 className='list-group-item-heading'>{result.name}</h4>
              <p className='list-group-item-text'>{result.phone}</p>
            </a>
          )
        })}
      </div>
    )
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { 
      hasEntry, 
      value, 
      onChange, 
      onReset, 
      onCallNumber, 
      isValidNumber
    } = this.props
    const inputStyle = hasEntry ? {
      backgroundColor: '#fff4a8'
    } : isValidNumber ? {
      backgroundColor: '#a8f4a8'
    } : {}
    return (
      <div>
        <div className='input-group'>
          <input 
            className = 'form-control'
            type      = 'text'
            style     = {inputStyle}
            value     = {value}
            onChange  = {onChange} />
          <div className='input-group-btn'>
            <button 
              onClick   = {onReset} 
              type      = 'button' 
              className = 'btn btn-default'>
              <span className='glyphicon glyphicon-remove'></span>
            </button>
          </div>
        </div>
        {(hasEntry || isValidNumber) && (
          <div style={{textAlign: 'center', margin: '20px'}}>
            <button 
              disabled  = {!hasEntry && !isValidNumber}
              onClick   = {onCallNumber} 
              type      = 'button' 
              style     = {{borderRadius: '22px', minWidth: '130px'}}
              className = 'btn btn-default btn-success btn-lg'>
              <span style={{top: '2px'}} className='glyphicon glyphicon-earphone'></span>&nbsp;Call
            </button>
          </div>
        )}
      </div>
    )
  }
}

// Add some random numbers to phone book entries
const data = entries.map(entry => ({ ...entry, phone : randomize() }))

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <PhoneLookup 
          resultsComponent = {Results}
          inputComponent   = {Input}
          maxResults       = {8}
          onCallNumber     = {number => { alert(`Call number ${number}`) }}
          entries          = {data} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)

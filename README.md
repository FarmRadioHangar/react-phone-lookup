# FRH React Phone Lookup

React component for looking up phone book entries by name or number.

## Demo

Try the demo [here](http://farmradiohangar.github.io/react-phone-lookup/public/examples/).

## Installation

## Usage

```js
import React       from 'react'
import ReactDOM    from 'react-dom'
import PhoneLookup from 'frh-react-phone-lookup'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <PhoneLookup entries ={[
        {
          name  : 'Danae Rothstein',
          phone : '+1-202-555-0125'
        },
        {
          name  : 'Leslee Bunnell',
          phone : '+1-202-555-0145'
        },
        {
          name  : 'Voncile Reams',
          phone : '202-555-0121'
        }
      ]}/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)
```

## Props

| Property         | Type                     | Description   | Default      | 
| ---------------- | ------------------------ | ------------- | ------------ |
| maxResults       | Number                   | The maximum number of items visible in the list of results. | `10`           |
| entries          | Array                    | An array of phone book entries. Each object in this array must have a `name`, and a `phone` property. | `[]`           |
| resultsComponent | Component                | The component responsible for rendering the list of results. | See 'Customization' |
| inputComponent   | Component                | The input field component.  | See 'Customization' |
| regexp           | RegExp                   | The regular expression used to determine when the user input is a valid phone number. | `/^(\+?[0-9]{1,3}\-?|0)[0123456789]{9}$/` |
| onCallNumber     | Function                 | A callback that runs when the user clicks the 'Call' button. | `number => { console.log(number) }` | 

Technically, all props are optional, but you should at least provide your own `entries` array and `onCallNumber` hook for any practical use.

#### Format of the entries array

```
[
  {
    name  : string
    phone : string 
  }
]
```

## Customization

### Results 

#### Default implementation

```
class DefaultResults extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { results, onSelectionChanged } = this.props
    return (
      <ul style={ulStyles}>
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
```

### Input

#### Default implementation

```js
class DefaultInput extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { hasEntry, value, onValueChange, onReset, onCallNumber, isValidNumber } = this.props
    const inputStyle = hasEntry ? {
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
        {(hasEntry || isValidNumber) && (
          <span>
            <button onClick={onReset}>Reset</button>
            <button onClick={onCallNumber}>Call</button>
          </span>
        )}
      </div>
    )
  }
}
```

### Example

## Contribute

* GitHub: https://github.com/FarmRadioHangar/react-phone-lookup
* Issue tracker: https://github.com/FarmRadioHangar/react-phone-lookup/issues

## License

BSD

# FRH React Phone Lookup

React component for looking up phone book entries by name or number.

## Demo

http://farmradiohangar.github.io/react-phone-lookup/public/examples/

## Installation

## Usage

```js
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

Technically, all props are optional, but you should at least provide the `entries` array and `onCallNumber` hook for things to make sense.

### Format of the entries array

```
[
  {
    name  : string
    phone : string 
  }
]
```

## Customization

## Contribute

* GitHub: https://github.com/FarmRadioHangar/react-phone-lookup
* Issue tracker: https://github.com/FarmRadioHangar/react-phone-lookup/issues

## License

BSD

# FRH React Phone Lookup

React component for looking up phone book entries by name or number.

## Demo

http://farmradiohangar.github.io/react-phone-lookup/public/examples/

## Installation

## Usage

## Props

| Property         | Type                     | Description   | Default      | 
| ---------------- | ------------------------ | ------------- | ------------ |
| maxResults       | Number                   |               | `10`           |
| entries          | Array                    |               | `[]`           |
| resultsComponent | Component                |               |              |
| inputComponent   | Component                |               |              |
| regexp           | RegExp                   | The regular expression used to determine when the user input is a valid phone number. | `/^(\+?[0-9]{1,3}\-?|0)[0123456789]{9}$/` |
| onCallNumber     | Function                 | | `(number) => { console.log(number)` | 

### Format of the entries array

Pass an array of phone book entries to the `entries` prop. Each object in this array must have a 

* `name`, and a 
* `phone` 

property. 

```
[
  {
    name  : string
    phone : string | number
  }
]
```

## Contribute

## License

BSD

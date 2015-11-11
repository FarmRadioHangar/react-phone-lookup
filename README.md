# react-phone-lookup

React component for looking up phone book entries by name or number.

## Demo

http://farmradiohangar.github.io/react-phone-lookup/public/examples/

## Props

| Property         | Type                     | Description   | Default      | 
| ---------------- | ------------------------ | ------------- | ------------ |
| maxResults       | Number                   |               | `10`           |
| entries          | Array                    |               | `[]`           |
| resultsComponent | Component                |               |              |
| inputComponent   | Component                |               |              |
| regexp           | RegExp                   |               | `/^(\+?[0-9]{1,3}\-?|0)[0123456789]{9}$/` |
| onCallNumber     | Function                 |               | `(number) => { alert('Call number ' + number) }` | 


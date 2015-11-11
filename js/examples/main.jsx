import React       from 'react'
import ReactDOM    from 'react-dom'
import PhoneLookup from '../../modules/PhoneLookup'

import entries     from '../../testdata/entries'
import randomize   from '../../testdata/randomize'

// Add some random phone numbers to phone book entries
const data = entries.map(entry => ({ ...entry, phone : randomize() }))

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <PhoneLookup entries={data} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)

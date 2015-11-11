import React       from 'react'
import ReactDOM    from 'react-dom'
import PhoneLookup from '../../modules/PhoneLookup'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
)

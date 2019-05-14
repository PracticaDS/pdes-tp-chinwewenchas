import React, { Component } from 'react'
import './App.css'
import { storeInstance } from './store'
import { Provider } from 'react-redux'
import Factory from './components/factory/Factory'

class App extends Component {
  constructor (props) {
    super(props)
    this.user = {
      ganancias: 0
    }
  }

  render () {
    return (
      <Provider store={storeInstance}>
        <Factory />
      </Provider>
    )
  }
}

export default App

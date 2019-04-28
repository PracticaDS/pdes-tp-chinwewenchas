import React, { Component } from 'react'
import './App.css'
import { Board } from './components/board/Board'
import { storeInstance } from './store'
import { Provider } from 'react-redux'

class App extends Component {
  constructor (props) {
    super(props)
    this.user = {
      ganancias: 0
    }
  }

  render () {
    return (
      <Provider store={    storeInstance}>
        <div className =   "App">
          <header className ="App-header">
            <h4>
              Ganancias: ${ this.user.ganancias }</h4>
          </header>
          <div>
            <Board columns={ 12 } rows={ 11 }/>
          </div>
        </div>
      </Provider>
    )
  }
}

export default App

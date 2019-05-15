import React, { Component } from 'react'
import './App.css'
import { ToolBox } from './components/toolbox/ToolBox'
import { storeInstance } from './store'
import { Provider } from 'react-redux'
import Factory from './components/factory/Factory'

class App extends Component {
  constructor (props) {
    super(props)
    this.user = {
      incomes: 0
    }
  }

  render () {
    return (
      <Provider store={storeInstance}>
        <div className="App">
          <div className="incomes-container">
            Ganancias <span className="incomes">${this.user.incomes}</span>
          </div>
          <ToolBox />
          <Factory />
        </div>
      </Provider>
    )
  }
}

export default App

import React, { Component } from 'react'
import './App.css'
import { Board } from './components/board/Board'
import { ToolBox } from './components/toolbox/ToolBox'
import { storeInstance } from './store'
import { Provider } from 'react-redux'

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
          <Board columns={12} rows={11} />
        </div>
      </Provider>
    )
  }
}

export default App

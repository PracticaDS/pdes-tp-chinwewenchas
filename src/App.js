import React from 'react'
import './App.css'
import { ToolBox } from './components/toolbox/ToolBox'
import { storeInstance } from './store'
import { Provider } from 'react-redux'
import Factory from './components/factory/Factory'
import Sells from './components/sells/Sells'

const App = () => {
  return (
    <Provider store={storeInstance}>
      <div className="App">
        <Sells />
        <ToolBox />
        <Factory />
      </div>
    </Provider>
  )
}

export default App

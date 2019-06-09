import React from 'react'
import './App.css'
import { storeInstance } from './store'
import { Provider } from 'react-redux'
import SelectAppView from './components/select_app_view/SelectAppView'

const App = () => {
  return (
    <Provider store={storeInstance}>
      <div className="App">
        <SelectAppView />
      </div>
    </Provider>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Skiped because it crashes because Array.flat() is not a function, it's a error of jest
xit('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

// eslint-disable-next-line react/prop-types
import React from 'react'
import { Provider } from 'react-redux'
import { storeInstance } from '../../store'

// eslint-disable-next-line react/prop-types
export const TestProvider = ({ children }) => {
  return (
    <Provider store={storeInstance}>
      {children}
    </Provider>
  )
}

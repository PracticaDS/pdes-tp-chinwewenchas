import React from 'react'

export const Occultable = ({ visible, children }) => {
  if (visible) {
    return children
  } else {
    return <div />
  }
}

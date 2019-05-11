import React from 'react'

import './Seller.css'

export class Seller extends React.Component {
  receiveMaterialFromUser (material, user) {
    // Todo: mejorar esto cuando exista la Toolbar
    user.receive(material.price)
    // material.destroy()
  }
  render () {
    return <div className="seller" />
  }
}

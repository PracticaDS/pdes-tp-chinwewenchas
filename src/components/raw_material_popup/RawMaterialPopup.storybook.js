import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { RawMaterialPopup } from './RawMaterialPopup'

class Test extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  click () {
    this.setState({ visible: !this.state.visible })
  }
  render () {
    return (
      <Fragment>
        <button
          style={{ marginTop: '250px' }}
          onClick={() => {
            this.click()
          }}
        >
          Popup it
        </button>
        <RawMaterialPopup visible={this.state.visible} />
      </Fragment>
    )
  }
}
storiesOf('RawMaterialPopup', module).add('Popup it', () => <Test />)

import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { RawMaterialPopup } from './RawMaterialPopup'
import { TestProvider } from '../tests_helpers/TestProvider'

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
      <TestProvider>
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
      </TestProvider>
    )
  }
}
storiesOf('RawMaterialPopup', module).add('Popup it', () => <Test />)

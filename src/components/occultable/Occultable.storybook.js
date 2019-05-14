import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Occultable } from './Occultable'

class OccutableStory extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  toggle () {
    this.setState({ visible: !this.state.visible })
  }

  render () {
    return (
      <Fragment>
        <button onClick={() => this.toggle()}>Toggle</button>
        <br />
        <br />
        <Occultable visible={this.state.visible}>HOOLIIIS!</Occultable>
      </Fragment>
    )
  }
}

storiesOf('Occultable', module).add('Toggle it', () => <OccutableStory />)

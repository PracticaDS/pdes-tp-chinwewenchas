import { storeInstance } from '../store'
import { makeTick } from '../components/factory/actions'

export const onToolbox = (app, callback) => {
  callback(app.find('.toolbox-board'))
}
export const onMachine = (machine, callback, app) => {
  callback(app.find(machine))
}
export const click = app => {
  app.simulate('click')
}

export const onFactoryPosition = (app, position, callback) => {
  callback(app.find('.factory').find(`[position="${position}"]`))
}

export const onMaterial = (material, callback, app) => {
  callback(
    app
      .find('.raw_material-name')
      .filterWhere(item => item.props().children === material)
      .parent()
  )
}

export const onRawMaterialPopUp = (app, callback) => {
  callback(app.find('.raw-material-selector'))
}

export const withMachine = (machine, position, app) => {
  onToolbox(app, toolbox => onMachine(machine, click, toolbox))
  onFactoryPosition(app, position, position =>
    onMachine('.none_machine', click, position)
  )
}

export const machineAbsent = machine => {
  expect(machine.length).toBe(0)
}
export const machinePresent = machine => {
  expect(machine.length).toBe(1)
}

export const deleteOn = (position, machine, app) => {
  onToolbox(app, toolbox => onMachine('.remove', click, toolbox))
  onFactoryPosition(app, position, position =>
    onMachine(machine, click, position)
  )
}

export const rotateOn = (position, machine, app) => {
  onToolbox(app, toolbox => onMachine('.rotate', click, toolbox))
  onFactoryPosition(app, position, position =>
    onMachine(machine, click, position)
  )
}

export const moveFromTo = (positionFrom, positionTo, machine, app) => {
  onToolbox(app, toolbox => onMachine('.move', click, toolbox))
  onFactoryPosition(app, positionFrom, position =>
    onMachine(machine, click, position)
  )
  onFactoryPosition(app, positionTo, position =>
    onMachine('.none_machine', click, position)
  )
}

export const tickFactory = () => {
  storeInstance.dispatch(makeTick())
}

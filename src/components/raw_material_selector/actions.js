import { toggleRawMaterialPopup } from '../raw_material_popup/actions'
import { materialForStarter } from '../factory/actions'

export const rawMaterialSelected = (starterId, material) => {
  return dispatch => {
    dispatch(toggleRawMaterialPopup())
    dispatch(materialForStarter(starterId, material))
  }
}

export const openRawMaterialSelector = starterId => {
  return dispatch => {
    dispatch(toggleRawMaterialPopup())
    dispatch(open(starterId))
  }
}

export const OPEN_RAW_MATERIAL = 'OPEN_RAW_MATERIAL'
export const open = starterId => {
  return {
    type: OPEN_RAW_MATERIAL,
    starterId: starterId
  }
}

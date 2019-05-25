export const TOGGLE_RAW_MATERIAL_POPUP = 'TOGGLE_RAW_MATERIAL_POPUP'

export const toggleRawMaterialPopup = () => {
  return (dispatch, getState) => {
    const canDoToggle =
      getState().factory.actionSelected.actionType === undefined
    if (canDoToggle) {
      dispatch(doToggle())
    }
  }
}

export const doToggle = () => {
  return {
    type: TOGGLE_RAW_MATERIAL_POPUP
  }
}

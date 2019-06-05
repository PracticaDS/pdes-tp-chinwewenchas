import { combineReducers } from 'redux'
import factoryReducer from './components/factory/reducer'
import rawMaterialPopUpReducer from './components/raw_material_popup/reducer'
import rawMaterialSelectorReducer from './components/raw_material_selector/reducer'

export const rootReducer = combineReducers({
  factory: factoryReducer,
  rawMaterialPopUp: rawMaterialPopUpReducer,
  rawMaterialSelector: rawMaterialSelectorReducer
})
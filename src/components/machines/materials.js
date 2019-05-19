export const SILVER = 'SILVER'
export const CARBON = 'CARBON'
export const COBBER = 'COBBER'
export const IRON = 'IRON'
export const GOLD = 'GOLD'

const SOLID = 'SOLID'
const LIQUID = 'LIQUID'

export const isSolid = material => {
  return material.state === SOLID
}

export const newMaterial = materialType => {
  switch (materialType) {
    case SILVER:
      return { type: SILVER, state: SOLID }
    case CARBON:
      return { type: CARBON, state: SOLID }
    case COBBER:
      return { type: COBBER, state: SOLID }
    case IRON:
      return { type: IRON, state: SOLID }
    case GOLD:
      return { type: GOLD, state: SOLID }
    default:
      return { type: CARBON, state: SOLID }
  }
}

export const meltMaterials = materials => {
  return materials.map(material => {
    return { ...material, state: LIQUID }
  }, materials)
}

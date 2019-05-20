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
      return { type: SILVER, state: SOLID, price: 40 }
    case CARBON:
      return { type: CARBON, state: SOLID, price: 10 }
    case COBBER:
      return { type: COBBER, state: SOLID, price: 30 }
    case IRON:
      return { type: IRON, state: SOLID, price: 20 }
    case GOLD:
      return { type: GOLD, state: SOLID, price: 50 }
    default:
      return { type: CARBON, state: SOLID, price: 10 }
  }
}

export const meltMaterials = materials => {
  return materials.map(material => {
    return { ...material, state: LIQUID, price: material.price * 2 }
  }, materials)
}

export const materialProfit = material => {
  return material.price
}

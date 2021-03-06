import {
  CARBON,
  COBBER,
  GOLD,
  IRON,
  isSolid,
  meltMaterials,
  newMaterial,
  SILVER
} from './materials'

describe('materials', () => {
  describe('creation', () => {
    it('creates gold with solid state and price', () => {
      const gold = newMaterial(GOLD)
      expect(gold.type).toBe(GOLD)
      expect(isSolid(gold)).toBe(true)
      expect(gold.price).toBe(50)
    })
    it('creates carbon with solid state', () => {
      const carbon = newMaterial(CARBON)
      expect(carbon.type).toBe(CARBON)
      expect(isSolid(carbon)).toBe(true)
      expect(carbon.price).toBe(10)
    })
    it('creates cobber with solid state', () => {
      const cobber = newMaterial(COBBER)
      expect(cobber.type).toBe(COBBER)
      expect(isSolid(cobber)).toBe(true)
      expect(cobber.price).toBe(30)
    })
    it('creates iron with solid state', () => {
      const iron = newMaterial(IRON)
      expect(iron.type).toBe(IRON)
      expect(isSolid(iron)).toBe(true)
      expect(iron.price).toBe(20)
    })
    it('creates silver with solid state', () => {
      const silver = newMaterial(SILVER)
      expect(silver.type).toBe(SILVER)
      expect(isSolid(silver)).toBe(true)
      expect(silver.price).toBe(40)
    })
    it('creates carbon as default', () => {
      const expectedToBeCarbon = newMaterial('lalalala')
      expect(expectedToBeCarbon.type).toBe(CARBON)
    })
  })
  describe('melting', () => {
    it('melts all the materials', () => {
      const materials = meltMaterials([newMaterial(GOLD), newMaterial(SILVER)])
      expect(isSolid(materials[0])).toBe(false)
      expect(isSolid(materials[1])).toBe(false)
    })
    it('a melt material price it is double', () => {
      const materials = meltMaterials([newMaterial(GOLD)])
      expect(materials[0].price).toBe(newMaterial(GOLD).price * 2)
    })
  })
})

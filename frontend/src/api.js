const backend = '/api'

export const api = {
  newFactory: `${backend}/new_factory`,
  autoSave: `${backend}/save`,
  signIn: `${backend}/sign_in`,
  userFactories: user => `${backend}/factories?user=${user}`
}

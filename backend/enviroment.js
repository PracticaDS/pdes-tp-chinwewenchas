const fromEnvVarOr = (envVar, callback) => {
  return process.env[envVar] || callback()
}

const environments = {
  development: () => {
    return {
      mongoUrl: fromEnvVarOr('MONGO_URL', () => 'mongodb://localhost:27017/industrial-revolution-dev'),
      port: fromEnvVarOr('PORT', () => 3001)
    }
  },
  test: () => {
    return {
      mongoUrl: fromEnvVarOr('MONGO_URL', () => 'mongodb://localhost:27017/industrial-revolution-test'),
      port: fromEnvVarOr('PORT', () => 3001)
    }
  },
  production: () => {
    return {
      mongoUrl: fromEnvVarOr('MONGO_URL', () => { throw 'Missing mongo url' }),
      port: fromEnvVarOr('PORT', () => { throw 'Missing port' })
    }
  }
}

const getEnv = (environment) => {
  const envObject = environments[environment]()
  if (envObject === undefined) {
    throw 'Give me a real environment'
  } else {
    return envObject
  }
}

export default getEnv

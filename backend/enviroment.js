const environments = {
  development: {
    mongoUrl: 'mongodb://localhost:27017/industrial-revolution-dev',
    port: 3001
  },
  test: {
    mongoUrl: 'mongodb://localhost:27017/industrial-revolution-test',
    port: 3002
  }
}

const getEnv = (environment) => {
  const envObject = environments[environment]
  if (envObject === undefined) {
    throw 'Give me a real environment'
  } else {
    return envObject
  }
}

export default getEnv

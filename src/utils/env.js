import path from 'path'
import multienv from 'multienv-loader'
import config from '../config.cjs'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

export function loadEnv({ mode = 'development', dry = true } = {}) {
  const { rootDir } = config.getProjectInfo()
  return multienv.load({
    filter: (key) => key.startsWith('VITEDGE_') || key === 'NODE_ENV',
    envPath: path.resolve(rootDir, config.fnsInDir),
    mode,
    dry,
  })
}

import mongoose from 'mongoose'
import app from './app'
import config from './config'
import logger from './shared/logger'

async function University() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('successfully database connected')
    app.listen(config.port, () => {
      logger.info(` Application listening on port ${config.port}`)
    })
  } catch (err) {
    logger.error('failed to connect database', err)
  }
}

University()

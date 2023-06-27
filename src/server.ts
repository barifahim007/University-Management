import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'

async function University() {
  try {
    await mongoose.connect(config.database_urls as string)
    logger.info('successfully database connected')
    app.listen(config.port, () => {
      logger.info(` Application listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('failed to connect database', err)
  }
}

University()

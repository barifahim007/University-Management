import path from 'path'
import { createLogger, format, transports } from 'winston'
const { combine, timestamp, label, printf } = format

// creating custome formate
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  return `${date.toDateString()} ${hour} ${minutes} ${seconds} ${level} [${label}] : ${message} `
})

const logger = createLogger({
  level: 'info',
  format: combine(
    label({
      label: `somoy britha tumi bolle na ! boka vebe gele amare`,
    }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logger', 'winston', 'succecss.log'),
      level: 'info',
    }),
  ],
})
const errorLogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: `somoy britha tumi bolle na ! boka vebe gele amare` }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logger', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})
export { logger, errorLogger, myFormat }

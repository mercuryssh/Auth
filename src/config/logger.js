import path from 'path'
import { createLogger, format, transports, Logger } from 'winston'

const { combine, printf, timestamp } = format
const Colors = {
  info: '\x1b[44m',
  error: '\x1b[41m',
  warn: '\x1b[43m',
  verbose: '\x1b[42m',
}

export { Logger as LoggerType }
export default createLogger({
  transports: [
    new transports.Console({
      level: 'debug',
      format: printf(
        ({ level, message }) =>
          `\x1b[30m${Colors[level]} ${level.toUpperCase()} \x1b[0m : ${message}`,
      ),
    }),
    new transports.File({
      format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        printf(
          (props) => `${props.timestamp} ${props.level} : ${props.message}`,
        ),
      ),
      maxsize: 444444,
      maxFiles: 4,
      filename: path.join(process.cwd(), 'logs/log-api.log'),
    }),
  ],
})

import winston from 'winston'
import CustomWinston from './custom.winston.js'

const ProdLogger = winston.createLogger({
    levels: CustomWinston.levels,
    transports: [
        new winston.transports.Console({
        level: 'info',
    }),
        new winston.transports.File({
        filename: 'errors.log',
        level: 'error',
        format: winston.format.simple(),
    }),
    ],
})

export default ProdLogger
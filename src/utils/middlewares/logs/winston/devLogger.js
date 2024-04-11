import winston from "winston"
import CustomWinston from "./custom.winston.js"

const DevLogger = winston.createLogger({
    levels: CustomWinston.levels,
    transports: [
        new winston.transports.Console({
        level: 'debug',
    }),
    ],
})

export default DevLogger
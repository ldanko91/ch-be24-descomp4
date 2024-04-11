import LoggerFactory from "./loggerFactory/loggerFactory.js"

const logger = (req, res, next) => {
    req.logger = LoggerFactory

    req.logger.http(
        `${req.method} - ${req.url} / ${
        req.headers['user-agent']
        } - ${new Date().toUTCString()}`
)

next()
}

export default logger
import EErrors from "../../../handlers/errors/EErrors.js";
import logger from "../logs/logger.middleware.js";

const ErrorMiddleware = (error, res, req, next) => {
    switch (error.code) {
        case EErrors.INVALID_USER_INFO:
            req.logger.error(error.message);
            res.status(EErrors.INVALID_USER_INFO).json({status: 'error', error: error.name})
            break;
    
        case EErrors.BAD_REQUEST:
            req.logger.error(error.message);
            res.status(EErrors.BAD_REQUEST).json({status: 'error', error: error.name})
            break;

        case EErrors.NOT_FOUND:
            req.logger.error(error.message);
            res.status(EErrors.NOT_FOUND).json({status: 'error', error: error.name})
            break;

        case EErrors.DATABASE_ERROR:
            req.logger.error(error.message);
            res.status(EErrors.DATABASE_ERROR).json({status: 'error', error: error.name})
            break;

        default:
            req.logger.error(error.message);
            res.status(EErrors.INTERNAL_SERVER_ERROR).json({status: 'error', error: 'Internal Server Error'})
            break;
    }
}

export default ErrorMiddleware;
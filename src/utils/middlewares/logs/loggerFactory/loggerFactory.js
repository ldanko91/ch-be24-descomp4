import { environment } from '../../../../config/environment.config.js';
import DevLogger from '../winston/devLogger.js';
import ProdLogger from '../winston/prodLogger.js';

let LoggerFactory;

switch (environment) {
  case 'dev':
    LoggerFactory = DevLogger
    break

  case 'prod':
    LoggerFactory = ProdLogger
    break
}

export default LoggerFactory
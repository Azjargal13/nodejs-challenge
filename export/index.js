const logger = require('./logger')

logger('just message')
logger.verbose('verbose message')

const Loggerconst = require('./logger-cons')
const testLog = new Loggerconst('Test')
testLog.info('this is info')
testLog.verbose('this is verbose msg')
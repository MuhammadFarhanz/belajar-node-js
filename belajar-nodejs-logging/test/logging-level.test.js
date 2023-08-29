
test("create new logger with console transport",() => {
    const logger = winston.createLogger({
        level: "silly",
        transports:[
            new winston.transports.Console({})
        ]
    })  
    
    logger.log({level: "error", message: "Hello Error"})
    logger.log({level: "warn", message: "Hello Warn"})
    logger.log({level: "info", message: "Hello info"})
    logger.log({level: "http", message: "Hello Http"})
    logger.log({level: "verbose", message: "Hello Verbose"})
    logger.log({level: "debug", message: "Hello Debug"})
    logger.log({level: "silly", message: "Hello Silly"})
})

import winston from "winston";

test("logging with shortcut transport",() => {
    const logger = winston.createLogger({
        level: "silly",
        transports:[
            new winston.transports.Console({})
        ]
    })  
    
    logger.error("Hello Error")
    logger.warn("Hello Warn")
    logger.info("Hello info")
    logger.http("Hello Http")
    logger.verbose("Hello Verbose")
    logger.debug("Hello Debug")
    logger.silly("Hello Silly")
})
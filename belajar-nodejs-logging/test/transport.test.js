import winston from "winston";
import TransportStream from "winston-transport";

test("create new logger with new transport", () => {
  class myTransport extends TransportStream {
    constructor() {
      super();
    }

    log(info, next) {
      console.log(
        `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
      );
      next();
    }
  }

  const logger = winston.createLogger({
    level: "silly",
    transports: [new myTransport({})],
  });

  logger.error("Hello Error");
  logger.warn("Hello Warn");
  logger.info("Hello info");
  logger.http("Hello Http");
  logger.verbose("Hello Verbose");
  logger.debug("Hello Debug");
  logger.silly("Hello Silly");
});

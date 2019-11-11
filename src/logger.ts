import { createLogger, transports, format } from "winston";
import * as drf from "winston-daily-rotate-file";

// const drfTransport = new transports.DailyRotateFileTransport({
//   filename: "prodvis-%DATE%.log",
//   datePattern: "YYYY-MM-DD-HH",
//   zippedArchive: true,
//   maxSize: "20m",
//   maxFiles: "14d"
// });

const logger = createLogger({
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple())
    }),
    new drf({
      filename: "prodvis-%DATE%.log",
      datePattern: "YYYY-MM-DD-HH",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d",
      level: "info",
      format: format.combine(
        format.timestamp(),
        format.align(),
        format.printf(
          info => `${info.timestamp} ${info.level}: ${info.message}`
        )
      )
    })
  ]
});

export default logger;

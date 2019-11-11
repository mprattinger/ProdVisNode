import * as express from "express";
import logger from "./logger";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    logger.debug("Mounting routes...");
    router.get("/", (req, res) => {
      res.json({
        message: "Hello World!"
      });
    });
    this.express.use("/", router);
    logger.debug("Routes mounted!");
  }
}

export default new App().express;

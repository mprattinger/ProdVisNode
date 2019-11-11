import app from "./App";
import logger from "./logger";

logger.info("Application starting...");

const port = process.env.PORT || 3456;

app.listen(port, () => {
  logger.info(`server is listening on ${port}`);
});

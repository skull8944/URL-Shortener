import express from "express";
import log from "./utils/log";
import config from "config";
import router from "./routes/route"
import db from "./db/db";
import bodyParser from "body-parser";

const app = express();
const port = config.get("port");

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
  log.info(`app listen at http://localhost:${port}`);
  db();
});
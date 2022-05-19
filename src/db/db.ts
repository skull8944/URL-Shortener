import mongoose from "mongoose";
import config from "config";
import log from "../utils/log";

async function db() {
  const dbUri = config.get("dbUri") as string;
  try {
    await mongoose
      .connect(dbUri)
      .then(() => {
        log.info(`db connected to ${dbUri}`);
      })
  } catch (e) {
    log.error(`fail to connected to db: ${e}`);
  }
}

export default db;
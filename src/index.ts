import { createConnection } from "typeorm";
import app from "./server/app";
import { startServer } from "./server";

createConnection()
  .then(() => {
    startServer(app);
  })
  .catch(console.error);

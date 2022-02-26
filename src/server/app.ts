import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import { usersRouter } from "./routes";

const app = express();

app.use(helmet());
app.use(morgan("combined"));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(usersRouter);

export default app;

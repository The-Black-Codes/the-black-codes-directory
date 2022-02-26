import { Application } from "express";
import http from "http";

export function startServer(app: Application, port: number = 8080) {
  const server = http.createServer(app);
  server.listen(port, () => {
    console.info(`Server is running on port ${port}`);
  });
}

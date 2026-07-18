import type { Context, Next } from "hono";

import { getConnInfo } from "@hono/node-server/conninfo";
import fs from "fs";
import path from "path";

export const writeToFile = (log: string) => {
  const dir = path.join(process.cwd(), "tmp");
  const logFilePath = path.join(dir, "request_logs.log");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.appendFile(logFilePath, `${log}\n`, (err: any) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
};

export const logger = async (c: Context, next: Next) => {
  const start = performance.now();
  await next();
  const duration = performance.now() - start;
  const info = getConnInfo(c);
  const log: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    requestId: c.var.requestId,
    method: c.req.method,
    path: c.req.path,
    status: c.res.status,
    durationMs: Math.round(duration),
    ip: info.remote.address,
  };

  writeToFile(JSON.stringify(log));
  console.log(log);
};

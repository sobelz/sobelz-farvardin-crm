import { serve } from "@hono/node-server";

import app, { enableRoutes } from "./app.ts";
import env from "./config/env.ts";
import { getLocalIPs } from "./utils/getLocalIps.ts";

serve(
  {
    fetch: app.fetch,
    port: env.PORT,
    hostname: env.MODE === "development" ? "0.0.0.0" : "",
  },
  (info) => {
    if (env.MODE === "development") {
      getLocalIPs().forEach((ip) => {
        console.log(`👉 http://${ip}:${info.port}`);
      });
    } else {
      console.log(`Server is running on http://${info.address[0]}:${info.port}`);
    }
  },
);

enableRoutes();

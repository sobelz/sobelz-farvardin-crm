import type { ContentfulStatusCode } from "hono/utils/http-status";

import type { ApiResponse } from "../types/hono.ts";

export const apiResponse = (data: ApiResponse, status: ContentfulStatusCode = 200) =>
  new Response(JSON.stringify(data), { status });

import { DrizzleQueryError } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";

import { apiResponse } from "../lib/honoUtils.ts";
import { AppError, errorType } from "../types/hono.ts";

export const apiErrorHandler = <T extends Error>(error: T) => {
  if (error instanceof DrizzleQueryError) {
    return apiResponse(
      {
        success: false,
        error: new AppError("Database query error", "database"),
      },
      500,
    );
  }
  if (error instanceof AppError) {
    return apiResponse({ success: false, error, message: error.message }, errorType[error.type]);
  }
  if (error instanceof HTTPException) {
    return apiResponse(
      {
        success: false,
        message: error.message,
        error: new AppError(error.message, "api-error", error.cause),
      },
      errorType["api-error"],
    );
  }

  return apiResponse(
    {
      success: false,
      message: error.message,
      error: new AppError(error.message, "unknown-error", error.cause),
    },
    500,
  );
};

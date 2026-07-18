// oxlint-disable typescript/no-redundant-type-constituents
import type { Env } from "hono";

import type { auth } from "../lib/auth.ts";
import type { ContentfulStatusCode } from "hono/utils/http-status";
import type { JSONValue } from "hono/utils/types";

export interface AuthVariables extends Env {
  Variables: {
    user: typeof auth.$Infer.Session.user;
    session: typeof auth.$Infer.Session.session | null;
  };
}

export const errorType = {
  authentication: 401,
  database: 500,
  "no-access": 403,
  "unknown-error": 500,
  "api-error": 500,
  validation: 400,
  "not-found": 404,
  conflict: 409,
} as const satisfies Record<string, ContentfulStatusCode>;

type ApiErrorType = keyof typeof errorType;

export const selectKeyOfErrorTypesByStatusCode = (input: ContentfulStatusCode): ApiErrorType[] => {
  const result = Object.keys(errorType).filter(
    (item) => errorType[item as keyof typeof errorType] === input,
  ) as ApiErrorType[];
  if (result.length === 0) return ["unknown-error"];
  return result;
};

export class AppError extends Error {
  data?: JSONValue | unknown;
  type: ApiErrorType;

  constructor(message: string, type: ApiErrorType = "unknown-error", data?: JSONValue | unknown) {
    super(message);
    this.type = type;
    this.data = data;
  }
}

export type ApiResponse =
  | {
      success: false;
      error: AppError;
      message?: string;
    }
  | {
      success: true;
      message?: string;
      data: JSONValue;
    };

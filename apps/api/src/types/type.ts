export interface Limitation {
  offset?: number;
  limit?: number;
}

export type Service = "api" | "campaign" | "chat-bot" | "media";
export type Currency = "IRR";
export type Gateway = "zarinpal";

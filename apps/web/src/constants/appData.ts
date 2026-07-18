import Logo from "@/assets/images/logo.webp";

export const AppData = {
  logo: Logo,
  title: "جت لاینز",
  shortDescription: "پنل پیام‌ رسان تحت وب",
  logoLink: "https://jetlinez.com",
};

export type Service = "api" | "campaign" | "chat-bot" | "media";
export type Currency = "IRR";
export const Services: { label: string; value: Service }[] = [
  { label: "ای پی آی", value: "api" },
  { label: "کمپین", value: "campaign" },
  { label: "ربات چت", value: "chat-bot" },
  { label: "رسانه", value: "media" },
] as const;
export const ServicesArray = Services.map((s) => s.value);
export const ServiceDictionary = Services.reduce(
  (acc, service) => {
    acc[service.value] = service.label;
    return acc;
  },
  {} as Record<Service, string>,
);

export const Currencies: { label: string; value: Currency }[] = [
  { label: "ریال", value: "IRR" },
] as const;
export const CurrenciesArray = Currencies.map((c) => c.value);
export const CurrencyDictionary = Currencies.reduce(
  (acc, currency) => {
    acc[currency.value] = currency.label;
    return acc;
  },
  {} as Record<Currency, string>,
);

export const UNLIMITED_CREDIT = -1;
export const UNLIMITED_DURATION_DAYS = -1;

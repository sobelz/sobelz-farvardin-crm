// src/lib/validation/messages.ts

import * as v from "valibot";

/**
 * ─────────────────────────────────────────────────────────────
 * Global fallback
 * ─────────────────────────────────────────────────────────────
 */

v.setGlobalMessage(() => "مقدار وارد شده معتبر نیست.");

/**
 * ─────────────────────────────────────────────────────────────
 * Schema / Type errors
 * ─────────────────────────────────────────────────────────────
 */

v.setSchemaMessage((issue) => {
  switch (issue.type) {
    case "string":
      return "مقدار باید متن باشد.";

    case "number":
      return "مقدار باید عدد باشد.";

    case "bigint":
      return "مقدار باید از نوع عدد بزرگ باشد.";

    case "boolean":
      return "مقدار باید درست یا نادرست باشد.";

    case "date":
      return "مقدار باید یک تاریخ معتبر باشد.";

    case "array":
      return "مقدار باید یک لیست باشد.";

    case "object":
      return "مقدار باید یک شیء معتبر باشد.";

    case "record":
      return "مقدار باید یک رکورد معتبر باشد.";

    case "tuple":
      return "ساختار داده وارد شده معتبر نیست.";

    case "set":
      return "مقدار باید یک مجموعه معتبر باشد.";

    case "map":
      return "مقدار باید یک Map معتبر باشد.";

    case "file":
      return "فایل وارد شده معتبر نیست.";

    case "blob":
      return "فایل یا داده وارد شده معتبر نیست.";

    case "function":
      return "مقدار باید یک تابع باشد.";

    case "null":
      return "مقدار باید null باشد.";

    case "undefined":
      return "مقدار باید undefined باشد.";

    case "literal":
      return "مقدار وارد شده صحیح نیست.";

    case "enum":
      return "مقدار انتخاب‌شده معتبر نیست.";

    case "picklist":
      return "مقدار انتخاب‌شده معتبر نیست.";

    case "union":
      return "مقدار وارد شده با هیچ‌کدام از گزینه‌های مجاز مطابقت ندارد.";

    case "variant":
      return "نوع مقدار وارد شده معتبر نیست.";

    case "never":
      return "این مقدار مجاز نیست.";

    default:
      return "مقدار وارد شده معتبر نیست.";
  }
});

/**
 * ─────────────────────────────────────────────────────────────
 * String
 * ─────────────────────────────────────────────────────────────
 */

v.setSpecificMessage(v.nonEmpty, () => "این فیلد الزامی است.");

v.setSpecificMessage(v.email, () => "ایمیل وارد شده معتبر نیست.");

v.setSpecificMessage(v.url, () => "آدرس وارد شده معتبر نیست.");

v.setSpecificMessage(v.uuid, () => "شناسه وارد شده معتبر نیست.");

v.setSpecificMessage(
  v.minLength,
  (issue) => `این مقدار باید حداقل ${issue.requirement} کاراکتر باشد.`,
);

v.setSpecificMessage(
  v.maxLength,
  (issue) => `این مقدار نمی‌تواند بیشتر از ${issue.requirement} کاراکتر باشد.`,
);

v.setSpecificMessage(
  v.length,
  (issue) => `این مقدار باید دقیقاً ${issue.requirement} کاراکتر باشد.`,
);

v.setSpecificMessage(
  v.minGraphemes,
  (issue) => `این مقدار باید حداقل ${issue.requirement} کاراکتر باشد.`,
);

v.setSpecificMessage(
  v.maxGraphemes,
  (issue) => `این مقدار نمی‌تواند بیشتر از ${issue.requirement} کاراکتر باشد.`,
);

v.setSpecificMessage(v.regex, () => "فرمت وارد شده معتبر نیست.");

v.setSpecificMessage(
  v.includes,
  (issue) => `این مقدار باید شامل «${String(issue.requirement)}» باشد.`,
);

v.setSpecificMessage(
  v.excludes,
  (issue) => `این مقدار نباید شامل «${String(issue.requirement)}» باشد.`,
);

v.setSpecificMessage(v.startsWith, (issue) => `این مقدار باید با «${issue.requirement}» شروع شود.`);

v.setSpecificMessage(v.endsWith, (issue) => `این مقدار باید با «${issue.requirement}» تمام شود.`);

v.setSpecificMessage(v.slug, () => "مقدار وارد شده باید یک slug معتبر باشد.");

/**
 * ─────────────────────────────────────────────────────────────
 * Number
 * ─────────────────────────────────────────────────────────────
 */

v.setSpecificMessage(
  v.minValue,
  (issue) => `مقدار باید حداقل ${issue.requirement.toLocaleString()} باشد.`,
);

v.setSpecificMessage(
  v.maxValue,
  (issue) => `مقدار نمی‌تواند بیشتر از ${issue.requirement.toLocaleString()} باشد.`,
);

v.setSpecificMessage(
  v.gtValue,
  (issue) => `مقدار باید بزرگ‌تر از ${issue.requirement.toLocaleString()} باشد.`,
);

v.setSpecificMessage(
  v.ltValue,
  (issue) => `مقدار باید کوچک‌تر از ${issue.requirement.toLocaleString()} باشد.`,
);

v.setSpecificMessage(v.integer, () => "مقدار باید یک عدد صحیح باشد.");

v.setSpecificMessage(v.safeInteger, () => "مقدار باید یک عدد صحیح معتبر باشد.");

v.setSpecificMessage(v.finite, () => "مقدار باید یک عدد متناهی باشد.");

v.setSpecificMessage(v.nan, () => "مقدار وارد شده معتبر نیست.");

/**
 * ─────────────────────────────────────────────────────────────
 * Array / Collection
 * ─────────────────────────────────────────────────────────────
 */

v.setSpecificMessage(
  v.minLength,
  (issue) => `این لیست باید حداقل ${issue.requirement} مورد داشته باشد.`,
);

v.setSpecificMessage(
  v.maxLength,
  (issue) => `این لیست نمی‌تواند بیشتر از ${issue.requirement} مورد داشته باشد.`,
);

v.setSpecificMessage(
  v.length,
  (issue) => `این لیست باید دقیقاً ${issue.requirement} مورد داشته باشد.`,
);

v.setSpecificMessage(v.minSize, (issue) => `اندازه باید حداقل ${issue.requirement} باشد.`);

v.setSpecificMessage(v.maxSize, (issue) => `اندازه نمی‌تواند بیشتر از ${issue.requirement} باشد.`);

/**
 * ─────────────────────────────────────────────────────────────
 * Date
 * ─────────────────────────────────────────────────────────────
 */

v.setSpecificMessage(
  v.minValue,
  (issue) => `تاریخ باید بعد از ${issue.requirement.toLocaleString()} باشد.`,
);

v.setSpecificMessage(
  v.maxValue,
  (issue) => `تاریخ باید قبل از ${issue.requirement.toLocaleString()} باشد.`,
);

/**
 * ─────────────────────────────────────────────────────────────
 * Common formats
 * ─────────────────────────────────────────────────────────────
 */

v.setSpecificMessage(v.ip, () => "آدرس IP وارد شده معتبر نیست.");

v.setSpecificMessage(v.ipv4, () => "آدرس IPv4 وارد شده معتبر نیست.");

v.setSpecificMessage(v.ipv6, () => "آدرس IPv6 وارد شده معتبر نیست.");

v.setSpecificMessage(v.domain, () => "دامنه وارد شده معتبر نیست.");

v.setSpecificMessage(v.base64, () => "رشته Base64 وارد شده معتبر نیست.");

v.setSpecificMessage(v.hexadecimal, () => "مقدار hexadecimal وارد شده معتبر نیست.");

v.setSpecificMessage(v.hexColor, () => "کد رنگ وارد شده معتبر نیست.");

v.setSpecificMessage(v.creditCard, () => "شماره کارت وارد شده معتبر نیست.");

v.setSpecificMessage(v.imei, () => "شماره IMEI وارد شده معتبر نیست.");

v.setSpecificMessage(v.bic, () => "کد BIC وارد شده معتبر نیست.");

v.setSpecificMessage(v.isbn, () => "شماره ISBN وارد شده معتبر نیست.");

v.setSpecificMessage(v.isoDate, () => "تاریخ وارد شده باید در فرمت ISO باشد.");

/**
 * ─────────────────────────────────────────────────────────────
 * File
 * ─────────────────────────────────────────────────────────────
 */

v.setSpecificMessage(
  v.mimeType,
  (issue) => `نوع فایل باید یکی از این موارد باشد: ${issue.requirement.join(", ")}`,
);

v.setSpecificMessage(
  v.maxSize,
  (issue) => `حجم فایل نمی‌تواند بیشتر از ${issue.requirement} بایت باشد.`,
);

v.setSpecificMessage(v.minSize, (issue) => `حجم فایل باید حداقل ${issue.requirement} بایت باشد.`);

/**
 * ─────────────────────────────────────────────────────────────
 * Common checks
 * ─────────────────────────────────────────────────────────────
 */

v.setSpecificMessage(v.check, () => "مقدار وارد شده شرایط لازم را ندارد.");

v.setSpecificMessage(v.guard, () => "مقدار وارد شده معتبر نیست.");

v.setSpecificMessage(v.custom, () => "مقدار وارد شده معتبر نیست.");

export { v };

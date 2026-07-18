import type { SidebarMainMenu } from "@/types/menu";

import { RiDashboardLine, RiUserLine } from "@remixicon/react";

export const NavDictionary: Record<string, string> = {
  devices: "دستگاه ها",
  "chat-bots": "پاسخگو خودکار",
  add: "افزودن",
  edit: "ویرایش",
  contacts: "مخاطبین",
  groups: "گروه ها",
  "custom-fields": "فیلدهای سفارشی",
  upload: "بارگذاری",
  "single-send": "ارسال تکی",
  messages: "پیام ها",
  account: "حساب کاربری",
  media: "رسانه",
  "templates-message": "پیام های آماده",
  campaigns: "کمپین",
  keys: "کلید های API",
  users: "کاربران",
  plans: "پلن ها",
  subscriptions: "اشتراک ها",
  pay: "خرید",
};

export const MainNav: SidebarMainMenu[] = [
  {
    title: "داشبورد",
    url: "/",
    icon: RiDashboardLine,
  },
  {
    base: "organizations/*",
    title: "سازمان ها",
    icon: RiUserLine,
    items: [
      { title: "همه سازمان ها", url: "organizations/" },
      { title: "ایجاد سازمان", url: "organizations/add/" },
    ],
  },
];
export const AdminNav: SidebarMainMenu[] = [
  {
    base: "users/*",
    title: "کاربران",
    icon: RiUserLine,
    items: [
      { title: "همه کاربران", url: "users/" },
      { title: "ایجاد کاربر", url: "users/add/" },
    ],
  },
];

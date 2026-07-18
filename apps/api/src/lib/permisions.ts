import { createAccessControl } from "better-auth/plugins/access";
import { adminAc, defaultStatements } from "better-auth/plugins/admin/access";

export const statements = {
  ...defaultStatements,
  campaign: ["create", "read", "update", "delete"],
  chatBot: ["create", "read", "update", "delete"],
  contact: ["create", "read", "update", "delete"],
  customField: ["create", "read", "update", "delete"],
  device: ["create", "read", "update", "delete"],
  media: ["read", "upload", "delete"],
  templateMessage: ["create", "read", "update", "delete"],
  whatsapp: ["read", "update", "delete", "create", "scan"],
  settings: ["read", "update"],
  plan: ["create", "read", "update", "delete"],
  subscription: ["add", "pay", "read"],
} as const;

export type KeyStatements = keyof typeof statements;
export type Permissions = {
  [K in KeyStatements]: (typeof statements)[K][number][];
};
export const ac = createAccessControl(statements);

export const roles = {
  user: ac.newRole({
    device: ["read", "update", "delete", "create"],
    media: ["read", "upload", "delete"],
    campaign: ["create", "read", "update", "delete"],
    chatBot: ["create", "read", "update", "delete"],
    contact: ["create", "read", "update", "delete"],
    customField: ["create", "read", "update", "delete"],
    templateMessage: ["create", "read", "update", "delete"],
    whatsapp: ["read", "update", "delete", "create", "scan"],
    plan: ["read"],
    subscription: ["pay", "read"],
  }),

  admin: ac.newRole({
    ...adminAc.statements,
    media: ["read", "upload", "delete"],
    campaign: ["create", "read", "update", "delete"],
    chatBot: ["create", "read", "update", "delete"],
    contact: ["create", "read", "update", "delete"],
    customField: ["create", "read", "update", "delete"],
    templateMessage: ["create", "read", "update", "delete"],
    whatsapp: ["read", "update", "delete", "create", "scan"],
    settings: ["read", "update"],
    device: ["create", "read", "update", "delete"],
    plan: ["create", "delete", "read", "update"],
    subscription: ["pay", "add", "read"],
  }),
};

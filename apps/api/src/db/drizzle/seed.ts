import env from "#/config/env";
import { auth } from "#/lib/auth";

void (async () => {
  await auth.api.createUser({
    body: {
      email: env.ADMIN_EMAIL,
      name: env.ADMIN_NAME,
      password: env.ADMIN_PASSWORD,
      role: "admin",
    },
  });
})();

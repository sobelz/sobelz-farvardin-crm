import { adminClient, jwtClient, organizationClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import ENV from "../config/env";

export const authClient = createAuthClient({
  baseURL: `${ENV().VITE_APP_BACKEND_URL}/api/auth`,
  plugins: [jwtClient(), adminClient(), organizationClient()],
});

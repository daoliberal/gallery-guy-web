import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/(tr|en|es|fr|de|ar|it|pt|ru|ko|zh|hi|ja|sv|no|nl|ro|el|da|bg|cs|az|mk)/:path*"],
};

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|r/|.*\\..*).*)", "/(tr|en|es|fr|de|ar|it|pt|ru|ko|zh|hi|ja|sv|no|nl|ro|el|da|bg|cs|az|mk|sl|pl|uk|fi|hu|sr|he|id|th|vi)/:path*"],
};

import { redirect } from "next/navigation";

// App Store yayınlanınca değiştir:
// const FALLBACK_URL = 'https://apps.apple.com/app/gallery-guy/idXXXXXXXXX';
const FALLBACK_URL = "https://testflight.apple.com/join/tVQDYge3";

export default function ReferralPage() {
  redirect(FALLBACK_URL);
}

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

// App Store yayınlanınca değiştir:
// const FALLBACK_URL = 'https://apps.apple.com/app/gallery-guy/idXXXXXXXXX';
const FALLBACK_URL = "https://testflight.apple.com/join/tVQDYge3";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function ReferralPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const headersList = await headers();

  const forwarded = headersList.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";

  const isValidCode = /^[A-Z2-9]{6}$/.test(code.toUpperCase());

  if (isValidCode && ip !== "unknown") {
    await supabase.from("referral_fingerprints").insert({
      referral_code: code.toUpperCase(),
      ip,
    });
  }

  redirect(FALLBACK_URL);
}

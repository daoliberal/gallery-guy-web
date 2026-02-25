import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const BASE_URL = "https://gallery-guy-web.vercel.app";

const meta: Record<
  string,
  { title: string; description: string; ogDescription: string }
> = {
  en: {
    title: "Gallery Guy — Best iPhone Photo Cleaner · No Subscription",
    description:
      "The best way to delete similar photos on iPhone. Smart photo cleaner app — one-time purchase, no subscription. Swipe to compare, pick the best shot, free up storage.",
    ogDescription:
      "Swipe through photos like Tinder — find duplicates, pick the best shot, free up iPhone storage. Best photo cleaner app with no subscription.",
  },
  tr: {
    title: "Gallery Guy — En İyi iPhone Galeri Temizleyici · Aboneliksiz",
    description:
      "iPhone'daki benzer fotoğrafları silmenin en kolay yolu. Akıllı fotoğraf temizleme uygulaması — tek ödeme, abonelik yok. Kaydırarak karşılaştır, en iyisini seç, yer aç.",
    ogDescription:
      "Fotoğraflarınız arasında Tinder gibi kaydırın — kopyaları bulun, en iyisini seçin, yer açın. Aboneliksiz en iyi fotoğraf temizleme uygulaması.",
  },
  es: {
    title: "Gallery Guy — Mejor Limpiador de Fotos para iPhone · Sin Suscripción",
    description:
      "La mejor forma de eliminar fotos similares en iPhone. Limpiador de fotos inteligente — pago único, sin suscripción. Desliza para comparar, elige la mejor foto, libera espacio.",
    ogDescription:
      "Desliza entre tus fotos como en Tinder — encuentra duplicados, elige la mejor toma, libera espacio en tu iPhone. La mejor app limpiadora de fotos sin suscripción.",
  },
  fr: {
    title: "Gallery Guy — Meilleur Nettoyeur de Photos iPhone · Sans Abonnement",
    description:
      "La meilleure façon de supprimer les photos similaires sur iPhone. Nettoyeur de photos intelligent — achat unique, sans abonnement. Balayez pour comparer, gardez la meilleure, libérez de l'espace.",
    ogDescription:
      "Balayez vos photos comme sur Tinder — trouvez les doublons, gardez la meilleure prise, libérez de l'espace sur votre iPhone. Meilleure app de nettoyage photos sans abonnement.",
  },
  de: {
    title: "Gallery Guy — Bester iPhone Foto-Bereiniger · Ohne Abo",
    description:
      "Der beste Weg, ähnliche Fotos auf dem iPhone zu löschen. Intelligenter Foto-Bereiniger — Einmalkauf, kein Abo. Wischen zum Vergleichen, bestes Foto behalten, Speicher freigeben.",
    ogDescription:
      "Wische durch deine Fotos wie bei Tinder — finde Duplikate, wähle das beste Foto, gib iPhone-Speicher frei. Beste Foto-Bereinigungs-App ohne Abo.",
  },
  ar: {
    title: "Gallery Guy — أفضل منظف صور للآيفون · بدون اشتراك",
    description:
      "أفضل طريقة لحذف الصور المتشابهة على الآيفون. تطبيق تنظيف صور ذكي — دفعة واحدة، بدون اشتراك. اسحب للمقارنة، اختر أفضل صورة، وفّر مساحة التخزين.",
    ogDescription:
      "اسحب بين صورك مثل تيندر — اعثر على المكررات، اختر أفضل لقطة، وفّر مساحة الآيفون. أفضل تطبيق تنظيف صور بدون اشتراك.",
  },
  it: {
    title: "Gallery Guy — Miglior Pulitore Foto iPhone · Senza Abbonamento",
    description:
      "Il modo migliore per eliminare foto simili su iPhone. Pulitore foto intelligente — acquisto unico, senza abbonamento. Scorri per confrontare, scegli lo scatto migliore, libera spazio.",
    ogDescription:
      "Scorri tra le tue foto come su Tinder — trova i duplicati, scegli lo scatto migliore, libera spazio su iPhone. La migliore app pulitore foto senza abbonamento.",
  },
  pt: {
    title: "Gallery Guy — Melhor Limpador de Fotos iPhone · Sem Assinatura",
    description:
      "A melhor forma de apagar fotos semelhantes no iPhone. Limpador de fotos inteligente — compra única, sem assinatura. Deslize para comparar, escolha a melhor foto, libere espaço.",
    ogDescription:
      "Deslize pelas suas fotos como no Tinder — encontre duplicatas, escolha a melhor foto, libere espaço no iPhone. Melhor app limpador de fotos sem assinatura.",
  },
  ru: {
    title: "Gallery Guy — Лучший очиститель фото для iPhone · Без подписки",
    description:
      "Лучший способ удалить похожие фото на iPhone. Умный очиститель фото — разовая покупка, без подписки. Свайпайте для сравнения, выбирайте лучший кадр, освобождайте место.",
    ogDescription:
      "Листайте фото как в Тиндере — находите дубликаты, выбирайте лучший кадр, освобождайте место на iPhone. Лучшее приложение для очистки фото без подписки.",
  },
  ko: {
    title: "Gallery Guy — 최고의 아이폰 사진 정리 앱 · 구독 없음",
    description:
      "아이폰에서 비슷한 사진을 삭제하는 가장 좋은 방법. 스마트 사진 정리 앱 — 일회성 구매, 구독 없음. 스와이프로 비교하고, 최고의 사진을 선택하고, 저장 공간을 확보하세요.",
    ogDescription:
      "틴더처럼 사진을 넘기세요 — 중복 사진을 찾고, 최고의 사진을 선택하고, 아이폰 저장 공간을 확보하세요. 구독 없는 최고의 사진 정리 앱.",
  },
  zh: {
    title: "Gallery Guy — 最佳iPhone照片清理应用 · 无需订阅",
    description:
      "删除iPhone相似照片的最佳方式。智能照片清理应用 — 一次购买，无需订阅。滑动比较，选出最佳照片，释放存储空间。",
    ogDescription:
      "像Tinder一样滑动浏览照片 — 找出重复照片，选出最佳照片，释放iPhone存储空间。无需订阅的最佳照片清理应用。",
  },
  hi: {
    title: "Gallery Guy — सबसे अच्छा iPhone फोटो क्लीनर · बिना सब्सक्रिप्शन",
    description:
      "iPhone पर समान फोटो हटाने का सबसे अच्छा तरीका। स्मार्ट फोटो क्लीनर ऐप — एक बार भुगतान, कोई सब्सक्रिप्शन नहीं। स्वाइप करके तुलना करें, सबसे अच्छी फोटो चुनें, स्टोरेज खाली करें।",
    ogDescription:
      "Tinder की तरह फोटो स्वाइप करें — डुप्लीकेट खोजें, सबसे अच्छी फोटो चुनें, iPhone स्टोरेज खाली करें। बिना सब्सक्रिप्शन सबसे अच्छा फोटो क्लीनर ऐप।",
  },
  ja: {
    title: "Gallery Guy — 最高のiPhone写真クリーナー · サブスク不要",
    description:
      "iPhoneで似た写真を削除する最良の方法。スマート写真クリーナーアプリ — 買い切り、サブスク不要。スワイプで比較、ベストショットを選択、ストレージを解放。",
    ogDescription:
      "Tinderのように写真をスワイプ — 重複を見つけ、ベストショットを選び、iPhoneストレージを解放。サブスク不要の最高の写真クリーナーアプリ。",
  },
  sv: {
    title: "Gallery Guy — Bästa iPhone-fotorensaren · Ingen prenumeration",
    description:
      "Bästa sättet att radera liknande bilder på iPhone. Smart fotorensare — engångsköp, ingen prenumeration. Svep för att jämföra, välj bästa bilden, frigör lagring.",
    ogDescription:
      "Svep genom dina bilder som på Tinder — hitta dubbletter, välj bästa bilden, frigör iPhone-lagring. Bästa fotorensaren utan prenumeration.",
  },
  no: {
    title: "Gallery Guy — Beste iPhone-fotorenser · Uten abonnement",
    description:
      "Den beste måten å slette lignende bilder på iPhone. Smart fotorenser — engangskjøp, uten abonnement. Sveip for å sammenligne, velg det beste bildet, frigjør lagring.",
    ogDescription:
      "Sveip gjennom bildene dine som på Tinder — finn duplikater, velg det beste bildet, frigjør iPhone-lagring. Beste fotorenser uten abonnement.",
  },
  nl: {
    title: "Gallery Guy — Beste iPhone Foto-opruimer · Geen Abonnement",
    description:
      "De beste manier om vergelijkbare foto's op iPhone te verwijderen. Slimme foto-opruimer — eenmalige aankoop, geen abonnement. Veeg om te vergelijken, kies de beste foto, maak opslagruimte vrij.",
    ogDescription:
      "Veeg door je foto's zoals op Tinder — vind duplicaten, kies de beste foto, maak iPhone-opslagruimte vrij. Beste foto-opruimer zonder abonnement.",
  },
  ro: {
    title: "Gallery Guy — Cel mai bun curățător de fotografii iPhone · Fără abonament",
    description:
      "Cel mai bun mod de a șterge fotografiile similare de pe iPhone. Curățător inteligent de fotografii — achiziție unică, fără abonament. Glisează pentru a compara, alege cea mai bună fotografie, eliberează spațiu.",
    ogDescription:
      "Glisează prin fotografiile tale ca pe Tinder — găsește duplicatele, alege cea mai bună fotografie, eliberează spațiul iPhone. Cel mai bun curățător de fotografii fără abonament.",
  },
  el: {
    title: "Gallery Guy — Καλύτερο Καθαριστικό Φωτογραφιών iPhone · Χωρίς Συνδρομή",
    description:
      "Ο καλύτερος τρόπος να διαγράψετε παρόμοιες φωτογραφίες στο iPhone. Έξυπνο καθαριστικό φωτογραφιών — εφάπαξ αγορά, χωρίς συνδρομή. Σύρετε για σύγκριση, επιλέξτε την καλύτερη φωτογραφία, ελευθερώστε αποθηκευτικό χώρο.",
    ogDescription:
      "Σύρετε τις φωτογραφίες σας όπως στο Tinder — βρείτε διπλότυπα, επιλέξτε την καλύτερη, ελευθερώστε χώρο στο iPhone. Καλύτερο καθαριστικό φωτογραφιών χωρίς συνδρομή.",
  },
  da: {
    title: "Gallery Guy — Bedste iPhone Fotorenser · Ingen Abonnement",
    description:
      "Den bedste måde at slette lignende billeder på iPhone. Smart fotorenser — engangskøb, intet abonnement. Swipe for at sammenligne, vælg det bedste billede, frigør lagerplads.",
    ogDescription:
      "Swipe gennem dine billeder som på Tinder — find duplikater, vælg det bedste billede, frigør iPhone-lagerplads. Bedste fotorenser uden abonnement.",
  },
  bg: {
    title: "Gallery Guy — Най-добрият почистващ снимки за iPhone · Без абонамент",
    description:
      "Най-добрият начин за изтриване на подобни снимки на iPhone. Интелигентно почистване на снимки — еднократна покупка, без абонамент. Плъзнете за сравнение, изберете най-добрата снимка, освободете място.",
    ogDescription:
      "Плъзнете през снимките си като в Tinder — намерете дубликати, изберете най-добрата снимка, освободете място на iPhone. Най-добрият почистващ снимки без абонамент.",
  },
  cs: {
    title: "Gallery Guy — Nejlepší čistič fotek pro iPhone · Bez předplatného",
    description:
      "Nejlepší způsob, jak smazat podobné fotky na iPhone. Chytrý čistič fotek — jednorázový nákup, bez předplatného. Přejeďte pro srovnání, vyberte nejlepší fotku, uvolněte úložiště.",
    ogDescription:
      "Přejeďte přes své fotky jako na Tinderu — najděte duplikáty, vyberte nejlepší fotku, uvolněte místo na iPhone. Nejlepší čistič fotek bez předplatného.",
  },
  az: {
    title: "Gallery Guy — iPhone üçün Ən Yaxşı Foto Təmizləyici · Abunəsiz",
    description:
      "iPhone-da oxşar şəkilləri silməyin ən yaxşı yolu. Ağıllı foto təmizləyici — birdəfəlik alış, abunəsiz. Müqayisə etmək üçün sürüşdürün, ən yaxşı şəkli seçin, yaddaş boşaldın.",
    ogDescription:
      "Şəkillərinizdə Tinder kimi sürüşdürün — dublikatları tapın, ən yaxşı şəkli seçin, iPhone yaddaşını boşaldın. Abunəsiz ən yaxşı foto təmizləyici.",
  },
  mk: {
    title: "Gallery Guy — Најдобар Чистач на Фотографии за iPhone · Без Претплата",
    description:
      "Најдобар начин за бришење слични фотографии на iPhone. Паметен чистач на фотографии — еднократна купување, без претплата. Лизгајте за споредба, изберете ја најдобрата фотографија, ослободете простор.",
    ogDescription:
      "Лизгајте низ фотографиите како на Tinder — најдете дупликати, изберете ја најдобрата фотографија, ослободете простор на iPhone. Најдобар чистач на фотографии без претплата.",
  },
  sl: {
    title: "Gallery Guy — Najboljši čistilec fotografij za iPhone · Brez naročnine",
    description:
      "Najboljši način za brisanje podobnih fotografij na iPhone. Pametni čistilec fotografij — enkratni nakup, brez naročnine. Podrsajte za primerjavo, izberite najboljšo fotografijo, sprostite prostor.",
    ogDescription:
      "Podrsajte skozi fotografije kot na Tinderu — poiščite dvojnike, izberite najboljšo fotografijo, sprostite prostor na iPhone. Najboljši čistilec fotografij brez naročnine.",
  },
  pl: {
    title: "Gallery Guy — Najlepszy czyszczacz zdjęć na iPhone · Bez subskrypcji",
    description:
      "Najlepszy sposób na usuwanie podobnych zdjęć na iPhone. Inteligentny czyszczacz zdjęć — jednorazowy zakup, bez subskrypcji. Przesuń, aby porównać, wybierz najlepsze zdjęcie, zwolnij miejsce.",
    ogDescription:
      "Przesuwaj zdjęcia jak na Tinderze — znajdź duplikaty, wybierz najlepsze zdjęcie, zwolnij miejsce na iPhone. Najlepszy czyszczacz zdjęć bez subskrypcji.",
  },
  uk: {
    title: "Gallery Guy — Найкращий очищувач фото для iPhone · Без підписки",
    description:
      "Найкращий спосіб видалити схожі фото на iPhone. Розумний очищувач фото — одноразова покупка, без підписки. Свайпніть для порівняння, оберіть найкраще фото, звільніть місце.",
    ogDescription:
      "Гортайте фото як у Тіндері — знаходьте дублікати, обирайте найкраще фото, звільняйте місце на iPhone. Найкращий очищувач фото без підписки.",
  },
  fi: {
    title: "Gallery Guy — Paras iPhone-valokuvien puhdistaja · Ei tilausta",
    description:
      "Paras tapa poistaa samankaltaiset valokuvat iPhonesta. Älykäs valokuvien puhdistaja — kertaosto, ei tilausta. Pyyhkäise vertaillaksesi, valitse paras kuva, vapauta tallennustilaa.",
    ogDescription:
      "Pyyhkäise valokuvien läpi kuin Tinderissä — löydä kaksoiskappaleet, valitse paras kuva, vapauta iPhone-tallennustilaa. Paras valokuvien puhdistaja ilman tilausta.",
  },
  hu: {
    title: "Gallery Guy — A legjobb iPhone fotótisztító · Előfizetés nélkül",
    description:
      "A legjobb módja a hasonló fotók törlésének iPhone-on. Intelligens fotótisztító — egyszeri vásárlás, előfizetés nélkül. Húzd az ujjad az összehasonlításhoz, válaszd a legjobb fotót, szabadíts fel tárhelyet.",
    ogDescription:
      "Húzd a fotóidat mint a Tinderen — találd meg a duplikátumokat, válaszd a legjobb fotót, szabadíts fel iPhone tárhelyet. A legjobb fotótisztító előfizetés nélkül.",
  },
  sr: {
    title: "Gallery Guy — Najbolji čistač fotografija za iPhone · Bez pretplate",
    description:
      "Najbolji način za brisanje sličnih fotografija na iPhone-u. Pametni čistač fotografija — jednokratna kupovina, bez pretplate. Prevucite za poređenje, izaberite najbolju fotografiju, oslobodite prostor.",
    ogDescription:
      "Prevlačite fotografije kao na Tinderu — pronađite duplikate, izaberite najbolju fotografiju, oslobodite prostor na iPhone-u. Najbolji čistač fotografija bez pretplate.",
  },
  he: {
    title: "Gallery Guy — מנקה התמונות הטוב ביותר לאייפון · ללא מנוי",
    description:
      "הדרך הטובה ביותר למחוק תמונות דומות באייפון. אפליקציית ניקוי תמונות חכמה — רכישה חד-פעמית, ללא מנוי. החלק להשוואה, בחר את התמונה הטובה ביותר, פנה מקום אחסון.",
    ogDescription:
      "החלק בין התמונות כמו בטינדר — מצא כפילויות, בחר את הצילום הטוב ביותר, פנה מקום אחסון באייפון. אפליקציית ניקוי התמונות הטובה ביותר ללא מנוי.",
  },
  id: {
    title: "Gallery Guy — Pembersih Foto iPhone Terbaik · Tanpa Langganan",
    description:
      "Cara terbaik menghapus foto serupa di iPhone. Aplikasi pembersih foto cerdas — pembelian sekali bayar, tanpa langganan. Geser untuk membandingkan, pilih foto terbaik, kosongkan penyimpanan.",
    ogDescription:
      "Geser foto seperti Tinder — temukan duplikat, pilih foto terbaik, kosongkan penyimpanan iPhone. Aplikasi pembersih foto terbaik tanpa langganan.",
  },
  th: {
    title: "Gallery Guy — แอปทำความสะอาดรูปภาพ iPhone ที่ดีที่สุด · ไม่ต้องสมัครสมาชิก",
    description:
      "วิธีที่ดีที่สุดในการลบรูปภาพที่คล้ายกันบน iPhone แอปทำความสะอาดรูปภาพอัจฉริยะ — ซื้อครั้งเดียว ไม่ต้องสมัครสมาชิก ปัดเพื่อเปรียบเทียบ เลือกรูปที่ดีที่สุด เพิ่มพื้นที่จัดเก็บ",
    ogDescription:
      "ปัดดูรูปภาพเหมือน Tinder — ค้นหารูปซ้ำ เลือกรูปที่ดีที่สุด เพิ่มพื้นที่จัดเก็บ iPhone แอปทำความสะอาดรูปภาพที่ดีที่สุดไม่ต้องสมัครสมาชิก",
  },
  vi: {
    title: "Gallery Guy — Ứng dụng dọn ảnh iPhone tốt nhất · Không cần đăng ký",
    description:
      "Cách tốt nhất để xóa ảnh trùng lặp trên iPhone. Ứng dụng dọn ảnh thông minh — mua một lần, không cần đăng ký. Vuốt để so sánh, chọn ảnh đẹp nhất, giải phóng bộ nhớ.",
    ogDescription:
      "Vuốt qua ảnh như Tinder — tìm ảnh trùng, chọn ảnh đẹp nhất, giải phóng bộ nhớ iPhone. Ứng dụng dọn ảnh tốt nhất không cần đăng ký.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description, ogDescription } = meta[locale] ?? meta.en;
  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${BASE_URL}/${l}`])
      ),
    },
    openGraph: {
      title,
      description: ogDescription,
      url: `${BASE_URL}/${locale}`,
      siteName: "Gallery Guy",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" || locale === "he" ? "rtl" : "ltr"}>
      <body
        className={`${inter.variable} ${bricolage.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

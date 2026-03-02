import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

const content = {
  en: {
    title: "Support",
    subtitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "How do I get started with Gallery Guy?",
        a: "Download Gallery Guy from the App Store and open it. Grant photo library access when prompted, then tap "Start Scanning." Gallery Guy will group your similar photos so you can swipe to keep or delete them one by one.",
      },
      {
        q: "Does Gallery Guy delete photos automatically?",
        a: "No. Gallery Guy never deletes anything without your explicit action. You decide which photos to keep and which to remove — one swipe at a time. Nothing is deleted automatically.",
      },
      {
        q: "Are my photos uploaded to a server or the cloud?",
        a: "No. All processing happens entirely on your device. Your photos never leave your iPhone, iPad, or Mac. Gallery Guy does not have servers and does not transmit any photo data.",
      },
      {
        q: "How do I restore my purchase?",
        a: "Open Gallery Guy, go to Settings, and tap "Restore Purchases." Your previous purchase will be restored automatically as long as you're signed in with the same Apple ID.",
      },
      {
        q: "The app is not showing all my photos — what should I do?",
        a: "Make sure Gallery Guy has Full Access to your photo library. Go to iPhone Settings → Privacy & Security → Photos → Gallery Guy → select "Full Access." Then relaunch the app and start a new scan.",
      },
      {
        q: "Can I undo a deletion?",
        a: 'Yes. Deleted photos go to the iOS "Recently Deleted" album and stay there for 30 days. Open the Photos app, navigate to Recently Deleted, and you can recover any photo within that window.',
      },
      {
        q: "The app is crashing or not opening — what should I do?",
        a: "First, force-quit the app and reopen it. If the issue persists, restart your device. Make sure you are running the latest version of Gallery Guy from the App Store. If it still crashes, contact us at baturcihan@icloud.com with your device model and iOS version.",
      },
      {
        q: "What happens if I delete a photo by mistake?",
        a: 'Go to the built-in Photos app → Albums → Recently Deleted. Your photo will be there for up to 30 days. Select it and tap "Recover" to restore it to your library.',
      },
      {
        q: "How do I manage or cancel my purchase?",
        a: "Gallery Guy is a one-time purchase — there is no recurring subscription to cancel. If you need a refund, you can request one directly through Apple: go to reportaproblem.apple.com and select the Gallery Guy purchase.",
      },
      {
        q: "How do I contact support?",
        a: "Email us at baturcihan@icloud.com and we'll get back to you as soon as possible. Please include your device model, iOS version, and a description of the issue.",
      },
    ],
    contactTitle: "Still need help?",
    contactBody: "Email us at",
    contactEmail: "baturcihan@icloud.com",
  },
  tr: {
    title: "Destek",
    subtitle: "Sık Sorulan Sorular",
    faqs: [
      {
        q: "Gallery Guy'ı nasıl kullanmaya başlarım?",
        a: "App Store'dan Gallery Guy'ı indirin ve açın. İstendiğinde fotoğraf kütüphanesi erişimine izin verin, ardından "Taramayı Başlat"a dokunun. Uygulama benzer fotoğraflarınızı gruplar; kaydırarak hangilerini tutacağınızı hangilerini sileceğinizi seçersiniz.",
      },
      {
        q: "Gallery Guy fotoğrafları otomatik siliyor mu?",
        a: "Hayır. Gallery Guy sizin açıkça onaylamadan hiçbir şey silmez. Hangi fotoğrafın kalacağına, hangisinin silineceğine her seferinde siz karar verirsiniz. Otomatik silme yoktur.",
      },
      {
        q: "Fotoğraflarım sunucuya veya buluta yükleniyor mu?",
        a: "Hayır. Tüm işlemler tamamen cihazınızda gerçekleşir. Fotoğraflarınız iPhone, iPad veya Mac'inizden hiçbir zaman ayrılmaz. Gallery Guy'ın sunucusu yoktur ve hiçbir fotoğraf verisi iletilmez.",
      },
      {
        q: "Satın alma işlemimi nasıl geri yüklerim?",
        a: "Gallery Guy'ı açın, Ayarlar'a gidin ve "Satın Alımları Geri Yükle"ye dokunun. Aynı Apple ID ile giriş yaptığınız sürece önceki satın alma işleminiz otomatik olarak geri yüklenir.",
      },
      {
        q: "Uygulama tüm fotoğraflarımı göstermiyor — ne yapmalıyım?",
        a: "Gallery Guy'ın fotoğraf kütüphanenize Tam Erişim iznine sahip olduğundan emin olun. iPhone Ayarlar → Gizlilik ve Güvenlik → Fotoğraflar → Gallery Guy → "Tam Erişim"i seçin. Ardından uygulamayı yeniden başlatın ve yeni bir tarama başlatın.",
      },
      {
        q: "Silme işlemini geri alabilir miyim?",
        a: "Evet. Silinen fotoğraflar iOS'un "Son Silinenler" albümüne gider ve 30 gün boyunca orada kalır. Fotoğraflar uygulamasını açın, Son Silinenler'e gidin ve bu süre içinde herhangi bir fotoğrafı kurtarabilirsiniz.",
      },
      {
        q: "Uygulama çöküyor veya açılmıyor — ne yapmalıyım?",
        a: "Önce uygulamayı zorla kapatın ve yeniden açın. Sorun devam ederse cihazınızı yeniden başlatın. App Store'dan Gallery Guy'ın en güncel sürümünü kullandığınızdan emin olun. Sorun çözülmezse cihaz modelinizi ve iOS sürümünüzü belirterek baturcihan@icloud.com adresine yazın.",
      },
      {
        q: "Yanlışlıkla bir fotoğrafı sildim — ne yapmalıyım?",
        a: "Fotoğraflar uygulamasını açın → Albümler → Son Silinenler. Fotoğrafınız 30 güne kadar orada bulunur. Seçip "Kurtar"a dokunarak kütüphanenize geri yükleyebilirsiniz.",
      },
      {
        q: "Satın alma işlemimi nasıl yönetirim veya iptal ederim?",
        a: "Gallery Guy tek seferlik bir satın alımdır — iptal edilecek yinelenen bir abonelik yoktur. Para iadesi gerekiyorsa Apple üzerinden talep edebilirsiniz: reportaproblem.apple.com adresine gidip Gallery Guy satın alma işlemini seçin.",
      },
      {
        q: "Destek ekibiyle nasıl iletişime geçebilirim?",
        a: "baturcihan@icloud.com adresine e-posta gönderin, en kısa sürede dönüş yaparız. Lütfen cihaz modelinizi, iOS sürümünüzü ve sorununuzun açıklamasını belirtin.",
      },
    ],
    contactTitle: "Hâlâ yardıma mı ihtiyacınız var?",
    contactBody: "Bize ulaşın:",
    contactEmail: "baturcihan@icloud.com",
  },
};

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = content[locale as keyof typeof content] ?? content.en;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pb-24 pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-12">
            <p className="text-sm font-semibold text-accent">Gallery Guy</p>
            <h1 className="font-heading mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.title}
            </h1>
            <p className="mt-2 text-sm text-muted">{t.subtitle}</p>

            <div className="mt-10 space-y-8">
              {t.faqs.map((faq, i) => (
                <div key={i}>
                  <h2 className="font-heading text-base font-semibold text-foreground">
                    {faq.q}
                  </h2>
                  <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-muted">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-border bg-background p-6">
              <h2 className="font-heading text-base font-semibold text-foreground">
                {t.contactTitle}
              </h2>
              <p className="mt-2 text-[15px] text-muted">
                {t.contactBody}{" "}
                <a
                  href={`mailto:${t.contactEmail}`}
                  className="font-medium text-accent hover:underline"
                >
                  {t.contactEmail}
                </a>
              </p>
            </div>

            <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted">
              Gallery Guy © 2026 Batur Cihan
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

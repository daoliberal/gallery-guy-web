import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

const content = {
  en: {
    title: "Privacy Policy",
    effectiveDate: "Effective Date: February 22, 2025",
    sections: [
      {
        heading: "Introduction",
        body: 'Gallery Guy ("we", "our", "the app") is developed by Batur Cihan. This Privacy Policy explains how the app handles your information. Gallery Guy is designed with privacy at its core — all your data stays on your device. We do not collect, transmit, or store any personal information on external servers.',
      },
      {
        heading: "Information We Do Not Collect",
        body: `Gallery Guy does not collect any personal information. Specifically:

• No personal information (name, email, phone number)
• No usage analytics or telemetry
• No advertising identifiers or tracking
• No device fingerprinting
• No location data
• No account creation required
• No cloud uploads of any kind
• No cookies or web tracking technologies`,
      },
      {
        heading: "Information Stored on Your Device",
        body: `The following data is stored locally on your device and never leaves it:

• Photo Library Access: The app reads your photo library to scan, display, and manage your photos and videos. Write access is used for deletion and moving files between albums.

• OCR Scan Results: Text recognized from screenshots is cached locally on your device for categorization purposes. This data never leaves your device.

• Hidden Vault Files: Photos and videos moved to the Hidden Vault are stored in the app's sandboxed file system on your device, protected by biometric authentication.

• User Preferences: Your theme mode, language preference, and onboarding completion state are stored locally using on-device storage.`,
      },
      {
        heading: "Permissions We Request",
        body: `• Photo Library (Read & Write): Required for the app to function. Used to scan your gallery, detect screenshots, find similar photos, identify large videos, and delete or move files you select.

• Biometric Authentication (Face ID / Touch ID): Used solely to protect access to the Hidden Vault feature. Biometric data is handled entirely by the operating system; the app never accesses or stores biometric information directly.`,
      },
      {
        heading: "Third-Party SDKs",
        body: `• ML Kit Text Recognition: Used for on-device OCR to classify screenshots by content. This SDK runs entirely on your device — no images or text are sent to any server.

• Expo Framework Modules: Standard modules for media library access, file system, localization, and local authentication. None of these modules collect or transmit data.

The app does not use any third-party analytics, advertising, or crash reporting services.`,
      },
      {
        heading: "Data Security",
        body: `• All data remains on your device's local storage
• Hidden Vault files are protected by your device's biometric authentication
• The app sandbox prevents other apps from accessing Gallery Guy's stored data
• The app does not track users (NSPrivacyTracking is set to false)`,
      },
      {
        heading: "Data Sharing",
        body: "We do not share, sell, rent, or trade any data with third parties. We have no servers that receive data from the app. There is no data to share because we do not collect any.",
      },
      {
        heading: "Children's Privacy",
        body: "Gallery Guy does not knowingly collect information from children under 13. The app does not require age verification because it collects no personal information. If a parent or guardian has concerns, they may contact the developer.",
      },
      {
        heading: "Your Rights",
        body: `Since all data is stored locally on your device, you have complete control:

• Right to Access: All your data is already on your device.
• Right to Delete: You can delete any data by removing files within the app or uninstalling the app entirely.
• Right to Portability: Your photos remain in your device's photo library.
• Right to Opt-Out: There is nothing to opt out of as we collect no data.`,
      },
      {
        heading: "Data Retention",
        body: `• OCR cache: Stored locally, automatically cleared when you uninstall the app.
• Hidden Vault files: Remain until you restore or delete them, or uninstall the app.
• Preferences: Stored locally, cleared on app uninstall.`,
      },
      {
        heading: "Changes to This Policy",
        body: 'We may update this Privacy Policy from time to time. Changes will be reflected in the "Effective Date" at the top of this document. Continued use of the app after changes constitutes acceptance of the updated policy.',
      },
      {
        heading: "Contact",
        body: `Developer: Batur Cihan
Email: baturcihan@icloud.com
Country: Turkey`,
      },
    ],
  },
  tr: {
    title: "Gizlilik Politikası",
    effectiveDate: "Yürürlük Tarihi: 22 Şubat 2025",
    sections: [
      {
        heading: "Giriş",
        body: 'Gallery Guy ("biz", "bizim", "uygulama") Batur Cihan tarafından geliştirilmiştir. Bu Gizlilik Politikası, uygulamanın bilgilerinizi nasıl işlediğini açıklar. Gallery Guy, gizliliği ön planda tutarak tasarlanmıştır — tüm verileriniz cihazınızda kalır. Harici sunucularda hiçbir kişisel bilgi toplamaz, iletmez veya saklamayız.',
      },
      {
        heading: "Toplamadığımız Bilgiler",
        body: `Gallery Guy hiçbir kişisel bilgi toplamaz. Özellikle:

• Kişisel bilgi yok (ad, e-posta, telefon numarası)
• Kullanım analitiği veya telemetri yok
• Reklam tanımlayıcıları veya izleme yok
• Cihaz parmak izi yok
• Konum verisi yok
• Hesap oluşturma gerekmiyor
• Hiçbir türde bulut yüklemesi yok
• Çerez veya web izleme teknolojileri yok`,
      },
      {
        heading: "Cihazınızda Saklanan Bilgiler",
        body: `Aşağıdaki veriler cihazınızda yerel olarak saklanır ve asla cihazınızdan çıkmaz:

• Fotoğraf Kitaplığı Erişimi: Uygulama, fotoğraf ve videolarınızı taramak, görüntülemek ve yönetmek için fotoğraf kitaplığınızı okur. Yazma erişimi, silme ve dosyaları albümler arasında taşıma için kullanılır.

• OCR Tarama Sonuçları: Ekran görüntülerinden tanınan metin, sınıflandırma amacıyla cihazınızda yerel olarak önbelleğe alınır. Bu veri asla cihazınızdan çıkmaz.

• Gizli Kasa Dosyaları: Gizli Kasa'ya taşınan fotoğraf ve videolar, biyometrik kimlik doğrulama ile korunan uygulamanın korumalı dosya sisteminde saklanır.

• Kullanıcı Tercihleri: Tema modu, dil tercihi ve tanıtım tamamlanma durumu, cihaz üzerindeki depolama kullanılarak yerel olarak saklanır.`,
      },
      {
        heading: "Talep Ettiğimiz İzinler",
        body: `• Fotoğraf Kitaplığı (Okuma ve Yazma): Uygulamanın çalışması için gereklidir. Galerinizi taramak, ekran görüntülerini tespit etmek, benzer fotoğrafları bulmak, büyük videoları belirlemek ve seçtiğiniz dosyaları silmek veya taşımak için kullanılır.

• Biyometrik Kimlik Doğrulama (Face ID / Touch ID): Yalnızca Gizli Kasa özelliğine erişimi korumak için kullanılır. Biyometrik veriler tamamen işletim sistemi tarafından yönetilir; uygulama biyometrik bilgilere doğrudan erişmez veya saklamaz.`,
      },
      {
        heading: "Üçüncü Taraf SDK'ları",
        body: `• ML Kit Metin Tanıma: Ekran görüntülerini içeriğe göre sınıflandırmak için cihaz üzerinde OCR için kullanılır. Bu SDK tamamen cihazınızda çalışır — hiçbir görüntü veya metin sunucuya gönderilmez.

• Expo Framework Modülleri: Medya kitaplığı erişimi, dosya sistemi, yerelleştirme ve yerel kimlik doğrulama için standart modüller. Bu modüllerin hiçbiri veri toplamaz veya iletmez.

Uygulama herhangi bir üçüncü taraf analitik, reklam veya çökme raporlama hizmeti kullanmaz.`,
      },
      {
        heading: "Veri Güvenliği",
        body: `• Tüm veriler cihazınızın yerel depolamasında kalır
• Gizli Kasa dosyaları cihazınızın biyometrik kimlik doğrulaması ile korunur
• Uygulama korumalı alanı, diğer uygulamaların Gallery Guy'ın saklanan verilerine erişmesini engeller
• Uygulama kullanıcıları izlemez (NSPrivacyTracking false olarak ayarlanmıştır)`,
      },
      {
        heading: "Veri Paylaşımı",
        body: "Hiçbir veriyi üçüncü taraflarla paylaşmaz, satmaz, kiralamaz veya takas etmeyiz. Uygulamadan veri alan sunucumuz yoktur. Hiçbir veri toplamadığımız için paylaşılacak veri de yoktur.",
      },
      {
        heading: "Çocukların Gizliliği",
        body: "Gallery Guy, 13 yaşın altındaki çocuklardan bilerek bilgi toplamaz. Uygulama, hiçbir kişisel bilgi toplamadığı için yaş doğrulaması gerektirmez. Bir ebeveyn veya vasinin endişeleri varsa geliştiriciyle iletişime geçebilir.",
      },
      {
        heading: "Haklarınız",
        body: `Tüm veriler cihazınızda yerel olarak saklandığından, tam kontrole sahipsiniz:

• Erişim Hakkı: Tüm verileriniz zaten cihazınızda.
• Silme Hakkı: Uygulama içinden dosyaları silerek veya uygulamayı tamamen kaldırarak herhangi bir veriyi silebilirsiniz.
• Taşınabilirlik Hakkı: Fotoğraflarınız cihazınızın fotoğraf kitaplığında kalır.
• Vazgeçme Hakkı: Hiçbir veri toplamadığımız için vazgeçilecek bir şey yoktur.`,
      },
      {
        heading: "Veri Saklama",
        body: `• OCR önbelleği: Yerel olarak saklanır, uygulamayı kaldırdığınızda otomatik olarak temizlenir.
• Gizli Kasa dosyaları: Siz geri yükleyene veya silene kadar veya uygulamayı kaldırana kadar kalır.
• Tercihler: Yerel olarak saklanır, uygulama kaldırıldığında temizlenir.`,
      },
      {
        heading: "Bu Politikadaki Değişiklikler",
        body: 'Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu belgenin üst kısmındaki "Yürürlük Tarihi"ne yansıtılacaktır. Değişikliklerden sonra uygulamayı kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.',
      },
      {
        heading: "İletişim",
        body: `Geliştirici: Batur Cihan
E-posta: baturcihan@icloud.com
Ülke: Türkiye`,
      },
    ],
  },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = content[locale as keyof typeof content] ?? content.en;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-12">
            <p className="text-sm font-semibold text-accent">Gallery Guy</p>
            <h1 className="font-heading mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.title}
            </h1>
            <p className="mt-2 text-sm text-muted">{t.effectiveDate}</p>

            <div className="mt-10 space-y-8">
              {t.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-heading text-lg font-semibold text-foreground">
                    {section.heading}
                  </h2>
                  <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-muted">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted">
              Gallery Guy &copy; 2025 Batur Cihan
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

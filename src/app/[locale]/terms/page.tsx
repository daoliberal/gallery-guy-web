import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

const content = {
  en: {
    title: "Terms of Service",
    effectiveDate: "Effective Date: February 22, 2025",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By downloading, installing, or using Gallery Guy, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the app.",
      },
      {
        heading: "Description of Service",
        body: `Gallery Guy is a mobile application for managing and cleaning your photo gallery. Features include:

• Screenshot detection and categorization via OCR
• Similar photo grouping and comparison
• Large video identification
• Hidden Vault with biometric protection
• Smart Clean (swipe-based file review)
• Album management

The app operates entirely on your device with no cloud services.`,
      },
      {
        heading: "License",
        body: "We grant you a non-exclusive, non-transferable, revocable license to use Gallery Guy for personal, non-commercial purposes, subject to these terms.",
      },
      {
        heading: "Your Responsibilities",
        body: `• You are responsible for the content in your photo library.
• You should review files carefully before confirming deletion.
• Deleted files are moved to your device's "Recently Deleted" folder where supported by the operating system, but permanent deletion is irreversible.
• You are responsible for maintaining your device's biometric security for the Hidden Vault feature.`,
      },
      {
        heading: "Intellectual Property",
        body: 'Gallery Guy and its design, code, and branding are owned by the developer. The "Gallery Guy" name, logo, and related assets are the property of Batur Cihan. You may not copy, modify, distribute, or reverse-engineer the app.',
      },
      {
        heading: "Disclaimers",
        body: `• The app is provided "as is" without warranties of any kind.
• We do not guarantee that file deletion will free a specific amount of storage.
• We are not responsible for accidental deletion of files.
• OCR-based screenshot categorization may not be 100% accurate.
• Similar photo detection is approximate and may occasionally group dissimilar photos.
• Maximum liability is limited to the amount paid for the app.`,
      },
      {
        heading: "No Warranty",
        body: "The app is provided without warranty of merchantability or fitness for a particular purpose. We do not guarantee uninterrupted or error-free operation.",
      },
      {
        heading: "Governing Law",
        body: "These terms are governed by the laws of the Republic of Turkey. Any disputes arising from these terms shall be resolved in the courts of Turkey.",
      },
      {
        heading: "Termination",
        body: "You may stop using the app at any time by uninstalling it. We may discontinue the app or any of its features at any time without prior notice.",
      },
      {
        heading: "Apple Terms",
        body: "If you downloaded Gallery Guy from the Apple App Store, you acknowledge that Apple is not responsible for the app and has no obligation to provide maintenance, support, or warranty services. Apple is not liable for any claims related to the app.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may modify these Terms of Service at any time. Continued use of the app after changes constitutes acceptance of the updated terms.",
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
    title: "Kullanım Koşulları",
    effectiveDate: "Yürürlük Tarihi: 22 Şubat 2025",
    sections: [
      {
        heading: "Koşulların Kabulü",
        body: "Gallery Guy'ı indirerek, yükleyerek veya kullanarak bu Kullanım Koşulları'na bağlı olmayı kabul etmiş olursunuz. Bu koşulları kabul etmiyorsanız uygulamayı kullanmayın.",
      },
      {
        heading: "Hizmet Tanımı",
        body: `Gallery Guy, fotoğraf galerinizi yönetmek ve temizlemek için bir mobil uygulamadır. Özellikler:

• OCR ile ekran görüntüsü tespiti ve sınıflandırma
• Benzer fotoğraf gruplama ve karşılaştırma
• Büyük video tespiti
• Biyometrik korumalı Gizli Kasa
• Akıllı Temizlik (kaydırma tabanlı dosya inceleme)
• Albüm yönetimi

Uygulama tamamen cihazınızda çalışır, bulut hizmeti kullanmaz.`,
      },
      {
        heading: "Lisans",
        body: "Size Gallery Guy'ı kişisel, ticari olmayan amaçlarla kullanmanız için münhasır olmayan, devredilemez, iptal edilebilir bir lisans veriyoruz.",
      },
      {
        heading: "Sorumluluklarınız",
        body: `• Fotoğraf kitaplığınızdaki içerikten siz sorumlusunuz.
• Silme işlemini onaylamadan önce dosyaları dikkatlice incelemelisiniz.
• Silinen dosyalar, işletim sistemi tarafından desteklendiğinde cihazınızın "Son Silinenler" klasörüne taşınır, ancak kalıcı silme geri alınamaz.
• Gizli Kasa özelliği için cihazınızın biyometrik güvenliğini korumak sizin sorumluluğunuzdadır.`,
      },
      {
        heading: "Fikri Mülkiyet",
        body: 'Gallery Guy ve tasarımı, kodu ve markası geliştiriciye aittir. "Gallery Guy" adı, logosu ve ilgili varlıklar Batur Cihan\'ın mülkiyetindedir. Uygulamayı kopyalayamaz, değiştiremez, dağıtamaz veya tersine mühendislik yapamazsınız.',
      },
      {
        heading: "Sorumluluk Reddi",
        body: `• Uygulama herhangi bir garanti olmaksızın "olduğu gibi" sunulmaktadır.
• Dosya silmenin belirli bir miktarda depolama alanı açacağını garanti etmiyoruz.
• Dosyaların yanlışlıkla silinmesinden sorumlu değiliz.
• OCR tabanlı ekran görüntüsü sınıflandırması %100 doğru olmayabilir.
• Benzer fotoğraf tespiti yaklaşıktır ve bazen benzer olmayan fotoğrafları gruplayabilir.
• Azami sorumluluk, uygulama için ödenen tutarla sınırlıdır.`,
      },
      {
        heading: "Garanti Yokluğu",
        body: "Uygulama, satılabilirlik veya belirli bir amaca uygunluk garantisi olmaksızın sunulmaktadır. Kesintisiz veya hatasız çalışmayı garanti etmiyoruz.",
      },
      {
        heading: "Yürürlükteki Hukuk",
        body: "Bu koşullar Türkiye Cumhuriyeti yasalarına tabidir. Bu koşullardan doğan uyuşmazlıklar Türkiye mahkemelerinde çözülecektir.",
      },
      {
        heading: "Fesih",
        body: "Uygulamayı istediğiniz zaman kaldırarak kullanmayı bırakabilirsiniz. Uygulamayı veya herhangi bir özelliğini önceden bildirimde bulunmaksızın sonlandırabiliriz.",
      },
      {
        heading: "Apple Koşulları",
        body: "Gallery Guy'ı Apple App Store'dan indirdiyseniz, Apple'ın uygulamadan sorumlu olmadığını ve bakım, destek veya garanti hizmetleri sağlama yükümlülüğünün bulunmadığını kabul edersiniz.",
      },
      {
        heading: "Bu Koşullardaki Değişiklikler",
        body: "Bu Kullanım Koşulları'nı istediğimiz zaman değiştirebiliriz. Değişikliklerden sonra uygulamayı kullanmaya devam etmeniz, güncellenmiş koşulları kabul ettiğiniz anlamına gelir.",
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

export default async function TermsPage({
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

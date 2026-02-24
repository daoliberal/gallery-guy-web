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
  es: {
    title: "Términos de Servicio",
    effectiveDate: "Fecha de vigencia: 22 de febrero de 2025",
    sections: [
      {
        heading: "Aceptación de Términos",
        body: "Al descargar, instalar o usar Gallery Guy, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con estos términos, no uses la aplicación.",
      },
      {
        heading: "Descripción del Servicio",
        body: `Gallery Guy es una aplicación móvil para gestionar y limpiar tu galería de fotos. Las funciones incluyen:

• Detección y categorización de capturas de pantalla mediante OCR
• Agrupación y comparación de fotos similares
• Identificación de videos grandes
• Bóveda oculta con protección biométrica
• Limpieza inteligente (revisión de archivos deslizando)
• Gestión de álbumes

La aplicación funciona completamente en tu dispositivo sin servicios en la nube.`,
      },
      {
        heading: "Licencia",
        body: "Te otorgamos una licencia no exclusiva, no transferible y revocable para usar Gallery Guy con fines personales y no comerciales, sujeta a estos términos.",
      },
      {
        heading: "Tus Responsabilidades",
        body: `• Eres responsable del contenido de tu biblioteca de fotos.
• Debes revisar los archivos cuidadosamente antes de confirmar la eliminación.
• Los archivos eliminados se mueven a la carpeta "Eliminados recientemente" de tu dispositivo cuando lo permite el sistema operativo, pero la eliminación permanente es irreversible.
• Eres responsable de mantener la seguridad biométrica de tu dispositivo para la función de Bóveda Oculta.`,
      },
      {
        heading: "Propiedad Intelectual",
        body: 'Gallery Guy y su diseño, código y marca son propiedad del desarrollador. El nombre "Gallery Guy", el logotipo y los activos relacionados son propiedad de Batur Cihan. No puedes copiar, modificar, distribuir ni realizar ingeniería inversa de la aplicación.',
      },
      {
        heading: "Exención de Responsabilidad",
        body: `• La aplicación se proporciona "tal cual" sin garantías de ningún tipo.
• No garantizamos que la eliminación de archivos libere una cantidad específica de almacenamiento.
• No somos responsables de la eliminación accidental de archivos.
• La categorización de capturas de pantalla basada en OCR puede no ser 100% precisa.
• La detección de fotos similares es aproximada y ocasionalmente puede agrupar fotos diferentes.
• La responsabilidad máxima se limita al monto pagado por la aplicación.`,
      },
      {
        heading: "Sin Garantía",
        body: "La aplicación se proporciona sin garantía de comerciabilidad o idoneidad para un propósito particular. No garantizamos un funcionamiento ininterrumpido o libre de errores.",
      },
      {
        heading: "Ley Aplicable",
        body: "Estos términos se rigen por las leyes de la República de Turquía. Cualquier disputa derivada de estos términos se resolverá en los tribunales de Turquía.",
      },
      {
        heading: "Terminación",
        body: "Puedes dejar de usar la aplicación en cualquier momento desinstalándola. Podemos descontinuar la aplicación o cualquiera de sus funciones en cualquier momento sin previo aviso.",
      },
      {
        heading: "Términos de Apple",
        body: "Si descargaste Gallery Guy desde la Apple App Store, reconoces que Apple no es responsable de la aplicación y no tiene obligación de proporcionar servicios de mantenimiento, soporte o garantía. Apple no es responsable de ninguna reclamación relacionada con la aplicación.",
      },
      {
        heading: "Cambios en Estos Términos",
        body: "Podemos modificar estos Términos de Servicio en cualquier momento. El uso continuado de la aplicación después de los cambios constituye la aceptación de los términos actualizados.",
      },
      {
        heading: "Contacto",
        body: `Desarrollador: Batur Cihan
Correo electrónico: baturcihan@icloud.com
País: Turquía`,
      },
    ],
  },
  fr: {
    title: "Conditions d'Utilisation",
    effectiveDate: "Date d'entrée en vigueur : 22 février 2025",
    sections: [
      {
        heading: "Acceptation des Conditions",
        body: "En téléchargeant, installant ou utilisant Gallery Guy, vous acceptez d'être lié par ces Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, n'utilisez pas l'application.",
      },
      {
        heading: "Description du Service",
        body: `Gallery Guy est une application mobile pour gérer et nettoyer votre galerie de photos. Les fonctionnalités incluent :

• Détection et catégorisation des captures d'écran via OCR
• Regroupement et comparaison de photos similaires
• Identification des grosses vidéos
• Coffre-fort caché avec protection biométrique
• Nettoyage intelligent (examen des fichiers par balayage)
• Gestion des albums

L'application fonctionne entièrement sur votre appareil sans services cloud.`,
      },
      {
        heading: "Licence",
        body: "Nous vous accordons une licence non exclusive, non transférable et révocable pour utiliser Gallery Guy à des fins personnelles et non commerciales, sous réserve de ces conditions.",
      },
      {
        heading: "Vos Responsabilités",
        body: `• Vous êtes responsable du contenu de votre bibliothèque de photos.
• Vous devez vérifier attentivement les fichiers avant de confirmer la suppression.
• Les fichiers supprimés sont déplacés vers le dossier « Supprimés récemment » de votre appareil lorsque le système d'exploitation le permet, mais la suppression permanente est irréversible.
• Vous êtes responsable du maintien de la sécurité biométrique de votre appareil pour la fonction Coffre-fort.`,
      },
      {
        heading: "Propriété Intellectuelle",
        body: "Gallery Guy et son design, son code et sa marque sont la propriété du développeur. Le nom « Gallery Guy », le logo et les actifs associés sont la propriété de Batur Cihan. Vous ne pouvez pas copier, modifier, distribuer ou effectuer de l'ingénierie inverse sur l'application.",
      },
      {
        heading: "Clause de Non-Responsabilité",
        body: `• L'application est fournie « en l'état » sans garantie d'aucune sorte.
• Nous ne garantissons pas que la suppression de fichiers libérera une quantité spécifique de stockage.
• Nous ne sommes pas responsables de la suppression accidentelle de fichiers.
• La catégorisation des captures d'écran basée sur l'OCR peut ne pas être précise à 100 %.
• La détection de photos similaires est approximative et peut occasionnellement regrouper des photos différentes.
• La responsabilité maximale est limitée au montant payé pour l'application.`,
      },
      {
        heading: "Absence de Garantie",
        body: "L'application est fournie sans garantie de qualité marchande ou d'adéquation à un usage particulier. Nous ne garantissons pas un fonctionnement ininterrompu ou sans erreur.",
      },
      {
        heading: "Droit Applicable",
        body: "Ces conditions sont régies par les lois de la République de Turquie. Tout litige découlant de ces conditions sera résolu devant les tribunaux de Turquie.",
      },
      {
        heading: "Résiliation",
        body: "Vous pouvez cesser d'utiliser l'application à tout moment en la désinstallant. Nous pouvons interrompre l'application ou l'une de ses fonctionnalités à tout moment sans préavis.",
      },
      {
        heading: "Conditions Apple",
        body: "Si vous avez téléchargé Gallery Guy depuis l'Apple App Store, vous reconnaissez qu'Apple n'est pas responsable de l'application et n'a aucune obligation de fournir des services de maintenance, d'assistance ou de garantie. Apple n'est pas responsable des réclamations liées à l'application.",
      },
      {
        heading: "Modifications de ces Conditions",
        body: "Nous pouvons modifier ces Conditions d'Utilisation à tout moment. L'utilisation continue de l'application après les modifications constitue l'acceptation des conditions mises à jour.",
      },
      {
        heading: "Contact",
        body: `Développeur : Batur Cihan
E-mail : baturcihan@icloud.com
Pays : Turquie`,
      },
    ],
  },
  de: {
    title: "Nutzungsbedingungen",
    effectiveDate: "Gültig ab: 22. Februar 2025",
    sections: [
      {
        heading: "Annahme der Bedingungen",
        body: "Durch das Herunterladen, Installieren oder Nutzen von Gallery Guy erklärst du dich mit diesen Nutzungsbedingungen einverstanden. Wenn du diesen Bedingungen nicht zustimmst, nutze die App nicht.",
      },
      {
        heading: "Beschreibung des Dienstes",
        body: `Gallery Guy ist eine mobile App zur Verwaltung und Bereinigung deiner Fotogalerie. Die Funktionen umfassen:

• Screenshot-Erkennung und -Kategorisierung via OCR
• Gruppierung und Vergleich ähnlicher Fotos
• Erkennung großer Videos
• Versteckter Tresor mit biometrischem Schutz
• Intelligente Bereinigung (wischbasierte Dateiprüfung)
• Albumverwaltung

Die App arbeitet vollständig auf deinem Gerät ohne Cloud-Dienste.`,
      },
      {
        heading: "Lizenz",
        body: "Wir gewähren dir eine nicht-exklusive, nicht übertragbare, widerrufliche Lizenz zur Nutzung von Gallery Guy für persönliche, nicht-kommerzielle Zwecke, vorbehaltlich dieser Bedingungen.",
      },
      {
        heading: "Deine Verantwortlichkeiten",
        body: `• Du bist für den Inhalt deiner Fotobibliothek verantwortlich.
• Du solltest Dateien sorgfältig prüfen, bevor du die Löschung bestätigst.
• Gelöschte Dateien werden in den Ordner "Zuletzt gelöscht" deines Geräts verschoben, sofern vom Betriebssystem unterstützt, aber die permanente Löschung ist unwiderruflich.
• Du bist für die Aufrechterhaltung der biometrischen Sicherheit deines Geräts für die Tresor-Funktion verantwortlich.`,
      },
      {
        heading: "Geistiges Eigentum",
        body: 'Gallery Guy und sein Design, Code und Branding gehören dem Entwickler. Der Name "Gallery Guy", das Logo und zugehörige Assets sind Eigentum von Batur Cihan. Du darfst die App nicht kopieren, modifizieren, verteilen oder zurückentwickeln.',
      },
      {
        heading: "Haftungsausschluss",
        body: `• Die App wird "wie besehen" ohne jegliche Gewährleistung bereitgestellt.
• Wir garantieren nicht, dass das Löschen von Dateien eine bestimmte Menge an Speicherplatz freigibt.
• Wir sind nicht verantwortlich für versehentliches Löschen von Dateien.
• Die OCR-basierte Screenshot-Kategorisierung ist möglicherweise nicht 100% genau.
• Die Erkennung ähnlicher Fotos ist approximativ und kann gelegentlich unterschiedliche Fotos gruppieren.
• Die maximale Haftung ist auf den für die App gezahlten Betrag begrenzt.`,
      },
      {
        heading: "Keine Garantie",
        body: "Die App wird ohne Garantie der Marktfähigkeit oder Eignung für einen bestimmten Zweck bereitgestellt. Wir garantieren keinen unterbrechungsfreien oder fehlerfreien Betrieb.",
      },
      {
        heading: "Anwendbares Recht",
        body: "Diese Bedingungen unterliegen den Gesetzen der Republik Türkei. Streitigkeiten aus diesen Bedingungen werden vor den Gerichten der Türkei verhandelt.",
      },
      {
        heading: "Kündigung",
        body: "Du kannst die Nutzung der App jederzeit durch Deinstallation beenden. Wir können die App oder einzelne Funktionen jederzeit ohne Vorankündigung einstellen.",
      },
      {
        heading: "Apple-Bedingungen",
        body: "Wenn du Gallery Guy aus dem Apple App Store heruntergeladen hast, erkennst du an, dass Apple nicht für die App verantwortlich ist und keine Verpflichtung hat, Wartungs-, Support- oder Garantieleistungen zu erbringen. Apple haftet nicht für Ansprüche im Zusammenhang mit der App.",
      },
      {
        heading: "Änderungen dieser Bedingungen",
        body: "Wir können diese Nutzungsbedingungen jederzeit ändern. Die fortgesetzte Nutzung der App nach Änderungen gilt als Annahme der aktualisierten Bedingungen.",
      },
      {
        heading: "Kontakt",
        body: `Entwickler: Batur Cihan
E-Mail: baturcihan@icloud.com
Land: Türkei`,
      },
    ],
  },
  ar: {
    title: "شروط الخدمة",
    effectiveDate: "تاريخ السريان: 22 فبراير 2025",
    sections: [
      {
        heading: "قبول الشروط",
        body: "بتحميل أو تثبيت أو استخدام Gallery Guy، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، لا تستخدم التطبيق.",
      },
      {
        heading: "وصف الخدمة",
        body: `Gallery Guy هو تطبيق جوال لإدارة وتنظيف معرض الصور الخاص بك. تشمل المميزات:

\u2022 كشف وتصنيف لقطات الشاشة عبر OCR
\u2022 تجميع ومقارنة الصور المتشابهة
\u2022 تحديد الفيديوهات الكبيرة
\u2022 خزنة مخفية مع حماية بيومترية
\u2022 تنظيف ذكي (مراجعة الملفات بالسحب)
\u2022 إدارة الألبومات

يعمل التطبيق بالكامل على جهازك بدون خدمات سحابية.`,
      },
      {
        heading: "الترخيص",
        body: "نمنحك ترخيصاً غير حصري وغير قابل للتحويل وقابل للإلغاء لاستخدام Gallery Guy لأغراض شخصية وغير تجارية، وفقاً لهذه الشروط.",
      },
      {
        heading: "مسؤولياتك",
        body: `\u2022 أنت مسؤول عن المحتوى في مكتبة صورك.
\u2022 يجب مراجعة الملفات بعناية قبل تأكيد الحذف.
\u2022 يتم نقل الملفات المحذوفة إلى مجلد "المحذوفة مؤخراً" في جهازك حيث يدعم نظام التشغيل ذلك، لكن الحذف الدائم لا يمكن التراجع عنه.
\u2022 أنت مسؤول عن الحفاظ على أمان جهازك البيومتري لميزة الخزنة المخفية.`,
      },
      {
        heading: "الملكية الفكرية",
        body: "Gallery Guy وتصميمه وكوده وعلامته التجارية مملوكة للمطور. اسم \"Gallery Guy\" والشعار والأصول ذات الصلة هي ملك Batur Cihan. لا يجوز لك نسخ أو تعديل أو توزيع أو إجراء هندسة عكسية للتطبيق.",
      },
      {
        heading: "إخلاء المسؤولية",
        body: `\u2022 يُقدَّم التطبيق "كما هو" بدون ضمانات من أي نوع.
\u2022 لا نضمن أن حذف الملفات سيوفر مقداراً محدداً من التخزين.
\u2022 لسنا مسؤولين عن الحذف العرضي للملفات.
\u2022 تصنيف لقطات الشاشة بناءً على OCR قد لا يكون دقيقاً بنسبة 100%.
\u2022 كشف الصور المتشابهة تقريبي وقد يجمع أحياناً صوراً غير متشابهة.
\u2022 الحد الأقصى للمسؤولية يقتصر على المبلغ المدفوع مقابل التطبيق.`,
      },
      {
        heading: "عدم الضمان",
        body: "يُقدَّم التطبيق بدون ضمان قابلية التسويق أو الملاءمة لغرض معين. لا نضمن التشغيل المتواصل أو الخالي من الأخطاء.",
      },
      {
        heading: "القانون الحاكم",
        body: "تخضع هذه الشروط لقوانين الجمهورية التركية. أي نزاعات ناشئة عن هذه الشروط يتم حلها في محاكم تركيا.",
      },
      {
        heading: "الإنهاء",
        body: "يمكنك التوقف عن استخدام التطبيق في أي وقت بإلغاء تثبيته. يمكننا إيقاف التطبيق أو أي من مميزاته في أي وقت بدون إشعار مسبق.",
      },
      {
        heading: "شروط Apple",
        body: "إذا قمت بتحميل Gallery Guy من Apple App Store، فإنك تقر بأن Apple ليست مسؤولة عن التطبيق وليس عليها أي التزام بتقديم خدمات الصيانة أو الدعم أو الضمان. Apple ليست مسؤولة عن أي مطالبات متعلقة بالتطبيق.",
      },
      {
        heading: "تغييرات على هذه الشروط",
        body: "يمكننا تعديل شروط الخدمة هذه في أي وقت. استمرار استخدام التطبيق بعد التغييرات يعني قبول الشروط المحدثة.",
      },
      {
        heading: "التواصل",
        body: `المطور: Batur Cihan
البريد الإلكتروني: baturcihan@icloud.com
البلد: تركيا`,
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

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
  ko: {
    title: "이용약관",
    effectiveDate: "시행일: 2025년 2월 22일",
    sections: [
      {
        heading: "약관 동의",
        body: "Gallery Guy를 다운로드, 설치 또는 사용함으로써 귀하는 본 이용약관에 동의하게 됩니다. 본 약관에 동의하지 않는 경우 앱을 사용하지 마세요.",
      },
      {
        heading: "서비스 설명",
        body: `Gallery Guy는 사진 갤러리를 관리하고 정리하는 모바일 앱입니다. 기능은 다음과 같습니다:

• OCR을 통한 스크린샷 감지 및 분류
• 비슷한 사진 그룹화 및 비교
• 대용량 동영상 식별
• 생체 인증 보호가 적용된 숨김 금고
• 스마트 정리 (스와이프 기반 파일 검토)
• 앨범 관리

앱은 클라우드 서비스 없이 기기에서 완전히 작동합니다.`,
      },
      {
        heading: "라이선스",
        body: "당사는 귀하에게 본 약관에 따라 Gallery Guy를 개인적, 비상업적 목적으로 사용할 수 있는 비독점적, 양도 불가능한, 취소 가능한 라이선스를 부여합니다.",
      },
      {
        heading: "귀하의 책임",
        body: `• 사진 보관함의 내용물에 대한 책임은 귀하에게 있습니다.
• 삭제를 확인하기 전에 파일을 신중하게 확인해야 합니다.
• 삭제된 파일은 운영 체제에서 지원하는 경우 기기의 "최근 삭제" 폴더로 이동되지만, 영구 삭제는 되돌릴 수 없습니다.
• 숨김 금고 기능을 위한 기기의 생체 보안 유지는 귀하의 책임입니다.`,
      },
      {
        heading: "지적 재산권",
        body: "Gallery Guy와 그 디자인, 코드 및 브랜드는 개발자의 소유입니다. \"Gallery Guy\" 이름, 로고 및 관련 자산은 Batur Cihan의 소유입니다. 앱을 복사, 수정, 배포 또는 역설계할 수 없습니다.",
      },
      {
        heading: "면책 조항",
        body: `• 앱은 어떠한 종류의 보증 없이 "있는 그대로" 제공됩니다.
• 파일 삭제로 특정 양의 저장 공간이 확보된다고 보장하지 않습니다.
• 파일의 실수로 인한 삭제에 대해 책임지지 않습니다.
• OCR 기반 스크린샷 분류는 100% 정확하지 않을 수 있습니다.
• 비슷한 사진 감지는 근사치이며 가끔 다른 사진을 그룹으로 묶을 수 있습니다.
• 최대 책임은 앱에 대해 지불한 금액으로 제한됩니다.`,
      },
      {
        heading: "보증 없음",
        body: "앱은 상품성 또는 특정 목적에 대한 적합성 보증 없이 제공됩니다. 중단 없는 또는 오류 없는 작동을 보장하지 않습니다.",
      },
      {
        heading: "준거법",
        body: "본 약관은 터키 공화국 법률의 적용을 받습니다. 본 약관에서 발생하는 모든 분쟁은 터키 법원에서 해결됩니다.",
      },
      {
        heading: "해지",
        body: "앱을 삭제하여 언제든지 사용을 중단할 수 있습니다. 당사는 사전 통지 없이 앱 또는 그 기능을 중단할 수 있습니다.",
      },
      {
        heading: "Apple 약관",
        body: "Apple App Store에서 Gallery Guy를 다운로드한 경우, Apple은 앱에 대해 책임이 없으며 유지보수, 지원 또는 보증 서비스를 제공할 의무가 없음을 인정합니다. Apple은 앱과 관련된 어떤 청구에 대해서도 책임지지 않습니다.",
      },
      {
        heading: "약관 변경",
        body: "당사는 언제든지 본 이용약관을 수정할 수 있습니다. 변경 후 앱의 계속 사용은 업데이트된 약관의 수락을 의미합니다.",
      },
      {
        heading: "연락처",
        body: `개발자: Batur Cihan
이메일: baturcihan@icloud.com
국가: 터키`,
      },
    ],
  },
  ru: {
    title: "Условия использования",
    effectiveDate: "Дата вступления в силу: 22 февраля 2025 г.",
    sections: [
      {
        heading: "Принятие условий",
        body: "Загружая, устанавливая или используя Gallery Guy, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны с этими условиями, не используйте приложение.",
      },
      {
        heading: "Описание сервиса",
        body: `Gallery Guy — мобильное приложение для управления и очистки вашей фотогалереи. Функции включают:

• Обнаружение и категоризация скриншотов через OCR
• Группировка и сравнение похожих фото
• Обнаружение больших видео
• Скрытое хранилище с биометрической защитой
• Умная очистка (свайп-обзор файлов)
• Управление альбомами

Приложение работает полностью на вашем устройстве без облачных сервисов.`,
      },
      {
        heading: "Лицензия",
        body: "Мы предоставляем вам неисключительную, непередаваемую, отзывную лицензию на использование Gallery Guy в личных, некоммерческих целях в соответствии с настоящими условиями.",
      },
      {
        heading: "Ваши обязанности",
        body: `• Вы несёте ответственность за содержимое своей фототеки.
• Следует внимательно проверять файлы перед подтверждением удаления.
• Удалённые файлы перемещаются в папку «Недавно удалённые» на вашем устройстве, если это поддерживается операционной системой, но окончательное удаление необратимо.
• Вы несёте ответственность за поддержание биометрической безопасности вашего устройства для функции Скрытого хранилища.`,
      },
      {
        heading: "Интеллектуальная собственность",
        body: "Gallery Guy, его дизайн, код и бренд принадлежат разработчику. Название «Gallery Guy», логотип и связанные активы являются собственностью Batur Cihan. Вы не можете копировать, модифицировать, распространять или осуществлять обратную разработку приложения.",
      },
      {
        heading: "Отказ от ответственности",
        body: `• Приложение предоставляется «как есть» без каких-либо гарантий.
• Мы не гарантируем, что удаление файлов освободит определённый объём хранилища.
• Мы не несём ответственности за случайное удаление файлов.
• Категоризация скриншотов на основе OCR может быть не на 100% точной.
• Обнаружение похожих фото является приблизительным и иногда может группировать непохожие фото.
• Максимальная ответственность ограничивается суммой, уплаченной за приложение.`,
      },
      {
        heading: "Отсутствие гарантий",
        body: "Приложение предоставляется без гарантий товарной пригодности или пригодности для определённой цели. Мы не гарантируем бесперебойную или безошибочную работу.",
      },
      {
        heading: "Применимое право",
        body: "Настоящие условия регулируются законодательством Турецкой Республики. Любые споры, возникающие из настоящих условий, разрешаются в судах Турции.",
      },
      {
        heading: "Прекращение",
        body: "Вы можете прекратить использование приложения в любое время, удалив его. Мы можем прекратить работу приложения или любой из его функций в любое время без предварительного уведомления.",
      },
      {
        heading: "Условия Apple",
        body: "Если вы загрузили Gallery Guy из Apple App Store, вы признаёте, что Apple не несёт ответственности за приложение и не обязана предоставлять услуги по обслуживанию, поддержке или гарантии. Apple не несёт ответственности за любые претензии, связанные с приложением.",
      },
      {
        heading: "Изменения условий",
        body: "Мы можем изменить настоящие Условия использования в любое время. Продолжение использования приложения после изменений означает принятие обновлённых условий.",
      },
      {
        heading: "Контакты",
        body: `Разработчик: Batur Cihan
Email: baturcihan@icloud.com
Страна: Турция`,
      },
    ],
  },
  pt: {
    title: "Termos de Serviço",
    effectiveDate: "Data de vigência: 22 de fevereiro de 2025",
    sections: [
      {
        heading: "Aceitação dos Termos",
        body: "Ao transferir, instalar ou utilizar o Gallery Guy, concorda em ficar vinculado a estes Termos de Serviço. Se não concordar com estes termos, não utilize a app.",
      },
      {
        heading: "Descrição do Serviço",
        body: `O Gallery Guy é uma aplicação móvel para gerir e limpar a sua galeria de fotos. As funcionalidades incluem:

• Deteção e categorização de capturas de ecrã via OCR
• Agrupamento e comparação de fotos semelhantes
• Identificação de vídeos grandes
• Cofre oculto com proteção biométrica
• Limpeza inteligente (revisão de ficheiros por deslize)
• Gestão de álbuns

A app funciona inteiramente no seu dispositivo sem serviços na nuvem.`,
      },
      {
        heading: "Licença",
        body: "Concedemos-lhe uma licença não exclusiva, intransferível e revogável para utilizar o Gallery Guy para fins pessoais e não comerciais, sujeita a estes termos.",
      },
      {
        heading: "As Suas Responsabilidades",
        body: `• É responsável pelo conteúdo na sua biblioteca de fotos.
• Deve verificar cuidadosamente os ficheiros antes de confirmar a eliminação.
• Os ficheiros eliminados são movidos para a pasta "Eliminados Recentemente" do seu dispositivo onde suportado pelo sistema operativo, mas a eliminação permanente é irreversível.
• É responsável por manter a segurança biométrica do seu dispositivo para a funcionalidade Cofre.`,
      },
      {
        heading: "Propriedade Intelectual",
        body: 'O Gallery Guy e o seu design, código e marca são propriedade do programador. O nome "Gallery Guy", o logótipo e os ativos relacionados são propriedade de Batur Cihan. Não pode copiar, modificar, distribuir ou fazer engenharia reversa da app.',
      },
      {
        heading: "Exclusões de Responsabilidade",
        body: `• A app é fornecida "como está" sem garantias de qualquer tipo.
• Não garantimos que a eliminação de ficheiros libertará uma quantidade específica de espaço.
• Não somos responsáveis pela eliminação acidental de ficheiros.
• A categorização de capturas de ecrã baseada em OCR pode não ser 100% precisa.
• A deteção de fotos semelhantes é aproximada e pode ocasionalmente agrupar fotos diferentes.
• A responsabilidade máxima é limitada ao valor pago pela app.`,
      },
      {
        heading: "Sem Garantia",
        body: "A app é fornecida sem garantia de comercialização ou adequação a um fim específico. Não garantimos um funcionamento ininterrupto ou isento de erros.",
      },
      {
        heading: "Lei Aplicável",
        body: "Estes termos são regidos pelas leis da República da Turquia. Quaisquer litígios decorrentes destes termos serão resolvidos nos tribunais da Turquia.",
      },
      {
        heading: "Rescisão",
        body: "Pode deixar de utilizar a app a qualquer momento desinstalando-a. Podemos descontinuar a app ou qualquer das suas funcionalidades a qualquer momento sem aviso prévio.",
      },
      {
        heading: "Termos da Apple",
        body: "Se transferiu o Gallery Guy da Apple App Store, reconhece que a Apple não é responsável pela app e não tem qualquer obrigação de fornecer serviços de manutenção, suporte ou garantia. A Apple não é responsável por quaisquer reclamações relacionadas com a app.",
      },
      {
        heading: "Alterações a Estes Termos",
        body: "Podemos modificar estes Termos de Serviço a qualquer momento. A utilização continuada da app após as alterações constitui aceitação dos termos atualizados.",
      },
      {
        heading: "Contacto",
        body: `Programador: Batur Cihan
Email: baturcihan@icloud.com
País: Turquia`,
      },
    ],
  },
  it: {
    title: "Condizioni di Servizio",
    effectiveDate: "Data di entrata in vigore: 22 febbraio 2025",
    sections: [
      {
        heading: "Accettazione dei Termini",
        body: "Scaricando, installando o utilizzando Gallery Guy, accetti di essere vincolato da queste Condizioni di Servizio. Se non accetti questi termini, non utilizzare l'app.",
      },
      {
        heading: "Descrizione del Servizio",
        body: `Gallery Guy è un'applicazione mobile per gestire e pulire la tua galleria foto. Le funzionalità includono:

• Rilevamento e categorizzazione degli screenshot tramite OCR
• Raggruppamento e confronto di foto simili
• Identificazione di video grandi
• Cassaforte nascosta con protezione biometrica
• Pulizia intelligente (revisione file con swipe)
• Gestione album

L'app funziona interamente sul tuo dispositivo senza servizi cloud.`,
      },
      {
        heading: "Licenza",
        body: "Ti concediamo una licenza non esclusiva, non trasferibile e revocabile per utilizzare Gallery Guy per scopi personali e non commerciali, soggetta a questi termini.",
      },
      {
        heading: "Le Tue Responsabilità",
        body: `• Sei responsabile del contenuto nella tua libreria foto.
• Dovresti verificare attentamente i file prima di confermare l'eliminazione.
• I file eliminati vengono spostati nella cartella "Eliminati di recente" del tuo dispositivo dove supportato dal sistema operativo, ma l'eliminazione permanente è irreversibile.
• Sei responsabile del mantenimento della sicurezza biometrica del tuo dispositivo per la funzione Cassaforte.`,
      },
      {
        heading: "Proprietà Intellettuale",
        body: 'Gallery Guy e il suo design, codice e marchio sono di proprietà dello sviluppatore. Il nome "Gallery Guy", il logo e le risorse correlate sono proprietà di Batur Cihan. Non puoi copiare, modificare, distribuire o effettuare reverse engineering dell\'app.',
      },
      {
        heading: "Esclusioni di Responsabilità",
        body: `• L'app è fornita "così com'è" senza garanzie di alcun tipo.
• Non garantiamo che l'eliminazione di file libererà una quantità specifica di spazio.
• Non siamo responsabili per l'eliminazione accidentale di file.
• La categorizzazione degli screenshot basata su OCR potrebbe non essere accurata al 100%.
• Il rilevamento di foto simili è approssimativo e potrebbe occasionalmente raggruppare foto dissimili.
• La responsabilità massima è limitata all'importo pagato per l'app.`,
      },
      {
        heading: "Nessuna Garanzia",
        body: "L'app è fornita senza garanzia di commerciabilità o idoneità per uno scopo particolare. Non garantiamo un funzionamento ininterrotto o privo di errori.",
      },
      {
        heading: "Legge Applicabile",
        body: "Questi termini sono regolati dalle leggi della Repubblica di Turchia. Qualsiasi controversia derivante da questi termini sarà risolta presso i tribunali della Turchia.",
      },
      {
        heading: "Risoluzione",
        body: "Puoi smettere di usare l'app in qualsiasi momento disinstallandola. Possiamo interrompere l'app o qualsiasi delle sue funzionalità in qualsiasi momento senza preavviso.",
      },
      {
        heading: "Termini Apple",
        body: "Se hai scaricato Gallery Guy dall'Apple App Store, riconosci che Apple non è responsabile dell'app e non ha alcun obbligo di fornire servizi di manutenzione, supporto o garanzia. Apple non è responsabile per eventuali reclami relativi all'app.",
      },
      {
        heading: "Modifiche a Questi Termini",
        body: "Possiamo modificare queste Condizioni di Servizio in qualsiasi momento. L'uso continuato dell'app dopo le modifiche costituisce accettazione dei termini aggiornati.",
      },
      {
        heading: "Contatto",
        body: `Sviluppatore: Batur Cihan
Email: baturcihan@icloud.com
Paese: Turchia`,
      },
    ],
  },
  zh: {
    title: "服务条款",
    effectiveDate: "生效日期：2025年2月22日",
    sections: [
      {
        heading: "条款接受",
        body: "下载、安装或使用Gallery Guy即表示您同意受本服务条款的约束。如果您不同意这些条款，请勿使用该应用。",
      },
      {
        heading: "服务描述",
        body: `Gallery Guy是一款用于管理和清理照片库的移动应用。功能包括：

• 通过OCR检测和分类截图
• 相似照片分组和比较
• 大型视频识别
• 带生物识别保护的隐藏保险箱
• 智能清理（滑动式文件审查）
• 相册管理

应用完全在您的设备上运行，不使用云服务。`,
      },
      {
        heading: "许可证",
        body: "我们授予您一项非独占、不可转让、可撤销的许可证，允许您根据本条款将Gallery Guy用于个人非商业目的。",
      },
      {
        heading: "您的责任",
        body: `• 您对照片库中的内容负责。
• 在确认删除之前，您应仔细检查文件。
• 删除的文件在操作系统支持的情况下会移至设备的"最近删除"文件夹，但永久删除不可撤销。
• 您有责任维护设备的生物识别安全以使用隐藏保险箱功能。`,
      },
      {
        heading: "知识产权",
        body: "Gallery Guy及其设计、代码和品牌归开发者所有。\"Gallery Guy\"名称、标志和相关资产为Batur Cihan的财产。您不得复制、修改、分发或逆向工程该应用。",
      },
      {
        heading: "免责声明",
        body: `• 应用按"原样"提供，不提供任何形式的保证。
• 我们不保证删除文件会释放特定数量的存储空间。
• 我们不对文件的意外删除负责。
• 基于OCR的截图分类可能不是100%准确。
• 相似照片检测是近似的，偶尔可能将不相似的照片分为一组。
• 最大责任限于为应用支付的金额。`,
      },
      {
        heading: "无保证",
        body: "应用不提供适销性或特定用途适用性的保证。我们不保证不间断或无错误的运行。",
      },
      {
        heading: "适用法律",
        body: "本条款受土耳其共和国法律管辖。因本条款引起的任何争议将在土耳其法院解决。",
      },
      {
        heading: "终止",
        body: "您可以随时通过卸载应用来停止使用。我们可以随时在不事先通知的情况下停止应用或其任何功能。",
      },
      {
        heading: "Apple条款",
        body: "如果您从Apple App Store下载了Gallery Guy，您承认Apple对该应用不承担责任，且没有义务提供维护、支持或保修服务。Apple不对与该应用相关的任何索赔负责。",
      },
      {
        heading: "条款变更",
        body: "我们可以随时修改本服务条款。在变更后继续使用应用即表示接受更新后的条款。",
      },
      {
        heading: "联系方式",
        body: `开发者：Batur Cihan
电子邮件：baturcihan@icloud.com
国家：土耳其`,
      },
    ],
  },
  hi: {
    title: "सेवा की शर्तें",
    effectiveDate: "प्रभावी तिथि: 22 फ़रवरी 2025",
    sections: [
      {
        heading: "शर्तों की स्वीकृति",
        body: "Gallery Guy को डाउनलोड, इंस्टॉल या उपयोग करके, आप इन सेवा की शर्तों से बंधे होने के लिए सहमत होते हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो ऐप का उपयोग न करें।",
      },
      {
        heading: "सेवा का विवरण",
        body: `Gallery Guy आपकी फोटो गैलरी को मैनेज और साफ़ करने के लिए एक मोबाइल ऐप है। फ़ीचर्स में शामिल हैं:

• OCR के ज़रिए स्क्रीनशॉट डिटेक्शन और कैटेगराइज़ेशन
• समान फोटो ग्रुपिंग और तुलना
• बड़ी वीडियो पहचान
• बायोमेट्रिक प्रोटेक्शन के साथ हिडन वॉल्ट
• स्मार्ट क्लीन (स्वाइप-बेस्ड फ़ाइल रिव्यू)
• एल्बम मैनेजमेंट

ऐप पूरी तरह आपके डिवाइस पर काम करता है, कोई क्लाउड सर्विस नहीं।`,
      },
      {
        heading: "लाइसेंस",
        body: "हम आपको इन शर्तों के अधीन Gallery Guy को व्यक्तिगत, गैर-व्यावसायिक उद्देश्यों के लिए उपयोग करने का एक गैर-विशेष, गैर-हस्तांतरणीय, रद्द करने योग्य लाइसेंस देते हैं।",
      },
      {
        heading: "आपकी ज़िम्मेदारियां",
        body: `• आपकी फोटो लाइब्रेरी की सामग्री के लिए आप ज़िम्मेदार हैं।
• डिलीट कन्फ़र्म करने से पहले फ़ाइलों को ध्यान से जांचें।
• डिलीट की गई फ़ाइलें ऑपरेटिंग सिस्टम द्वारा समर्थित होने पर डिवाइस के "रीसेंटली डिलीटेड" फ़ोल्डर में चली जाती हैं, लेकिन परमानेंट डिलीट अपरिवर्तनीय है।
• हिडन वॉल्ट फ़ीचर के लिए अपने डिवाइस की बायोमेट्रिक सिक्योरिटी बनाए रखना आपकी ज़िम्मेदारी है।`,
      },
      {
        heading: "बौद्धिक संपदा",
        body: "Gallery Guy और इसका डिज़ाइन, कोड और ब्रांडिंग डेवलपर के स्वामित्व में हैं। \"Gallery Guy\" नाम, लोगो और संबंधित संपत्तियां Batur Cihan की संपत्ति हैं। आप ऐप को कॉपी, मॉडिफ़ाई, डिस्ट्रीब्यूट या रिवर्स-इंजीनियर नहीं कर सकते।",
      },
      {
        heading: "अस्वीकरण",
        body: `• ऐप बिना किसी वारंटी के "जैसा है" प्रदान किया जाता है।
• हम गारंटी नहीं देते कि फ़ाइल डिलीट करने से कितना स्टोरेज खाली होगा।
• हम फ़ाइलों के गलती से डिलीट होने के लिए ज़िम्मेदार नहीं हैं।
• OCR-बेस्ड स्क्रीनशॉट कैटेगराइज़ेशन 100% सटीक नहीं हो सकता।
• समान फोटो डिटेक्शन अनुमानित है और कभी-कभी अलग-अलग फोटो को ग्रुप कर सकता है।
• अधिकतम दायित्व ऐप के लिए भुगतान की गई राशि तक सीमित है।`,
      },
      {
        heading: "कोई वारंटी नहीं",
        body: "ऐप बिक्री योग्यता या किसी विशेष उद्देश्य के लिए उपयुक्तता की वारंटी के बिना प्रदान किया जाता है। हम निर्बाध या त्रुटि-मुक्त संचालन की गारंटी नहीं देते।",
      },
      {
        heading: "लागू कानून",
        body: "ये शर्तें तुर्की गणराज्य के कानूनों द्वारा शासित हैं। इन शर्तों से उत्पन्न किसी भी विवाद का समाधान तुर्की की अदालतों में किया जाएगा।",
      },
      {
        heading: "समाप्ति",
        body: "आप किसी भी समय ऐप को अनइंस्टॉल करके उपयोग बंद कर सकते हैं। हम बिना पूर्व सूचना के किसी भी समय ऐप या इसके किसी फ़ीचर को बंद कर सकते हैं।",
      },
      {
        heading: "Apple की शर्तें",
        body: "यदि आपने Apple App Store से Gallery Guy डाउनलोड किया है, तो आप स्वीकार करते हैं कि Apple ऐप के लिए ज़िम्मेदार नहीं है और उसका मेंटेनेंस, सपोर्ट या वारंटी सेवाएं प्रदान करने का कोई दायित्व नहीं है। Apple ऐप से संबंधित किसी भी दावे के लिए उत्तरदायी नहीं है।",
      },
      {
        heading: "शर्तों में बदलाव",
        body: "हम किसी भी समय इन सेवा की शर्तों को संशोधित कर सकते हैं। बदलाव के बाद ऐप का निरंतर उपयोग अपडेटेड शर्तों की स्वीकृति माना जाएगा।",
      },
      {
        heading: "संपर्क",
        body: `डेवलपर: Batur Cihan
ईमेल: baturcihan@icloud.com
देश: तुर्की`,
      },
    ],
  },
  ja: {
    title: "利用規約",
    effectiveDate: "発効日：2025年2月22日",
    sections: [
      {
        heading: "規約への同意",
        body: "Gallery Guyをダウンロード、インストール、または使用することにより、あなたはこの利用規約に拘束されることに同意するものとします。これらの条件に同意しない場合は、アプリを使用しないでください。",
      },
      {
        heading: "サービスの説明",
        body: `Gallery Guyは、写真ギャラリーの管理と整理のためのモバイルアプリです。機能には以下が含まれます：

• OCRによるスクリーンショットの検出と分類
• 似た写真のグループ化と比較
• 大容量動画の識別
• 生体認証保護付きの非表示ボールト
• スマートクリーン（スワイプベースのファイルレビュー）
• アルバム管理

アプリはクラウドサービスなしで完全にデバイス上で動作します。`,
      },
      {
        heading: "ライセンス",
        body: "当社は、これらの条件に従い、Gallery Guyを個人的、非商業的目的で使用するための非独占的、譲渡不可、取り消し可能なライセンスをお客様に付与します。",
      },
      {
        heading: "お客様の責任",
        body: `• 写真ライブラリのコンテンツについてはお客様が責任を負います。
• 削除を確認する前にファイルを慎重に確認してください。
• 削除されたファイルは、OSがサポートしている場合、デバイスの「最近削除した項目」フォルダに移動されますが、完全な削除は元に戻せません。
• 非表示ボールト機能のためにデバイスの生体認証セキュリティを維持する責任はお客様にあります。`,
      },
      {
        heading: "知的財産権",
        body: "Gallery Guyとそのデザイン、コード、ブランディングは開発者に帰属します。\"Gallery Guy\"の名前、ロゴ、および関連資産はBatur Cihanの所有物です。アプリのコピー、変更、配布、またはリバースエンジニアリングはできません。",
      },
      {
        heading: "免責事項",
        body: `• アプリはいかなる種類の保証もなく「現状のまま」提供されます。
• ファイルの削除により特定量のストレージが解放されることを保証しません。
• ファイルの誤削除について責任を負いません。
• OCRベースのスクリーンショット分類は100%正確ではない場合があります。
• 似た写真の検出は概算であり、異なる写真をグループ化する場合があります。
• 最大責任はアプリに対して支払った金額に限定されます。`,
      },
      {
        heading: "保証の否認",
        body: "アプリは商品性または特定目的への適合性の保証なしに提供されます。中断のない、またはエラーのない動作を保証しません。",
      },
      {
        heading: "準拠法",
        body: "これらの条件はトルコ共和国の法律に準拠します。これらの条件から生じる紛争はトルコの裁判所で解決されます。",
      },
      {
        heading: "解約",
        body: "アプリをアンインストールすることにより、いつでも使用を停止できます。当社は事前の通知なく、いつでもアプリまたはその機能を終了することがあります。",
      },
      {
        heading: "Appleの条件",
        body: "Apple App StoreからGallery Guyをダウンロードした場合、Appleがアプリに対して責任を負わず、メンテナンス、サポート、または保証サービスを提供する義務がないことを認めるものとします。Appleはアプリに関連するいかなる請求についても責任を負いません。",
      },
      {
        heading: "規約の変更",
        body: "当社はいつでもこの利用規約を変更することがあります。変更後のアプリの継続使用は、更新された条件の承諾とみなされます。",
      },
      {
        heading: "お問い合わせ",
        body: `開発者：Batur Cihan
メール：baturcihan@icloud.com
国：トルコ`,
      },
    ],
  },
  sv: {
    title: "Användarvillkor",
    effectiveDate: "Ikraftträdandedatum: 22 februari 2025",
    sections: [
      {
        heading: "Godkännande av villkor",
        body: "Genom att ladda ner, installera eller använda Gallery Guy godkänner du dessa användarvillkor. Om du inte godkänner villkoren, använd inte appen.",
      },
      {
        heading: "Beskrivning av tjänsten",
        body: `Gallery Guy är en mobilapplikation för att hantera och rensa ditt fotogalleri. Funktioner inkluderar:

• Skärmdumpsdetektering och kategorisering via OCR
• Gruppering och jämförelse av liknande bilder
• Identifiering av stora videor
• Dolt valv med biometriskt skydd
• Smart rensning (svepbaserad filgranskning)
• Albumhantering

Appen fungerar helt på din enhet utan molntjänster.`,
      },
      {
        heading: "Licens",
        body: "Vi ger dig en icke-exklusiv, icke-överförbar, återkallelig licens att använda Gallery Guy för personligt, icke-kommersiellt bruk, enligt dessa villkor.",
      },
      {
        heading: "Ditt ansvar",
        body: `• Du ansvarar för innehållet i ditt fotobibliotek.
• Du bör granska filer noggrant innan du bekräftar radering.
• Raderade filer flyttas till enhetens mapp "Nyligen raderade" där operativsystemet stöder det, men permanent radering är oåterkallelig.
• Du ansvarar för att upprätthålla din enhets biometriska säkerhet för funktionen Dolt valv.`,
      },
      {
        heading: "Immateriella rättigheter",
        body: "Gallery Guy och dess design, kod och varumärke ägs av utvecklaren. Namnet \"Gallery Guy\", logotypen och relaterade tillgångar tillhör Batur Cihan. Du får inte kopiera, modifiera, distribuera eller dekompilera appen.",
      },
      {
        heading: "Friskrivningar",
        body: `• Appen tillhandahålls "i befintligt skick" utan garantier av något slag.
• Vi garanterar inte att filradering frigör en specifik mängd lagringsutrymme.
• Vi ansvarar inte för oavsiktlig radering av filer.
• OCR-baserad skärmdumpskategorisering kan inte vara 100 % korrekt.
• Detektering av liknande bilder är ungefärlig och kan ibland gruppera olika bilder.
• Maximalt ansvar begränsas till det belopp som betalats för appen.`,
      },
      {
        heading: "Betalning och återbetalning",
        body: "Gallery Guy erbjuder en gratisversion och ett engångsköp. Återbetalningar hanteras av Apple enligt App Stores återbetalningspolicy. Vi har ingen möjlighet att behandla återbetalningar direkt.",
      },
      {
        heading: "Ändringar av villkoren",
        body: "Vi kan uppdatera dessa villkor med jämna mellanrum. Fortsatt användning av appen efter ändringar innebär att du godkänner de uppdaterade villkoren.",
      },
      {
        heading: "Uppsägning",
        body: "Vi förbehåller oss rätten att avsluta eller begränsa din tillgång till appen om du bryter mot dessa villkor.",
      },
      {
        heading: "Tillämplig lag",
        body: "Dessa villkor regleras av lagarna i Republiken Turkiet.",
      },
      {
        heading: "Kontakt",
        body: "För frågor om dessa villkor, kontakta oss på: baturcihan@icloud.com",
      },
      {
        heading: "Ytterligare villkor för Apple-användare",
        body: `• Apple är inte part i detta avtal och ansvarar inte för appen eller dess innehåll.
• Apple har ingen skyldighet att tillhandahålla underhålls- eller supporttjänster för appen.
• Vid fel som uppstår under garanti som inte åtgärdas av oss kan du ha rätt till återbetalning av köpeskillingen.
• Apple ansvarar inte för anspråk relaterade till appen, inklusive produktansvar, bristande överensstämmelse med lagar eller konsumentskydd.
• Vid immateriella intrång från tredje part ansvarar vi, inte Apple, för utredning och försvar.
• Apple och dess dotterbolag är tredjepartsförmånstagare i detta avtal och kan genomdriva det vid godkännande.`,
      },
    ],
  },
  no: {
    title: "Bruksvilkår",
    effectiveDate: "Ikrafttredelsesdato: 22. februar 2025",
    sections: [
      {
        heading: "Aksept av vilkår",
        body: "Ved å laste ned, installere eller bruke Gallery Guy godtar du disse bruksvilkårene. Hvis du ikke godtar vilkårene, skal du ikke bruke appen.",
      },
      {
        heading: "Beskrivelse av tjenesten",
        body: `Gallery Guy er en mobilapplikasjon for håndtering og rensing av fotogalleriet ditt. Funksjoner inkluderer:

• Skjermbildedeteksjon og kategorisering via OCR
• Gruppering og sammenligning av lignende bilder
• Identifisering av store videoer
• Skjult hvelv med biometrisk beskyttelse
• Smart rensing (sveipebasert filgjennomgang)
• Albumhåndtering

Appen fungerer helt på enheten din uten skytjenester.`,
      },
      {
        heading: "Lisens",
        body: "Vi gir deg en ikke-eksklusiv, ikke-overførbar, tilbakekallelig lisens til å bruke Gallery Guy for personlig, ikke-kommersiell bruk, i henhold til disse vilkårene.",
      },
      {
        heading: "Ditt ansvar",
        body: `• Du er ansvarlig for innholdet i fotobiblioteket ditt.
• Du bør gjennomgå filer nøye før du bekrefter sletting.
• Slettede filer flyttes til enhetens mappe "Nylig slettet" der operativsystemet støtter det, men permanent sletting er ugjenkallelig.
• Du er ansvarlig for å opprettholde enhetens biometriske sikkerhet for funksjonen Skjult hvelv.`,
      },
      {
        heading: "Immaterielle rettigheter",
        body: "Gallery Guy og dens design, kode og merkevare eies av utvikleren. Navnet \"Gallery Guy\", logoen og relaterte eiendeler tilhører Batur Cihan. Du har ikke lov til å kopiere, modifisere, distribuere eller dekompilere appen.",
      },
      {
        heading: "Ansvarsfraskrivelser",
        body: `• Appen tilbys "som den er" uten garantier av noe slag.
• Vi garanterer ikke at filsletting vil frigjøre en bestemt mengde lagringsplass.
• Vi er ikke ansvarlige for utilsiktet sletting av filer.
• OCR-basert skjermbildekategorisering er kanskje ikke 100 % nøyaktig.
• Deteksjon av lignende bilder er omtrentlig og kan noen ganger gruppere ulike bilder.
• Maksimalt ansvar begrenses til beløpet betalt for appen.`,
      },
      {
        heading: "Betaling og refusjon",
        body: "Gallery Guy tilbyr en gratisversjon og et engangskjøp. Refusjoner håndteres av Apple i henhold til App Stores refusjonspolicy. Vi har ingen mulighet til å behandle refusjoner direkte.",
      },
      {
        heading: "Endringer i vilkårene",
        body: "Vi kan oppdatere disse vilkårene med jevne mellomrom. Fortsatt bruk av appen etter endringer innebærer at du godtar de oppdaterte vilkårene.",
      },
      {
        heading: "Oppsigelse",
        body: "Vi forbeholder oss retten til å avslutte eller begrense din tilgang til appen hvis du bryter disse vilkårene.",
      },
      {
        heading: "Gjeldende lov",
        body: "Disse vilkårene reguleres av lovene i Republikken Tyrkia.",
      },
      {
        heading: "Kontakt",
        body: "For spørsmål om disse vilkårene, kontakt oss på: baturcihan@icloud.com",
      },
      {
        heading: "Tilleggsvilkår for Apple-brukere",
        body: `• Apple er ikke part i denne avtalen og er ikke ansvarlig for appen eller dens innhold.
• Apple har ingen forpliktelse til å tilby vedlikeholds- eller støttetjenester for appen.
• Ved feil som oppstår under garanti som ikke rettes av oss, kan du ha rett til refusjon av kjøpesummen.
• Apple er ikke ansvarlig for krav relatert til appen, inkludert produktansvar, manglende overholdelse av lover eller forbrukerbeskyttelse.
• Ved immaterielle rettighetsbrudd fra tredjeparter er vi, ikke Apple, ansvarlige for undersøkelse og forsvar.
• Apple og dets datterselskaper er tredjepartsbegunstigede i denne avtalen og kan håndheve den ved godkjennelse.`,
      },
    ],
  },
  nl: {
    title: "Gebruiksvoorwaarden",
    effectiveDate: "Ingangsdatum: 22 februari 2025",
    sections: [
      {
        heading: "Aanvaarding van de voorwaarden",
        body: "Door Gallery Guy te downloaden, installeren of gebruiken, ga je akkoord met deze gebruiksvoorwaarden. Als je niet akkoord gaat met deze voorwaarden, gebruik de app dan niet.",
      },
      {
        heading: "Beschrijving van de dienst",
        body: `Gallery Guy is een mobiele applicatie voor het beheren en opruimen van je fotogalerij. Functies zijn onder meer:

• Schermafbeeldingsdetectie en categorisering via OCR
• Groepering en vergelijking van vergelijkbare foto's
• Identificatie van grote video's
• Verborgen kluis met biometrische bescherming
• Slim opruimen (veeg-gebaseerde bestandsbeoordeling)
• Albumbeheer

De app werkt volledig op je apparaat zonder clouddiensten.`,
      },
      {
        heading: "Licentie",
        body: "Wij verlenen je een niet-exclusieve, niet-overdraagbare, herroepbare licentie om Gallery Guy te gebruiken voor persoonlijk, niet-commercieel gebruik, onderworpen aan deze voorwaarden.",
      },
      {
        heading: "Jouw verantwoordelijkheden",
        body: `• Je bent verantwoordelijk voor de inhoud van je fotobibliotheek.
• Je dient bestanden zorgvuldig te controleren voordat je verwijdering bevestigt.
• Verwijderde bestanden worden verplaatst naar de map "Onlangs verwijderd" van je apparaat waar ondersteund door het besturingssysteem, maar permanente verwijdering is onomkeerbaar.
• Je bent verantwoordelijk voor het onderhouden van de biometrische beveiliging van je apparaat voor de Verborgen kluis-functie.`,
      },
      {
        heading: "Intellectueel eigendom",
        body: "Gallery Guy en het ontwerp, de code en het merk zijn eigendom van de ontwikkelaar. De naam \"Gallery Guy\", het logo en gerelateerde materialen zijn eigendom van Batur Cihan. Je mag de app niet kopiëren, wijzigen, distribueren of reverse-engineeren.",
      },
      {
        heading: "Disclaimers",
        body: `• De app wordt geleverd "zoals het is" zonder enige garantie.
• Wij garanderen niet dat het verwijderen van bestanden een specifieke hoeveelheid opslagruimte vrijmaakt.
• Wij zijn niet verantwoordelijk voor het per ongeluk verwijderen van bestanden.
• OCR-gebaseerde categorisering van schermafbeeldingen is mogelijk niet 100% nauwkeurig.
• Detectie van vergelijkbare foto's is bij benadering en kan soms verschillende foto's groeperen.
• Maximale aansprakelijkheid is beperkt tot het bedrag dat voor de app is betaald.`,
      },
      {
        heading: "Betaling en restitutie",
        body: "Gallery Guy biedt een gratis versie en een eenmalige aankoop. Restituties worden afgehandeld door Apple volgens het restitutiebeleid van de App Store. Wij zijn niet in staat om restituties rechtstreeks te verwerken.",
      },
      {
        heading: "Wijzigingen in de voorwaarden",
        body: "Wij kunnen deze voorwaarden van tijd tot tijd bijwerken. Voortgezet gebruik van de app na wijzigingen houdt in dat je de bijgewerkte voorwaarden accepteert.",
      },
      {
        heading: "Beëindiging",
        body: "Wij behouden ons het recht voor om je toegang tot de app te beëindigen of te beperken als je deze voorwaarden schendt.",
      },
      {
        heading: "Toepasselijk recht",
        body: "Deze voorwaarden worden beheerst door de wetten van de Republiek Turkije.",
      },
      {
        heading: "Contact",
        body: "Voor vragen over deze voorwaarden, neem contact met ons op via: baturcihan@icloud.com",
      },
      {
        heading: "Aanvullende voorwaarden voor Apple-gebruikers",
        body: `• Apple is geen partij bij deze overeenkomst en is niet verantwoordelijk voor de app of de inhoud ervan.
• Apple is niet verplicht om onderhouds- of ondersteuningsdiensten voor de app te leveren.
• Bij gebreken die optreden onder garantie en niet door ons worden verholpen, heb je mogelijk recht op restitutie van de aankoopprijs.
• Apple is niet verantwoordelijk voor claims met betrekking tot de app, inclusief productaansprakelijkheid, niet-naleving van wetten of consumentenbescherming.
• Bij inbreuk op intellectueel eigendom door derden zijn wij, niet Apple, verantwoordelijk voor onderzoek en verdediging.
• Apple en haar dochterondernemingen zijn derde-begunstigden van deze overeenkomst en kunnen deze handhaven bij aanvaarding.`,
      },
    ],
  },
  ro: {
    title: "Termeni de utilizare",
    effectiveDate: "Data intrării în vigoare: 22 februarie 2025",
    sections: [
      {
        heading: "Acceptarea termenilor",
        body: "Prin descărcarea, instalarea sau utilizarea Gallery Guy, ești de acord cu acești termeni de utilizare. Dacă nu ești de acord cu acești termeni, nu utiliza aplicația.",
      },
      {
        heading: "Descrierea serviciului",
        body: `Gallery Guy este o aplicație mobilă pentru gestionarea și curățarea galeriei tale de fotografii. Funcțiile includ:

• Detectarea și categorizarea capturilor de ecran prin OCR
• Gruparea și compararea fotografiilor similare
• Identificarea videoclipurilor mari
• Seif ascuns cu protecție biometrică
• Curățare inteligentă (revizuire fișiere prin glisare)
• Gestionare albume

Aplicația funcționează complet pe dispozitivul tău, fără servicii cloud.`,
      },
      {
        heading: "Licență",
        body: "Îți acordăm o licență neexclusivă, netransferabilă, revocabilă pentru a utiliza Gallery Guy în scopuri personale, necomerciale, sub rezerva acestor termeni.",
      },
      {
        heading: "Responsabilitățile tale",
        body: `• Ești responsabil pentru conținutul bibliotecii tale de fotografii.
• Ar trebui să revizuiești fișierele cu atenție înainte de a confirma ștergerea.
• Fișierele șterse sunt mutate în folderul "Șterse recent" al dispozitivului unde este suportat de sistemul de operare, dar ștergerea permanentă este ireversibilă.
• Ești responsabil pentru menținerea securității biometrice a dispozitivului tău pentru funcția Seif ascuns.`,
      },
      {
        heading: "Proprietate intelectuală",
        body: "Gallery Guy și designul, codul și brandul său sunt deținute de dezvoltator. Numele \"Gallery Guy\", logo-ul și materialele asociate sunt proprietatea lui Batur Cihan. Nu ai voie să copiezi, modifici, distribui sau decompilezi aplicația.",
      },
      {
        heading: "Declinări de responsabilitate",
        body: `• Aplicația este furnizată "ca atare" fără garanții de niciun fel.
• Nu garantăm că ștergerea fișierelor va elibera o cantitate specifică de spațiu de stocare.
• Nu suntem responsabili pentru ștergerea accidentală a fișierelor.
• Categorizarea capturilor de ecran bazată pe OCR poate să nu fie 100% precisă.
• Detectarea fotografiilor similare este aproximativă și poate grupa ocazional fotografii diferite.
• Răspunderea maximă este limitată la suma plătită pentru aplicație.`,
      },
      {
        heading: "Plată și rambursare",
        body: "Gallery Guy oferă o versiune gratuită și o achiziție unică. Rambursările sunt gestionate de Apple conform politicii de rambursare a App Store. Nu avem posibilitatea de a procesa rambursările direct.",
      },
      {
        heading: "Modificări ale termenilor",
        body: "Putem actualiza acești termeni periodic. Utilizarea continuă a aplicației după modificări înseamnă că accepți termenii actualizați.",
      },
      {
        heading: "Reziliere",
        body: "Ne rezervăm dreptul de a înceta sau limita accesul tău la aplicație dacă încalci acești termeni.",
      },
      {
        heading: "Legea aplicabilă",
        body: "Acești termeni sunt reglementați de legile Republicii Turcia.",
      },
      {
        heading: "Contact",
        body: "Pentru întrebări despre acești termeni, contactează-ne la: baturcihan@icloud.com",
      },
      {
        heading: "Termeni suplimentari pentru utilizatorii Apple",
        body: `• Apple nu este parte la acest acord și nu este responsabil pentru aplicație sau conținutul acesteia.
• Apple nu are nicio obligație de a furniza servicii de întreținere sau suport pentru aplicație.
• În cazul defectelor apărute în perioada de garanție care nu sunt remediate de noi, poți avea dreptul la rambursarea prețului de achiziție.
• Apple nu este responsabil pentru reclamațiile legate de aplicație, inclusiv răspunderea pentru produse, neconformitatea cu legile sau protecția consumatorilor.
• În cazul încălcărilor proprietății intelectuale de către terți, noi, nu Apple, suntem responsabili pentru investigare și apărare.
• Apple și filialele sale sunt beneficiari terți ai acestui acord și îl pot aplica la acceptare.`,
      },
    ],
  },
  el: {
    title: "Όροι Χρήσης",
    effectiveDate: "Ημερομηνία ισχύος: 22 Φεβρουαρίου 2025",
    sections: [
      {
        heading: "Αποδοχή των όρων",
        body: "Με τη λήψη, εγκατάσταση ή χρήση του Gallery Guy, αποδέχεσαι αυτούς τους όρους χρήσης. Εάν δεν συμφωνείς με αυτούς τους όρους, μην χρησιμοποιείς την εφαρμογή.",
      },
      {
        heading: "Περιγραφή της υπηρεσίας",
        body: `Ο Gallery Guy είναι μια εφαρμογή κινητού για τη διαχείριση και τον καθαρισμό της γκαλερί φωτογραφιών σου. Οι λειτουργίες περιλαμβάνουν:

• Ανίχνευση και κατηγοριοποίηση στιγμιοτύπων οθόνης μέσω OCR
• Ομαδοποίηση και σύγκριση παρόμοιων φωτογραφιών
• Εντοπισμός μεγάλων βίντεο
• Κρυφό θησαυροφυλάκιο με βιομετρική προστασία
• Έξυπνος καθαρισμός (αξιολόγηση αρχείων με σάρωση)
• Διαχείριση άλμπουμ

Η εφαρμογή λειτουργεί εξ ολοκλήρου στη συσκευή σου χωρίς υπηρεσίες cloud.`,
      },
      {
        heading: "Άδεια",
        body: "Σου χορηγούμε μια μη αποκλειστική, μη μεταβιβάσιμη, ανακλητή άδεια χρήσης του Gallery Guy για προσωπική, μη εμπορική χρήση, σύμφωνα με αυτούς τους όρους.",
      },
      {
        heading: "Οι ευθύνες σου",
        body: `• Είσαι υπεύθυνος/η για το περιεχόμενο της βιβλιοθήκης φωτογραφιών σου.
• Πρέπει να ελέγχεις τα αρχεία προσεκτικά πριν επιβεβαιώσεις τη διαγραφή.
• Τα διαγραμμένα αρχεία μεταφέρονται στο φάκελο "Πρόσφατα διαγραμμένα" της συσκευής σου όπου υποστηρίζεται από το λειτουργικό σύστημα, αλλά η μόνιμη διαγραφή είναι μη αναστρέψιμη.
• Είσαι υπεύθυνος/η για τη διατήρηση της βιομετρικής ασφάλειας της συσκευής σου για τη λειτουργία Κρυφό θησαυροφυλάκιο.`,
      },
      {
        heading: "Πνευματική ιδιοκτησία",
        body: "Ο Gallery Guy και ο σχεδιασμός, ο κώδικας και το εμπορικό σήμα του ανήκουν στον προγραμματιστή. Το όνομα \"Gallery Guy\", το λογότυπο και τα σχετικά στοιχεία είναι ιδιοκτησία του Batur Cihan. Δεν επιτρέπεται η αντιγραφή, τροποποίηση, διανομή ή αποσυμπίληση της εφαρμογής.",
      },
      {
        heading: "Αποποιήσεις ευθύνης",
        body: `• Η εφαρμογή παρέχεται "ως έχει" χωρίς εγγυήσεις οποιουδήποτε είδους.
• Δεν εγγυόμαστε ότι η διαγραφή αρχείων θα ελευθερώσει συγκεκριμένο ποσό αποθηκευτικού χώρου.
• Δεν ευθυνόμαστε για τυχαία διαγραφή αρχείων.
• Η κατηγοριοποίηση στιγμιοτύπων οθόνης βασισμένη σε OCR ενδέχεται να μην είναι 100% ακριβής.
• Η ανίχνευση παρόμοιων φωτογραφιών είναι κατά προσέγγιση και μπορεί περιστασιακά να ομαδοποιήσει διαφορετικές φωτογραφίες.
• Η μέγιστη ευθύνη περιορίζεται στο ποσό που καταβλήθηκε για την εφαρμογή.`,
      },
      {
        heading: "Πληρωμή και επιστροφή χρημάτων",
        body: "Ο Gallery Guy προσφέρει δωρεάν έκδοση και εφάπαξ αγορά. Οι επιστροφές χρημάτων διεκπεραιώνονται από την Apple σύμφωνα με την πολιτική επιστροφών του App Store. Δεν έχουμε τη δυνατότητα να επεξεργαστούμε επιστροφές απευθείας.",
      },
      {
        heading: "Αλλαγές στους όρους",
        body: "Μπορούμε να ενημερώσουμε αυτούς τους όρους κατά καιρούς. Η συνεχής χρήση της εφαρμογής μετά τις αλλαγές σημαίνει ότι αποδέχεσαι τους ενημερωμένους όρους.",
      },
      {
        heading: "Τερματισμός",
        body: "Διατηρούμε το δικαίωμα να τερματίσουμε ή να περιορίσουμε την πρόσβασή σου στην εφαρμογή εάν παραβιάσεις αυτούς τους όρους.",
      },
      {
        heading: "Εφαρμοστέο δίκαιο",
        body: "Αυτοί οι όροι διέπονται από τους νόμους της Δημοκρατίας της Τουρκίας.",
      },
      {
        heading: "Επικοινωνία",
        body: "Για ερωτήσεις σχετικά με αυτούς τους όρους, επικοινώνησε μαζί μας στο: baturcihan@icloud.com",
      },
      {
        heading: "Πρόσθετοι όροι για χρήστες Apple",
        body: `• Η Apple δεν είναι συμβαλλόμενο μέρος σε αυτήν τη συμφωνία και δεν ευθύνεται για την εφαρμογή ή το περιεχόμενό της.
• Η Apple δεν έχει καμία υποχρέωση παροχής υπηρεσιών συντήρησης ή υποστήριξης για την εφαρμογή.
• Σε περίπτωση ελαττωμάτων κατά τη διάρκεια της εγγύησης που δεν επιδιορθώνονται από εμάς, μπορεί να δικαιούσαι επιστροφή του τιμήματος αγοράς.
• Η Apple δεν ευθύνεται για αξιώσεις σχετικά με την εφαρμογή, συμπεριλαμβανομένης της ευθύνης προϊόντος, μη συμμόρφωσης με νόμους ή προστασίας καταναλωτών.
• Σε περίπτωση παραβίασης πνευματικής ιδιοκτησίας από τρίτους, εμείς, όχι η Apple, είμαστε υπεύθυνοι για τη διερεύνηση και υπεράσπιση.
• Η Apple και οι θυγατρικές της είναι τρίτοι δικαιούχοι αυτής της συμφωνίας και μπορούν να την επιβάλλουν κατά την αποδοχή.`,
      },
    ],
  },
  da: {
    title: "Brugsvilkår",
    effectiveDate: "Ikrafttrædelsesdato: 22. februar 2025",
    sections: [
      {
        heading: "Accept af vilkår",
        body: "Ved at downloade, installere eller bruge Gallery Guy accepterer du disse brugsvilkår. Hvis du ikke accepterer vilkårene, skal du ikke bruge appen.",
      },
      {
        heading: "Beskrivelse af tjenesten",
        body: `Gallery Guy er en mobilapplikation til håndtering og rensning af dit fotogalleri. Funktioner inkluderer:

• Skærmbillededetektion og kategorisering via OCR
• Gruppering og sammenligning af lignende billeder
• Identifikation af store videoer
• Skjult boks med biometrisk beskyttelse
• Smart rensning (swipe-baseret filgennemgang)
• Albumhåndtering

Appen fungerer udelukkende på din enhed uden cloud-tjenester.`,
      },
      {
        heading: "Licens",
        body: "Vi giver dig en ikke-eksklusiv, ikke-overdragelig, tilbagekaldelig licens til at bruge Gallery Guy til personlig, ikke-kommerciel brug i henhold til disse vilkår.",
      },
      {
        heading: "Dit ansvar",
        body: `• Du er ansvarlig for indholdet i dit fotobibliotek.
• Du bør gennemgå filer omhyggeligt før du bekræfter sletning.
• Slettede filer flyttes til enhedens mappe "Senest slettet" hvor operativsystemet understøtter det, men permanent sletning er uigenkaldelig.
• Du er ansvarlig for at opretholde din enheds biometriske sikkerhed for funktionen Skjult boks.`,
      },
      {
        heading: "Immaterielle rettigheder",
        body: "Gallery Guy og dens design, kode og varemærke ejes af udvikleren. Navnet \"Gallery Guy\", logoet og relaterede aktiver tilhører Batur Cihan. Du må ikke kopiere, ændre, distribuere eller dekompilere appen.",
      },
      {
        heading: "Ansvarsfraskrivelser",
        body: `• Appen leveres "som den er" uden garantier af nogen art.
• Vi garanterer ikke at filsletning vil frigøre en bestemt mængde lagerplads.
• Vi er ikke ansvarlige for utilsigtet sletning af filer.
• OCR-baseret skærmbilledekategorisering er muligvis ikke 100 % nøjagtig.
• Detektion af lignende billeder er omtrentlig og kan lejlighedsvis gruppere forskellige billeder.
• Maksimalt ansvar begrænses til det beløb der er betalt for appen.`,
      },
      {
        heading: "Betaling og refusion",
        body: "Gallery Guy tilbyder en gratis version og et engangskøb. Refusioner håndteres af Apple i henhold til App Stores refusionspolitik. Vi har ikke mulighed for at behandle refusioner direkte.",
      },
      {
        heading: "Ændringer i vilkårene",
        body: "Vi kan opdatere disse vilkår med jævne mellemrum. Fortsat brug af appen efter ændringer indebærer at du accepterer de opdaterede vilkår.",
      },
      {
        heading: "Opsigelse",
        body: "Vi forbeholder os retten til at afslutte eller begrænse din adgang til appen hvis du overtræder disse vilkår.",
      },
      {
        heading: "Gældende lov",
        body: "Disse vilkår er underlagt lovgivningen i Republikken Tyrkiet.",
      },
      {
        heading: "Kontakt",
        body: "For spørgsmål om disse vilkår, kontakt os på: baturcihan@icloud.com",
      },
      {
        heading: "Yderligere vilkår for Apple-brugere",
        body: `• Apple er ikke part i denne aftale og er ikke ansvarlig for appen eller dens indhold.
• Apple har ingen forpligtelse til at levere vedligeholdelses- eller supporttjenester for appen.
• Ved fejl der opstår under garanti og ikke udbedres af os, kan du have ret til refusion af købsprisen.
• Apple er ikke ansvarlig for krav relateret til appen, herunder produktansvar, manglende overholdelse af love eller forbrugerbeskyttelse.
• Ved immaterielle rettighedskrænkelser fra tredjeparter er vi, ikke Apple, ansvarlige for undersøgelse og forsvar.
• Apple og dets datterselskaber er tredjepartsbegunstigede i denne aftale og kan håndhæve den ved accept.`,
      },
    ],
  },
  bg: {
    title: "Условия за ползване",
    effectiveDate: "Дата на влизане в сила: 22 февруари 2025",
    sections: [
      {
        heading: "Приемане на условията",
        body: "С изтеглянето, инсталирането или използването на Gallery Guy се съгласяваш с тези условия за ползване. Ако не си съгласен с тези условия, не използвай приложението.",
      },
      {
        heading: "Описание на услугата",
        body: `Gallery Guy е мобилно приложение за управление и почистване на фотогалерията ти. Функциите включват:

• Разпознаване и категоризиране на екранни снимки чрез OCR
• Групиране и сравняване на подобни снимки
• Идентифициране на големи видеа
• Скрит сейф с биометрична защита
• Интелигентно почистване (преглед на файлове чрез плъзгане)
• Управление на албуми

Приложението работи изцяло на твоето устройство без облачни услуги.`,
      },
      {
        heading: "Лиценз",
        body: "Предоставяме ти неизключителен, непрехвърляем, отменяем лиценз за използване на Gallery Guy за лични, нетърговски цели, съгласно тези условия.",
      },
      {
        heading: "Твоите отговорности",
        body: `• Ти си отговорен за съдържанието на библиотеката си със снимки.
• Трябва да прегледаш файловете внимателно, преди да потвърдиш изтриването.
• Изтритите файлове се преместват в папката "Наскоро изтрити" на устройството, където операционната система го поддържа, но постоянното изтриване е необратимо.
• Ти си отговорен за поддържането на биометричната сигурност на устройството за функцията Скрит сейф.`,
      },
      {
        heading: "Интелектуална собственост",
        body: "Gallery Guy и неговият дизайн, код и марка са собственост на разработчика. Името \"Gallery Guy\", логото и свързаните активи са собственост на Batur Cihan. Нямаш право да копираш, модифицираш, разпространяваш или декомпилираш приложението.",
      },
      {
        heading: "Отказ от отговорност",
        body: `• Приложението се предоставя "както е" без гаранции от какъвто и да е вид.
• Не гарантираме, че изтриването на файлове ще освободи определено количество място за съхранение.
• Не носим отговорност за случайно изтриване на файлове.
• OCR-базираната категоризация на екранни снимки може да не е 100% точна.
• Разпознаването на подобни снимки е приблизително и може понякога да групира различни снимки.
• Максималната отговорност е ограничена до сумата, платена за приложението.`,
      },
      {
        heading: "Плащане и възстановяване",
        body: "Gallery Guy предлага безплатна версия и еднократна покупка. Възстановяванията се обработват от Apple съгласно политиката за възстановяване на App Store. Нямаме възможност да обработваме възстановявания директно.",
      },
      {
        heading: "Промени в условията",
        body: "Можем да актуализираме тези условия периодично. Продължаващото използване на приложението след промени означава, че приемаш актуализираните условия.",
      },
      {
        heading: "Прекратяване",
        body: "Запазваме си правото да прекратим или ограничим достъпа ти до приложението, ако нарушиш тези условия.",
      },
      {
        heading: "Приложимо право",
        body: "Тези условия се уреждат от законите на Република Турция.",
      },
      {
        heading: "Контакт",
        body: "За въпроси относно тези условия, свържи се с нас на: baturcihan@icloud.com",
      },
      {
        heading: "Допълнителни условия за потребители на Apple",
        body: `• Apple не е страна по това споразумение и не носи отговорност за приложението или съдържанието му.
• Apple няма задължение да предоставя услуги за поддръжка или обслужване на приложението.
• При дефекти, възникнали по време на гаранцията, които не са отстранени от нас, може да имаш право на възстановяване на покупната цена.
• Apple не носи отговорност за претенции, свързани с приложението, включително продуктова отговорност, несъответствие със закони или защита на потребителите.
• При нарушения на интелектуалната собственост от трети страни ние, а не Apple, сме отговорни за разследването и защитата.
• Apple и нейните дъщерни дружества са трети ползватели на това споразумение и могат да го прилагат при приемане.`,
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

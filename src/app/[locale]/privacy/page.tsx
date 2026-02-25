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
  es: {
    title: "Política de Privacidad",
    effectiveDate: "Fecha de vigencia: 22 de febrero de 2025",
    sections: [
      {
        heading: "Introducción",
        body: 'Gallery Guy ("nosotros", "nuestro", "la aplicación") es desarrollada por Batur Cihan. Esta Política de Privacidad explica cómo la aplicación maneja tu información. Gallery Guy está diseñada con la privacidad como prioridad — todos tus datos permanecen en tu dispositivo. No recopilamos, transmitimos ni almacenamos ninguna información personal en servidores externos.',
      },
      {
        heading: "Información que No Recopilamos",
        body: `Gallery Guy no recopila ninguna información personal. Específicamente:

• Sin información personal (nombre, correo electrónico, número de teléfono)
• Sin análisis de uso ni telemetría
• Sin identificadores publicitarios ni rastreo
• Sin huella digital del dispositivo
• Sin datos de ubicación
• Sin necesidad de crear una cuenta
• Sin subidas a la nube de ningún tipo
• Sin cookies ni tecnologías de rastreo web`,
      },
      {
        heading: "Información Almacenada en tu Dispositivo",
        body: `Los siguientes datos se almacenan localmente en tu dispositivo y nunca salen de él:

• Acceso a la Biblioteca de Fotos: La aplicación lee tu biblioteca de fotos para escanear, mostrar y gestionar tus fotos y videos. El acceso de escritura se usa para eliminar y mover archivos entre álbumes.

• Resultados de Escaneo OCR: El texto reconocido de las capturas de pantalla se almacena localmente en tu dispositivo para fines de categorización. Estos datos nunca salen de tu dispositivo.

• Archivos de la Bóveda Oculta: Las fotos y videos movidos a la Bóveda Oculta se almacenan en el sistema de archivos protegido de la aplicación en tu dispositivo, protegidos por autenticación biométrica.

• Preferencias del Usuario: Tu modo de tema, preferencia de idioma y estado de incorporación se almacenan localmente usando el almacenamiento del dispositivo.`,
      },
      {
        heading: "Permisos que Solicitamos",
        body: `• Biblioteca de Fotos (Lectura y Escritura): Necesario para que la aplicación funcione. Se usa para escanear tu galería, detectar capturas de pantalla, encontrar fotos similares, identificar videos grandes y eliminar o mover archivos que selecciones.

• Autenticación Biométrica (Face ID / Touch ID): Se usa únicamente para proteger el acceso a la función de Bóveda Oculta. Los datos biométricos son manejados completamente por el sistema operativo; la aplicación nunca accede ni almacena información biométrica directamente.`,
      },
      {
        heading: "SDKs de Terceros",
        body: `• ML Kit Text Recognition: Se usa para OCR en el dispositivo para clasificar capturas de pantalla por contenido. Este SDK se ejecuta completamente en tu dispositivo — no se envían imágenes ni texto a ningún servidor.

• Módulos del Framework Expo: Módulos estándar para acceso a la biblioteca de medios, sistema de archivos, localización y autenticación local. Ninguno de estos módulos recopila ni transmite datos.

La aplicación no utiliza ningún servicio de análisis, publicidad o informes de errores de terceros.`,
      },
      {
        heading: "Seguridad de Datos",
        body: `• Todos los datos permanecen en el almacenamiento local de tu dispositivo
• Los archivos de la Bóveda Oculta están protegidos por la autenticación biométrica de tu dispositivo
• El sandbox de la aplicación impide que otras aplicaciones accedan a los datos almacenados de Gallery Guy
• La aplicación no rastrea usuarios (NSPrivacyTracking está configurado como false)`,
      },
      {
        heading: "Compartir Datos",
        body: "No compartimos, vendemos, alquilamos ni intercambiamos ningún dato con terceros. No tenemos servidores que reciban datos de la aplicación. No hay datos que compartir porque no recopilamos ninguno.",
      },
      {
        heading: "Privacidad de los Niños",
        body: "Gallery Guy no recopila conscientemente información de niños menores de 13 años. La aplicación no requiere verificación de edad porque no recopila información personal. Si un padre o tutor tiene inquietudes, puede contactar al desarrollador.",
      },
      {
        heading: "Tus Derechos",
        body: `Como todos los datos se almacenan localmente en tu dispositivo, tienes control total:

• Derecho de Acceso: Todos tus datos ya están en tu dispositivo.
• Derecho de Eliminación: Puedes eliminar cualquier dato eliminando archivos dentro de la aplicación o desinstalando la aplicación por completo.
• Derecho de Portabilidad: Tus fotos permanecen en la biblioteca de fotos de tu dispositivo.
• Derecho de Exclusión: No hay nada de lo que excluirse ya que no recopilamos datos.`,
      },
      {
        heading: "Retención de Datos",
        body: `• Caché OCR: Se almacena localmente, se limpia automáticamente al desinstalar la aplicación.
• Archivos de la Bóveda Oculta: Permanecen hasta que los restaures, elimines o desinstales la aplicación.
• Preferencias: Se almacenan localmente, se limpian al desinstalar la aplicación.`,
      },
      {
        heading: "Cambios en Esta Política",
        body: 'Podemos actualizar esta Política de Privacidad de vez en cuando. Los cambios se reflejarán en la "Fecha de vigencia" en la parte superior de este documento. El uso continuado de la aplicación después de los cambios constituye la aceptación de la política actualizada.',
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
    title: "Politique de Confidentialité",
    effectiveDate: "Date d'entrée en vigueur : 22 février 2025",
    sections: [
      {
        heading: "Introduction",
        body: "Gallery Guy (« nous », « notre », « l'application ») est développée par Batur Cihan. Cette Politique de Confidentialité explique comment l'application gère vos informations. Gallery Guy est conçue avec la confidentialité comme priorité — toutes vos données restent sur votre appareil. Nous ne collectons, ne transmettons ni ne stockons aucune information personnelle sur des serveurs externes.",
      },
      {
        heading: "Informations que Nous ne Collectons Pas",
        body: `Gallery Guy ne collecte aucune information personnelle. Plus précisément :

• Aucune information personnelle (nom, e-mail, numéro de téléphone)
• Aucune analyse d'utilisation ni télémétrie
• Aucun identifiant publicitaire ni suivi
• Aucune empreinte numérique de l'appareil
• Aucune donnée de localisation
• Aucune création de compte requise
• Aucun téléchargement vers le cloud
• Aucun cookie ni technologie de suivi web`,
      },
      {
        heading: "Informations Stockées sur votre Appareil",
        body: `Les données suivantes sont stockées localement sur votre appareil et ne le quittent jamais :

• Accès à la Bibliothèque de Photos : L'application lit votre bibliothèque de photos pour scanner, afficher et gérer vos photos et vidéos. L'accès en écriture est utilisé pour la suppression et le déplacement de fichiers entre albums.

• Résultats de Scan OCR : Le texte reconnu des captures d'écran est mis en cache localement sur votre appareil à des fins de catégorisation. Ces données ne quittent jamais votre appareil.

• Fichiers du Coffre-fort : Les photos et vidéos déplacées vers le Coffre-fort sont stockées dans le système de fichiers protégé de l'application sur votre appareil, protégées par l'authentification biométrique.

• Préférences Utilisateur : Votre mode de thème, préférence de langue et état d'intégration sont stockés localement sur l'appareil.`,
      },
      {
        heading: "Autorisations Demandées",
        body: `• Bibliothèque de Photos (Lecture et Écriture) : Nécessaire au fonctionnement de l'application. Utilisé pour scanner votre galerie, détecter les captures d'écran, trouver les photos similaires, identifier les grosses vidéos et supprimer ou déplacer les fichiers sélectionnés.

• Authentification Biométrique (Face ID / Touch ID) : Utilisée uniquement pour protéger l'accès à la fonction Coffre-fort. Les données biométriques sont entièrement gérées par le système d'exploitation ; l'application n'accède ni ne stocke directement les informations biométriques.`,
      },
      {
        heading: "SDK Tiers",
        body: `• ML Kit Text Recognition : Utilisé pour l'OCR sur l'appareil afin de classifier les captures d'écran par contenu. Ce SDK fonctionne entièrement sur votre appareil — aucune image ni texte n'est envoyé à un serveur.

• Modules du Framework Expo : Modules standards pour l'accès à la bibliothèque média, le système de fichiers, la localisation et l'authentification locale. Aucun de ces modules ne collecte ni ne transmet de données.

L'application n'utilise aucun service d'analyse, de publicité ou de rapport d'erreurs tiers.`,
      },
      {
        heading: "Sécurité des Données",
        body: `• Toutes les données restent dans le stockage local de votre appareil
• Les fichiers du Coffre-fort sont protégés par l'authentification biométrique de votre appareil
• Le bac à sable de l'application empêche les autres applications d'accéder aux données stockées de Gallery Guy
• L'application ne suit pas les utilisateurs (NSPrivacyTracking est défini sur false)`,
      },
      {
        heading: "Partage de Données",
        body: "Nous ne partageons, ne vendons, ne louons ni n'échangeons aucune donnée avec des tiers. Nous n'avons pas de serveurs recevant des données de l'application. Il n'y a pas de données à partager car nous n'en collectons aucune.",
      },
      {
        heading: "Confidentialité des Enfants",
        body: "Gallery Guy ne collecte pas sciemment d'informations auprès d'enfants de moins de 13 ans. L'application ne nécessite pas de vérification d'âge car elle ne collecte aucune information personnelle. Si un parent ou tuteur a des inquiétudes, il peut contacter le développeur.",
      },
      {
        heading: "Vos Droits",
        body: `Puisque toutes les données sont stockées localement sur votre appareil, vous avez un contrôle total :

• Droit d'Accès : Toutes vos données sont déjà sur votre appareil.
• Droit de Suppression : Vous pouvez supprimer toute donnée en supprimant des fichiers dans l'application ou en désinstallant l'application.
• Droit à la Portabilité : Vos photos restent dans la bibliothèque de photos de votre appareil.
• Droit de Retrait : Il n'y a rien dont se retirer car nous ne collectons aucune donnée.`,
      },
      {
        heading: "Conservation des Données",
        body: `• Cache OCR : Stocké localement, automatiquement effacé lors de la désinstallation de l'application.
• Fichiers du Coffre-fort : Restent jusqu'à ce que vous les restauriez, les supprimiez ou désinstalliez l'application.
• Préférences : Stockées localement, effacées lors de la désinstallation.`,
      },
      {
        heading: "Modifications de cette Politique",
        body: "Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps. Les modifications seront reflétées dans la « Date d'entrée en vigueur » en haut de ce document. L'utilisation continue de l'application après les modifications constitue l'acceptation de la politique mise à jour.",
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
    title: "Datenschutzrichtlinie",
    effectiveDate: "Gültig ab: 22. Februar 2025",
    sections: [
      {
        heading: "Einleitung",
        body: 'Gallery Guy ("wir", "unser", "die App") wird von Batur Cihan entwickelt. Diese Datenschutzrichtlinie erklärt, wie die App mit deinen Informationen umgeht. Gallery Guy wurde mit Datenschutz als Kernprinzip entwickelt — alle deine Daten bleiben auf deinem Gerät. Wir erheben, übertragen oder speichern keine persönlichen Informationen auf externen Servern.',
      },
      {
        heading: "Informationen, die wir nicht erheben",
        body: `Gallery Guy erhebt keine persönlichen Informationen. Im Einzelnen:

• Keine persönlichen Informationen (Name, E-Mail, Telefonnummer)
• Keine Nutzungsanalysen oder Telemetrie
• Keine Werbe-Identifikatoren oder Tracking
• Kein Geräte-Fingerprinting
• Keine Standortdaten
• Keine Kontoerstellung erforderlich
• Keine Cloud-Uploads jeglicher Art
• Keine Cookies oder Web-Tracking-Technologien`,
      },
      {
        heading: "Auf deinem Gerät gespeicherte Informationen",
        body: `Die folgenden Daten werden lokal auf deinem Gerät gespeichert und verlassen es nie:

• Fotobibliothek-Zugriff: Die App liest deine Fotobibliothek zum Scannen, Anzeigen und Verwalten deiner Fotos und Videos. Schreibzugriff wird zum Löschen und Verschieben von Dateien zwischen Alben verwendet.

• OCR-Scan-Ergebnisse: Aus Screenshots erkannter Text wird lokal auf deinem Gerät zu Kategorisierungszwecken zwischengespeichert. Diese Daten verlassen nie dein Gerät.

• Tresor-Dateien: In den Tresor verschobene Fotos und Videos werden im geschützten Dateisystem der App auf deinem Gerät gespeichert, geschützt durch biometrische Authentifizierung.

• Benutzereinstellungen: Dein Theme-Modus, deine Spracheinstellung und dein Einführungsstatus werden lokal auf dem Gerät gespeichert.`,
      },
      {
        heading: "Angeforderte Berechtigungen",
        body: `• Fotobibliothek (Lesen & Schreiben): Erforderlich für die Funktion der App. Wird verwendet zum Scannen deiner Galerie, Erkennen von Screenshots, Finden ähnlicher Fotos, Identifizieren großer Videos und Löschen oder Verschieben ausgewählter Dateien.

• Biometrische Authentifizierung (Face ID / Touch ID): Wird ausschließlich zum Schutz des Zugangs zur Tresor-Funktion verwendet. Biometrische Daten werden vollständig vom Betriebssystem verwaltet; die App greift nie direkt auf biometrische Informationen zu und speichert sie nicht.`,
      },
      {
        heading: "Drittanbieter-SDKs",
        body: `• ML Kit Text Recognition: Wird für geräteinterne OCR zur Klassifizierung von Screenshots nach Inhalt verwendet. Dieses SDK läuft vollständig auf deinem Gerät — keine Bilder oder Texte werden an Server gesendet.

• Expo Framework Module: Standard-Module für Medienbibliothek-Zugriff, Dateisystem, Lokalisierung und lokale Authentifizierung. Keines dieser Module erhebt oder überträgt Daten.

Die App verwendet keine Drittanbieter-Analyse-, Werbe- oder Absturzberichtsdienste.`,
      },
      {
        heading: "Datensicherheit",
        body: `• Alle Daten verbleiben im lokalen Speicher deines Geräts
• Tresor-Dateien sind durch die biometrische Authentifizierung deines Geräts geschützt
• Die App-Sandbox verhindert, dass andere Apps auf die gespeicherten Daten von Gallery Guy zugreifen
• Die App verfolgt keine Benutzer (NSPrivacyTracking ist auf false gesetzt)`,
      },
      {
        heading: "Datenweitergabe",
        body: "Wir teilen, verkaufen, vermieten oder tauschen keine Daten mit Dritten. Wir haben keine Server, die Daten von der App empfangen. Es gibt keine Daten zu teilen, da wir keine erheben.",
      },
      {
        heading: "Datenschutz für Kinder",
        body: "Gallery Guy erhebt nicht wissentlich Informationen von Kindern unter 13 Jahren. Die App erfordert keine Altersverifikation, da sie keine persönlichen Informationen erhebt. Bei Bedenken können sich Eltern oder Erziehungsberechtigte an den Entwickler wenden.",
      },
      {
        heading: "Deine Rechte",
        body: `Da alle Daten lokal auf deinem Gerät gespeichert sind, hast du die volle Kontrolle:

• Auskunftsrecht: Alle deine Daten sind bereits auf deinem Gerät.
• Recht auf Löschung: Du kannst alle Daten löschen, indem du Dateien in der App löschst oder die App deinstallierst.
• Recht auf Datenübertragbarkeit: Deine Fotos verbleiben in der Fotobibliothek deines Geräts.
• Widerspruchsrecht: Es gibt nichts, dem du widersprechen kannst, da wir keine Daten erheben.`,
      },
      {
        heading: "Datenspeicherung",
        body: `• OCR-Cache: Lokal gespeichert, wird beim Deinstallieren der App automatisch gelöscht.
• Tresor-Dateien: Bleiben bestehen, bis du sie wiederherstellst, löschst oder die App deinstallierst.
• Einstellungen: Lokal gespeichert, werden bei der Deinstallation gelöscht.`,
      },
      {
        heading: "Änderungen dieser Richtlinie",
        body: 'Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Änderungen werden im "Gültig ab"-Datum oben in diesem Dokument widergespiegelt. Die fortgesetzte Nutzung der App nach Änderungen gilt als Annahme der aktualisierten Richtlinie.',
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
    title: "개인정보처리방침",
    effectiveDate: "시행일: 2025년 2월 22일",
    sections: [
      {
        heading: "소개",
        body: "Gallery Guy(\"당사\", \"우리의\", \"앱\")는 Batur Cihan이 개발했습니다. 본 개인정보처리방침은 앱이 귀하의 정보를 어떻게 처리하는지 설명합니다. Gallery Guy는 개인정보 보호를 핵심으로 설계되었습니다 — 모든 데이터는 귀하의 기기에 남아 있습니다. 외부 서버에 어떠한 개인 정보도 수집, 전송 또는 저장하지 않습니다.",
      },
      {
        heading: "수집하지 않는 정보",
        body: `Gallery Guy는 어떠한 개인 정보도 수집하지 않습니다. 구체적으로:

• 개인 정보 없음 (이름, 이메일, 전화번호)
• 사용 분석 또는 원격 측정 없음
• 광고 식별자 또는 추적 없음
• 기기 핑거프린팅 없음
• 위치 데이터 없음
• 계정 생성 불필요
• 어떤 종류의 클라우드 업로드도 없음
• 쿠키 또는 웹 추적 기술 없음`,
      },
      {
        heading: "기기에 저장되는 정보",
        body: `다음 데이터는 기기에 로컬로 저장되며 기기를 떠나지 않습니다:

• 사진 보관함 접근: 앱은 사진과 동영상을 스캔, 표시 및 관리하기 위해 사진 보관함을 읽습니다. 쓰기 접근은 삭제 및 앨범 간 파일 이동에 사용됩니다.

• OCR 스캔 결과: 스크린샷에서 인식된 텍스트는 분류 목적으로 기기에 로컬로 캐시됩니다. 이 데이터는 기기를 절대 떠나지 않습니다.

• 숨김 금고 파일: 숨김 금고로 이동된 사진과 동영상은 생체 인증으로 보호되는 앱의 샌드박스 파일 시스템에 저장됩니다.

• 사용자 설정: 테마 모드, 언어 설정 및 온보딩 완료 상태는 기기에 로컬로 저장됩니다.`,
      },
      {
        heading: "요청하는 권한",
        body: `• 사진 보관함 (읽기 및 쓰기): 앱 작동에 필수입니다. 갤러리 스캔, 스크린샷 감지, 비슷한 사진 찾기, 대용량 동영상 식별, 선택한 파일 삭제 또는 이동에 사용됩니다.

• 생체 인증 (Face ID / Touch ID): 숨김 금고 기능에 대한 접근 보호에만 사용됩니다. 생체 데이터는 운영 체제에 의해 완전히 관리됩니다; 앱은 생체 정보에 직접 접근하거나 저장하지 않습니다.`,
      },
      {
        heading: "타사 SDK",
        body: `• ML Kit Text Recognition: 콘텐츠별 스크린샷 분류를 위한 기기 내 OCR에 사용됩니다. 이 SDK는 기기에서 완전히 작동합니다 — 이미지나 텍스트가 서버로 전송되지 않습니다.

• Expo Framework 모듈: 미디어 라이브러리 접근, 파일 시스템, 로컬라이제이션 및 로컬 인증을 위한 표준 모듈입니다. 이 모듈 중 어느 것도 데이터를 수집하거나 전송하지 않습니다.

앱은 어떠한 타사 분석, 광고 또는 충돌 보고 서비스를 사용하지 않습니다.`,
      },
      {
        heading: "데이터 보안",
        body: `• 모든 데이터는 기기의 로컬 저장소에 남아 있습니다
• 숨김 금고 파일은 기기의 생체 인증으로 보호됩니다
• 앱 샌드박스는 다른 앱이 Gallery Guy의 저장 데이터에 접근하는 것을 방지합니다
• 앱은 사용자를 추적하지 않습니다 (NSPrivacyTracking이 false로 설정됨)`,
      },
      {
        heading: "데이터 공유",
        body: "당사는 어떠한 데이터도 제3자와 공유, 판매, 임대 또는 교환하지 않습니다. 앱에서 데이터를 수신하는 서버가 없습니다. 어떤 데이터도 수집하지 않으므로 공유할 데이터가 없습니다.",
      },
      {
        heading: "아동의 개인정보",
        body: "Gallery Guy는 13세 미만 아동의 정보를 의도적으로 수집하지 않습니다. 앱은 개인 정보를 수집하지 않으므로 연령 인증이 필요하지 않습니다. 부모 또는 보호자가 우려 사항이 있는 경우 개발자에게 문의할 수 있습니다.",
      },
      {
        heading: "귀하의 권리",
        body: `모든 데이터가 기기에 로컬로 저장되므로 완전한 통제권을 가집니다:

• 접근 권리: 모든 데이터는 이미 귀하의 기기에 있습니다.
• 삭제 권리: 앱 내에서 파일을 삭제하거나 앱을 삭제하여 모든 데이터를 삭제할 수 있습니다.
• 이동 권리: 사진은 기기의 사진 보관함에 남아 있습니다.
• 거부 권리: 데이터를 수집하지 않으므로 거부할 것이 없습니다.`,
      },
      {
        heading: "데이터 보존",
        body: `• OCR 캐시: 로컬에 저장되며, 앱 삭제 시 자동으로 지워집니다.
• 숨김 금고 파일: 복원, 삭제 또는 앱 삭제 시까지 유지됩니다.
• 설정: 로컬에 저장되며, 앱 삭제 시 지워집니다.`,
      },
      {
        heading: "본 방침의 변경",
        body: "당사는 수시로 본 개인정보처리방침을 업데이트할 수 있습니다. 변경 사항은 이 문서 상단의 \"시행일\"에 반영됩니다. 변경 후 앱의 계속 사용은 업데이트된 방침의 수락을 의미합니다.",
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
    title: "Политика конфиденциальности",
    effectiveDate: "Дата вступления в силу: 22 февраля 2025 г.",
    sections: [
      {
        heading: "Введение",
        body: "Gallery Guy («мы», «наше», «приложение») разработан Batur Cihan. Настоящая Политика конфиденциальности объясняет, как приложение обрабатывает вашу информацию. Gallery Guy разработан с конфиденциальностью как основным принципом — все ваши данные остаются на вашем устройстве. Мы не собираем, не передаём и не храним личную информацию на внешних серверах.",
      },
      {
        heading: "Информация, которую мы не собираем",
        body: `Gallery Guy не собирает никакой личной информации. В частности:

• Никакой личной информации (имя, email, номер телефона)
• Никакой аналитики использования или телеметрии
• Никаких рекламных идентификаторов или отслеживания
• Никакого отпечатка устройства
• Никаких данных о местоположении
• Не требуется создание аккаунта
• Никаких загрузок в облако
• Никаких cookies или технологий веб-отслеживания`,
      },
      {
        heading: "Информация, хранящаяся на вашем устройстве",
        body: `Следующие данные хранятся локально на вашем устройстве и никогда его не покидают:

• Доступ к фототеке: Приложение читает вашу фототеку для сканирования, отображения и управления фото и видео. Доступ на запись используется для удаления и перемещения файлов между альбомами.

• Результаты сканирования OCR: Текст, распознанный со скриншотов, кэшируется локально на вашем устройстве для целей категоризации. Эти данные никогда не покидают ваше устройство.

• Файлы скрытого хранилища: Фото и видео, перемещённые в скрытое хранилище, хранятся в защищённой файловой системе приложения на вашем устройстве, защищённой биометрической аутентификацией.

• Настройки пользователя: Режим темы, языковые настройки и состояние вводного тура хранятся локально на устройстве.`,
      },
      {
        heading: "Запрашиваемые разрешения",
        body: `• Фототека (Чтение и Запись): Необходимо для работы приложения. Используется для сканирования галереи, обнаружения скриншотов, поиска похожих фото, определения больших видео и удаления или перемещения выбранных файлов.

• Биометрическая аутентификация (Face ID / Touch ID): Используется исключительно для защиты доступа к функции скрытого хранилища. Биометрические данные полностью управляются операционной системой; приложение никогда не обращается к биометрической информации напрямую и не хранит её.`,
      },
      {
        heading: "Сторонние SDK",
        body: `• ML Kit Text Recognition: Используется для OCR на устройстве для классификации скриншотов по содержанию. Этот SDK работает полностью на вашем устройстве — никакие изображения или текст не отправляются на серверы.

• Модули Expo Framework: Стандартные модули для доступа к медиатеке, файловой системе, локализации и локальной аутентификации. Ни один из этих модулей не собирает и не передаёт данные.

Приложение не использует никаких сторонних сервисов аналитики, рекламы или отчётов об ошибках.`,
      },
      {
        heading: "Безопасность данных",
        body: `• Все данные остаются в локальном хранилище вашего устройства
• Файлы скрытого хранилища защищены биометрической аутентификацией вашего устройства
• Песочница приложения предотвращает доступ других приложений к хранимым данным Gallery Guy
• Приложение не отслеживает пользователей (NSPrivacyTracking установлен в false)`,
      },
      {
        heading: "Передача данных",
        body: "Мы не передаём, не продаём, не сдаём в аренду и не обмениваем какие-либо данные с третьими лицами. У нас нет серверов, получающих данные от приложения. Нечего передавать, потому что мы ничего не собираем.",
      },
      {
        heading: "Конфиденциальность детей",
        body: "Gallery Guy сознательно не собирает информацию от детей младше 13 лет. Приложение не требует проверки возраста, поскольку не собирает личную информацию. Если у родителя или опекуна есть вопросы, они могут обратиться к разработчику.",
      },
      {
        heading: "Ваши права",
        body: `Поскольку все данные хранятся локально на вашем устройстве, у вас полный контроль:

• Право доступа: Все ваши данные уже на вашем устройстве.
• Право на удаление: Вы можете удалить любые данные, удалив файлы в приложении или удалив приложение.
• Право на переносимость: Ваши фото остаются в фототеке вашего устройства.
• Право на отказ: Не от чего отказываться, так как мы не собираем данные.`,
      },
      {
        heading: "Хранение данных",
        body: `• Кэш OCR: Хранится локально, автоматически очищается при удалении приложения.
• Файлы скрытого хранилища: Остаются до тех пор, пока вы их не восстановите, не удалите или не удалите приложение.
• Настройки: Хранятся локально, очищаются при удалении приложения.`,
      },
      {
        heading: "Изменения политики",
        body: "Мы можем обновлять настоящую Политику конфиденциальности время от времени. Изменения будут отражены в «Дате вступления в силу» в верхней части этого документа. Продолжение использования приложения после изменений означает принятие обновлённой политики.",
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
    title: "Política de Privacidade",
    effectiveDate: "Data de vigência: 22 de fevereiro de 2025",
    sections: [
      {
        heading: "Introdução",
        body: 'O Gallery Guy ("nós", "nosso", "a app") é desenvolvido por Batur Cihan. Esta Política de Privacidade explica como a app trata as suas informações. O Gallery Guy foi concebido com a privacidade como prioridade — todos os seus dados ficam no seu dispositivo. Não recolhemos, transmitimos nem armazenamos qualquer informação pessoal em servidores externos.',
      },
      {
        heading: "Informações que Não Recolhemos",
        body: `O Gallery Guy não recolhe qualquer informação pessoal. Especificamente:

• Nenhuma informação pessoal (nome, email, número de telefone)
• Nenhuma análise de utilização ou telemetria
• Nenhum identificador publicitário ou rastreamento
• Nenhuma impressão digital do dispositivo
• Nenhum dado de localização
• Nenhuma criação de conta necessária
• Nenhum upload para a nuvem de qualquer tipo
• Nenhum cookie ou tecnologia de rastreamento web`,
      },
      {
        heading: "Informações Armazenadas no Seu Dispositivo",
        body: `Os seguintes dados são armazenados localmente no seu dispositivo e nunca o deixam:

• Acesso à Biblioteca de Fotos: A app lê a sua biblioteca de fotos para digitalizar, exibir e gerir as suas fotos e vídeos. O acesso de escrita é utilizado para eliminação e movimentação de ficheiros entre álbuns.

• Resultados de Digitalização OCR: O texto reconhecido de capturas de ecrã é armazenado em cache localmente no seu dispositivo para fins de categorização. Estes dados nunca deixam o seu dispositivo.

• Ficheiros do Cofre: As fotos e vídeos movidos para o Cofre são armazenados no sistema de ficheiros protegido da app no seu dispositivo, protegidos por autenticação biométrica.

• Preferências do Utilizador: O modo de tema, preferência de idioma e estado de integração são armazenados localmente no dispositivo.`,
      },
      {
        heading: "Permissões Solicitadas",
        body: `• Biblioteca de Fotos (Leitura e Escrita): Necessário para o funcionamento da app. Utilizado para digitalizar a sua galeria, detetar capturas de ecrã, encontrar fotos semelhantes, identificar vídeos grandes e eliminar ou mover ficheiros selecionados.

• Autenticação Biométrica (Face ID / Touch ID): Utilizada exclusivamente para proteger o acesso à funcionalidade Cofre. Os dados biométricos são geridos inteiramente pelo sistema operativo; a app nunca acede nem armazena diretamente informações biométricas.`,
      },
      {
        heading: "SDKs de Terceiros",
        body: `• ML Kit Text Recognition: Utilizado para OCR no dispositivo para classificar capturas de ecrã por conteúdo. Este SDK funciona inteiramente no seu dispositivo — nenhuma imagem ou texto é enviado para servidores.

• Módulos do Framework Expo: Módulos padrão para acesso à biblioteca multimédia, sistema de ficheiros, localização e autenticação local. Nenhum destes módulos recolhe ou transmite dados.

A app não utiliza quaisquer serviços de análise, publicidade ou relatórios de falhas de terceiros.`,
      },
      {
        heading: "Segurança dos Dados",
        body: `• Todos os dados permanecem no armazenamento local do seu dispositivo
• Os ficheiros do Cofre são protegidos pela autenticação biométrica do seu dispositivo
• O sandbox da app impede que outras apps acedam aos dados armazenados do Gallery Guy
• A app não rastreia utilizadores (NSPrivacyTracking está definido como false)`,
      },
      {
        heading: "Partilha de Dados",
        body: "Não partilhamos, vendemos, alugamos ou trocamos quaisquer dados com terceiros. Não temos servidores que recebam dados da app. Não há dados para partilhar porque não recolhemos nenhuns.",
      },
      {
        heading: "Privacidade de Menores",
        body: "O Gallery Guy não recolhe conscientemente informações de crianças com menos de 13 anos. A app não requer verificação de idade porque não recolhe informações pessoais. Se um pai ou tutor tiver preocupações, pode contactar o programador.",
      },
      {
        heading: "Os Seus Direitos",
        body: `Como todos os dados são armazenados localmente no seu dispositivo, tem controlo total:

• Direito de Acesso: Todos os seus dados já estão no seu dispositivo.
• Direito de Eliminação: Pode eliminar quaisquer dados removendo ficheiros na app ou desinstalando a app.
• Direito à Portabilidade: As suas fotos permanecem na biblioteca de fotos do seu dispositivo.
• Direito de Oposição: Não há nada a que se opor pois não recolhemos dados.`,
      },
      {
        heading: "Retenção de Dados",
        body: `• Cache OCR: Armazenado localmente, apagado automaticamente ao desinstalar a app.
• Ficheiros do Cofre: Permanecem até que os restaure, elimine ou desinstale a app.
• Preferências: Armazenadas localmente, apagadas ao desinstalar.`,
      },
      {
        heading: "Alterações a Esta Política",
        body: "Podemos atualizar esta Política de Privacidade periodicamente. As alterações serão refletidas na \"Data de vigência\" no topo deste documento. A utilização continuada da app após as alterações constitui aceitação da política atualizada.",
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
    title: "Informativa sulla Privacy",
    effectiveDate: "Data di entrata in vigore: 22 febbraio 2025",
    sections: [
      {
        heading: "Introduzione",
        body: 'Gallery Guy ("noi", "nostro", "l\'app") è sviluppata da Batur Cihan. Questa Informativa sulla Privacy spiega come l\'app gestisce le tue informazioni. Gallery Guy è progettata con la privacy come priorità — tutti i tuoi dati restano sul tuo dispositivo. Non raccogliamo, trasmettiamo né memorizziamo alcuna informazione personale su server esterni.',
      },
      {
        heading: "Informazioni che Non Raccogliamo",
        body: `Gallery Guy non raccoglie alcuna informazione personale. Nello specifico:

• Nessuna informazione personale (nome, email, numero di telefono)
• Nessuna analisi d'uso o telemetria
• Nessun identificatore pubblicitario o tracciamento
• Nessun fingerprinting del dispositivo
• Nessun dato di posizione
• Nessuna creazione di account necessaria
• Nessun upload cloud di alcun tipo
• Nessun cookie o tecnologia di tracciamento web`,
      },
      {
        heading: "Informazioni Memorizzate sul Tuo Dispositivo",
        body: `I seguenti dati sono memorizzati localmente sul tuo dispositivo e non lo lasciano mai:

• Accesso alla Libreria Foto: L'app legge la tua libreria foto per scansionare, visualizzare e gestire le tue foto e i tuoi video. L'accesso in scrittura è utilizzato per l'eliminazione e lo spostamento di file tra album.

• Risultati Scansione OCR: Il testo riconosciuto dagli screenshot viene memorizzato nella cache localmente sul tuo dispositivo per scopi di categorizzazione. Questi dati non lasciano mai il tuo dispositivo.

• File della Cassaforte: Le foto e i video spostati nella Cassaforte sono memorizzati nel sistema di file protetto dell'app sul tuo dispositivo, protetti dall'autenticazione biometrica.

• Preferenze Utente: La modalità tema, la preferenza di lingua e lo stato di onboarding sono memorizzati localmente sul dispositivo.`,
      },
      {
        heading: "Permessi Richiesti",
        body: `• Libreria Foto (Lettura e Scrittura): Necessario per il funzionamento dell'app. Utilizzato per scansionare la tua galleria, rilevare screenshot, trovare foto simili, identificare video grandi ed eliminare o spostare i file selezionati.

• Autenticazione Biometrica (Face ID / Touch ID): Utilizzata esclusivamente per proteggere l'accesso alla funzione Cassaforte. I dati biometrici sono gestiti interamente dal sistema operativo; l'app non accede né memorizza direttamente informazioni biometriche.`,
      },
      {
        heading: "SDK di Terze Parti",
        body: `• ML Kit Text Recognition: Utilizzato per OCR sul dispositivo per classificare gli screenshot per contenuto. Questo SDK funziona interamente sul tuo dispositivo — nessuna immagine o testo viene inviato a server.

• Moduli del Framework Expo: Moduli standard per l'accesso alla libreria multimediale, file system, localizzazione e autenticazione locale. Nessuno di questi moduli raccoglie o trasmette dati.

L'app non utilizza alcun servizio di analisi, pubblicità o report di crash di terze parti.`,
      },
      {
        heading: "Sicurezza dei Dati",
        body: `• Tutti i dati rimangono nella memoria locale del tuo dispositivo
• I file della Cassaforte sono protetti dall'autenticazione biometrica del tuo dispositivo
• Il sandbox dell'app impedisce ad altre app di accedere ai dati memorizzati da Gallery Guy
• L'app non traccia gli utenti (NSPrivacyTracking è impostato su false)`,
      },
      {
        heading: "Condivisione dei Dati",
        body: "Non condividiamo, vendiamo, affittiamo o scambiamo alcun dato con terze parti. Non abbiamo server che ricevono dati dall'app. Non ci sono dati da condividere perché non ne raccogliamo.",
      },
      {
        heading: "Privacy dei Minori",
        body: "Gallery Guy non raccoglie consapevolmente informazioni da bambini sotto i 13 anni. L'app non richiede verifica dell'età perché non raccoglie informazioni personali. Se un genitore o tutore ha preoccupazioni, può contattare lo sviluppatore.",
      },
      {
        heading: "I Tuoi Diritti",
        body: `Poiché tutti i dati sono memorizzati localmente sul tuo dispositivo, hai il controllo completo:

• Diritto di Accesso: Tutti i tuoi dati sono già sul tuo dispositivo.
• Diritto di Cancellazione: Puoi eliminare qualsiasi dato rimuovendo file nell'app o disinstallando l'app.
• Diritto alla Portabilità: Le tue foto restano nella libreria foto del tuo dispositivo.
• Diritto di Opposizione: Non c'è nulla a cui opporsi poiché non raccogliamo dati.`,
      },
      {
        heading: "Conservazione dei Dati",
        body: `• Cache OCR: Memorizzata localmente, cancellata automaticamente alla disinstallazione dell'app.
• File della Cassaforte: Rimangono fino a quando non li ripristini, li elimini o disinstalli l'app.
• Preferenze: Memorizzate localmente, cancellate alla disinstallazione.`,
      },
      {
        heading: "Modifiche a Questa Informativa",
        body: "Possiamo aggiornare questa Informativa sulla Privacy di tanto in tanto. Le modifiche saranno riflesse nella \"Data di entrata in vigore\" in cima a questo documento. L'uso continuato dell'app dopo le modifiche costituisce accettazione dell'informativa aggiornata.",
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
    title: "隐私政策",
    effectiveDate: "生效日期：2025年2月22日",
    sections: [
      {
        heading: "简介",
        body: `Gallery Guy（\u201c我们\u201d、\u201c我们的\u201d、\u201c应用\u201d）由Batur Cihan开发。本隐私政策说明应用如何处理您的信息。Gallery Guy的设计以隐私为核心 — 您的所有数据都保留在您的设备上。我们不会在外部服务器上收集、传输或存储任何个人信息。`,
      },
      {
        heading: "我们不收集的信息",
        body: `Gallery Guy不收集任何个人信息。具体来说：

• 不收集个人信息（姓名、电子邮件、电话号码）
• 不进行使用分析或遥测
• 不使用广告标识符或跟踪
• 不进行设备指纹识别
• 不收集位置数据
• 不需要创建账户
• 不进行任何形式的云上传
• 不使用Cookie或网络跟踪技术`,
      },
      {
        heading: "存储在您设备上的信息",
        body: `以下数据存储在您的设备本地，绝不会离开您的设备：

• 照片库访问：应用读取您的照片库以扫描、显示和管理您的照片和视频。写入访问用于删除和在相册之间移动文件。

• OCR扫描结果：从截图识别的文本在您的设备上本地缓存，用于分类目的。这些数据绝不会离开您的设备。

• 隐藏保险箱文件：移至隐藏保险箱的照片和视频存储在您设备上应用的沙盒文件系统中，受生物识别认证保护。

• 用户偏好设置：您的主题模式、语言偏好和引导完成状态使用设备存储在本地保存。`,
      },
      {
        heading: "我们请求的权限",
        body: `• 照片库（读取和写入）：应用运行所必需。用于扫描您的相册、检测截图、查找相似照片、识别大型视频以及删除或移动您选择的文件。

• 生物识别认证（Face ID / Touch ID）：仅用于保护隐藏保险箱功能的访问。生物识别数据完全由操作系统处理；应用不会直接访问或存储生物识别信息。`,
      },
      {
        heading: "第三方SDK",
        body: `• ML Kit Text Recognition：用于设备上的OCR，按内容分类截图。此SDK完全在您的设备上运行 — 不会将任何图像或文本发送到任何服务器。

• Expo Framework模块：用于媒体库访问、文件系统、本地化和本地认证的标准模块。这些模块均不收集或传输数据。

应用不使用任何第三方分析、广告或崩溃报告服务。`,
      },
      {
        heading: "数据安全",
        body: `• 所有数据保留在您设备的本地存储中
• 隐藏保险箱文件受您设备的生物识别认证保护
• 应用沙盒防止其他应用访问Gallery Guy存储的数据
• 应用不跟踪用户（NSPrivacyTracking设置为false）`,
      },
      {
        heading: "数据共享",
        body: "我们不会与第三方共享、出售、出租或交换任何数据。我们没有从应用接收数据的服务器。由于我们不收集任何数据，因此没有数据可供共享。",
      },
      {
        heading: "儿童隐私",
        body: "Gallery Guy不会故意收集13岁以下儿童的信息。应用不需要年龄验证，因为它不收集个人信息。如果家长或监护人有疑虑，可以联系开发者。",
      },
      {
        heading: "您的权利",
        body: `由于所有数据都存储在您的设备本地，您拥有完全控制权：

• 访问权：您的所有数据已在您的设备上。
• 删除权：您可以通过在应用内删除文件或完全卸载应用来删除任何数据。
• 可携性权：您的照片保留在设备的照片库中。
• 退出权：由于我们不收集数据，因此无需退出任何内容。`,
      },
      {
        heading: "数据保留",
        body: `• OCR缓存：本地存储，卸载应用时自动清除。
• 隐藏保险箱文件：保留直到您恢复、删除或卸载应用。
• 偏好设置：本地存储，卸载应用时清除。`,
      },
      {
        heading: "本政策的变更",
        body: `我们可能会不时更新本隐私政策。变更将反映在本文档顶部的\u201c生效日期\u201d中。在变更后继续使用应用即表示接受更新后的政策。`,
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
    title: "गोपनीयता नीति",
    effectiveDate: "प्रभावी तिथि: 22 फ़रवरी 2025",
    sections: [
      {
        heading: "परिचय",
        body: "Gallery Guy (\"हम\", \"हमारा\", \"ऐप\") Batur Cihan द्वारा विकसित किया गया है। यह गोपनीयता नीति बताती है कि ऐप आपकी जानकारी को कैसे संभालता है। Gallery Guy को प्राइवेसी को प्राथमिकता देकर डिज़ाइन किया गया है — आपका सारा डेटा आपके डिवाइस पर रहता है। हम बाहरी सर्वर पर कोई व्यक्तिगत जानकारी एकत्र, प्रसारित या संग्रहीत नहीं करते।",
      },
      {
        heading: "जो जानकारी हम एकत्र नहीं करते",
        body: `Gallery Guy कोई व्यक्तिगत जानकारी एकत्र नहीं करता। विशेष रूप से:

• कोई व्यक्तिगत जानकारी नहीं (नाम, ईमेल, फ़ोन नंबर)
• कोई यूसेज एनालिटिक्स या टेलीमेट्री नहीं
• कोई एडवरटाइज़िंग आइडेंटिफ़ायर या ट्रैकिंग नहीं
• कोई डिवाइस फ़िंगरप्रिंटिंग नहीं
• कोई लोकेशन डेटा नहीं
• कोई अकाउंट बनाने की ज़रूरत नहीं
• किसी भी प्रकार का कोई क्लाउड अपलोड नहीं
• कोई कुकीज़ या वेब ट्रैकिंग तकनीकें नहीं`,
      },
      {
        heading: "आपके डिवाइस पर संग्रहीत जानकारी",
        body: `निम्नलिखित डेटा आपके डिवाइस पर लोकली संग्रहीत होता है और कभी इसे नहीं छोड़ता:

• फोटो लाइब्रेरी एक्सेस: ऐप आपकी फोटो और वीडियो को स्कैन, डिस्प्ले और मैनेज करने के लिए आपकी फोटो लाइब्रेरी पढ़ता है। राइट एक्सेस डिलीट करने और एल्बम के बीच फ़ाइलें मूव करने के लिए उपयोग किया जाता है।

• OCR स्कैन रिज़ल्ट: स्क्रीनशॉट से पहचाना गया टेक्स्ट कैटेगराइज़ेशन के लिए आपके डिवाइस पर लोकली कैश किया जाता है। यह डेटा कभी आपका डिवाइस नहीं छोड़ता।

• हिडन वॉल्ट फ़ाइलें: हिडन वॉल्ट में मूव की गई फोटो और वीडियो आपके डिवाइस पर ऐप के सैंडबॉक्स्ड फ़ाइल सिस्टम में संग्रहीत होती हैं, बायोमेट्रिक ऑथेंटिकेशन से सुरक्षित।

• यूज़र प्रेफ़रेंसेज़: आपका थीम मोड, भाषा प्रेफ़रेंस और ऑनबोर्डिंग कम्प्लीशन स्टेट डिवाइस स्टोरेज का उपयोग करके लोकली संग्रहीत होता है।`,
      },
      {
        heading: "हमारे द्वारा अनुरोधित अनुमतियां",
        body: `• फोटो लाइब्रेरी (रीड और राइट): ऐप के काम करने के लिए आवश्यक। आपकी गैलरी स्कैन करने, स्क्रीनशॉट डिटेक्ट करने, समान फोटो खोजने, बड़ी वीडियो पहचानने और आपके द्वारा चुनी गई फ़ाइलें डिलीट या मूव करने के लिए उपयोग किया जाता है।

• बायोमेट्रिक ऑथेंटिकेशन (Face ID / Touch ID): केवल हिडन वॉल्ट फ़ीचर तक पहुंच सुरक्षित करने के लिए उपयोग किया जाता है। बायोमेट्रिक डेटा पूरी तरह ऑपरेटिंग सिस्टम द्वारा संभाला जाता है; ऐप कभी बायोमेट्रिक जानकारी को सीधे एक्सेस या स्टोर नहीं करता।`,
      },
      {
        heading: "थर्ड-पार्टी SDK",
        body: `• ML Kit Text Recognition: कंटेंट के आधार पर स्क्रीनशॉट क्लासिफ़ाई करने के लिए ऑन-डिवाइस OCR में उपयोग किया जाता है। यह SDK पूरी तरह आपके डिवाइस पर चलता है — कोई इमेज या टेक्स्ट किसी सर्वर को नहीं भेजा जाता।

• Expo Framework मॉड्यूल: मीडिया लाइब्रेरी एक्सेस, फ़ाइल सिस्टम, लोकलाइज़ेशन और लोकल ऑथेंटिकेशन के लिए स्टैंडर्ड मॉड्यूल। इनमें से कोई भी मॉड्यूल डेटा एकत्र या प्रसारित नहीं करता।

ऐप कोई थर्ड-पार्टी एनालिटिक्स, एडवरटाइज़िंग या क्रैश रिपोर्टिंग सर्विस उपयोग नहीं करता।`,
      },
      {
        heading: "डेटा सुरक्षा",
        body: `• सभी डेटा आपके डिवाइस के लोकल स्टोरेज में रहता है
• हिडन वॉल्ट फ़ाइलें आपके डिवाइस के बायोमेट्रिक ऑथेंटिकेशन से सुरक्षित हैं
• ऐप सैंडबॉक्स अन्य ऐप्स को Gallery Guy के संग्रहीत डेटा तक पहुंचने से रोकता है
• ऐप यूज़र्स को ट्रैक नहीं करता (NSPrivacyTracking false पर सेट है)`,
      },
      {
        heading: "डेटा शेयरिंग",
        body: "हम किसी भी डेटा को थर्ड पार्टीज़ के साथ शेयर, बेचते, किराए पर देते या ट्रेड नहीं करते। हमारे पास कोई सर्वर नहीं है जो ऐप से डेटा प्राप्त करे। शेयर करने के लिए कोई डेटा नहीं है क्योंकि हम कोई एकत्र नहीं करते।",
      },
      {
        heading: "बच्चों की गोपनीयता",
        body: "Gallery Guy जानबूझकर 13 वर्ष से कम उम्र के बच्चों से जानकारी एकत्र नहीं करता। ऐप को आयु सत्यापन की आवश्यकता नहीं है क्योंकि यह कोई व्यक्तिगत जानकारी एकत्र नहीं करता। यदि किसी माता-पिता या अभिभावक को चिंता है, तो वे डेवलपर से संपर्क कर सकते हैं।",
      },
      {
        heading: "आपके अधिकार",
        body: `चूंकि सभी डेटा आपके डिवाइस पर लोकली संग्रहीत है, आपके पास पूरा नियंत्रण है:

• एक्सेस का अधिकार: आपका सारा डेटा पहले से आपके डिवाइस पर है।
• डिलीट का अधिकार: आप ऐप में फ़ाइलें हटाकर या ऐप को पूरी तरह अनइंस्टॉल करके कोई भी डेटा डिलीट कर सकते हैं।
• पोर्टेबिलिटी का अधिकार: आपकी फोटो आपके डिवाइस की फोटो लाइब्रेरी में रहती हैं।
• ऑप्ट-आउट का अधिकार: ऑप्ट आउट करने के लिए कुछ नहीं है क्योंकि हम कोई डेटा एकत्र नहीं करते।`,
      },
      {
        heading: "डेटा रिटेंशन",
        body: `• OCR कैश: लोकली संग्रहीत, ऐप अनइंस्टॉल करने पर ऑटोमैटिक क्लियर होता है।
• हिडन वॉल्ट फ़ाइलें: जब तक आप उन्हें रिस्टोर, डिलीट या ऐप अनइंस्टॉल नहीं करते तब तक रहती हैं।
• प्रेफ़रेंसेज़: लोकली संग्रहीत, ऐप अनइंस्टॉल करने पर क्लियर होती हैं।`,
      },
      {
        heading: "इस नीति में बदलाव",
        body: "हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। बदलाव इस दस्तावेज़ के शीर्ष पर \"प्रभावी तिथि\" में दर्शाए जाएंगे। बदलाव के बाद ऐप का निरंतर उपयोग अपडेटेड नीति की स्वीकृति माना जाएगा।",
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
    title: "プライバシーポリシー",
    effectiveDate: "発効日：2025年2月22日",
    sections: [
      {
        heading: "はじめに",
        body: "Gallery Guy（「当社」「私たちの」「アプリ」）はBatur Cihanが開発しました。このプライバシーポリシーは、アプリがお客様の情報をどのように扱うかを説明します。Gallery Guyはプライバシーを核として設計されています — すべてのデータはお客様のデバイスに残ります。外部サーバーに個人情報を収集、送信、保存することはありません。",
      },
      {
        heading: "収集しない情報",
        body: `Gallery Guyは個人情報を一切収集しません。具体的には：

• 個人情報なし（名前、メール、電話番号）
• 使用状況分析やテレメトリなし
• 広告識別子やトラッキングなし
• デバイスフィンガープリンティングなし
• 位置情報なし
• アカウント作成不要
• いかなる種類のクラウドアップロードもなし
• Cookieやウェブトラッキング技術なし`,
      },
      {
        heading: "デバイスに保存される情報",
        body: `以下のデータはお客様のデバイスにローカルで保存され、デバイスから出ることはありません：

• 写真ライブラリアクセス：アプリは写真と動画のスキャン、表示、管理のために写真ライブラリを読み取ります。書き込みアクセスは削除とアルバム間のファイル移動に使用されます。

• OCRスキャン結果：スクリーンショットから認識されたテキストは、分類目的でデバイス上にローカルキャッシュされます。このデータがデバイスから出ることはありません。

• 非表示ボールトファイル：非表示ボールトに移動された写真と動画は、生体認証で保護されたアプリのサンドボックスファイルシステムに保存されます。

• ユーザー設定：テーマモード、言語設定、オンボーディング完了状態はデバイスストレージを使用してローカルに保存されます。`,
      },
      {
        heading: "要求する権限",
        body: `• 写真ライブラリ（読み取り・書き込み）：アプリの動作に必須です。ギャラリーのスキャン、スクリーンショットの検出、似た写真の検索、大容量動画の識別、選択したファイルの削除・移動に使用されます。

• 生体認証（Face ID / Touch ID）：非表示ボールト機能へのアクセス保護にのみ使用されます。生体認証データは完全にOSによって管理されます。アプリが生体認証情報に直接アクセスしたり保存したりすることはありません。`,
      },
      {
        heading: "サードパーティSDK",
        body: `• ML Kit Text Recognition：コンテンツによるスクリーンショット分類のためのオンデバイスOCRに使用。このSDKは完全にデバイス上で動作します — 画像やテキストがサーバーに送信されることはありません。

• Expo Frameworkモジュール：メディアライブラリアクセス、ファイルシステム、ローカライゼーション、ローカル認証のための標準モジュール。これらのモジュールはデータの収集や送信を行いません。

アプリはサードパーティの分析、広告、クラッシュレポートサービスを使用していません。`,
      },
      {
        heading: "データセキュリティ",
        body: `• すべてのデータはデバイスのローカルストレージに残ります
• 非表示ボールトファイルはデバイスの生体認証で保護されます
• アプリのサンドボックスにより他のアプリがGallery Guyの保存データにアクセスすることを防ぎます
• アプリはユーザーを追跡しません（NSPrivacyTrackingはfalseに設定）`,
      },
      {
        heading: "データ共有",
        body: "当社はいかなるデータも第三者と共有、販売、貸出、交換しません。アプリからデータを受信するサーバーはありません。データを収集していないため、共有するデータもありません。",
      },
      {
        heading: "児童のプライバシー",
        body: "Gallery Guyは13歳未満の子供から意図的に情報を収集しません。アプリは個人情報を収集しないため、年齢確認を必要としません。保護者の方で懸念がある場合は、開発者にお問い合わせください。",
      },
      {
        heading: "お客様の権利",
        body: `すべてのデータがデバイスにローカルで保存されているため、完全な管理権があります：

• アクセスの権利：すべてのデータは既にお客様のデバイスにあります。
• 削除の権利：アプリ内でファイルを削除するか、アプリを完全にアンインストールすることでデータを削除できます。
• ポータビリティの権利：写真はデバイスの写真ライブラリに残ります。
• オプトアウトの権利：データを収集していないため、オプトアウトするものはありません。`,
      },
      {
        heading: "データ保持",
        body: `• OCRキャッシュ：ローカルに保存、アプリのアンインストール時に自動クリア。
• 非表示ボールトファイル：復元、削除、またはアプリのアンインストールまで保持。
• 設定：ローカルに保存、アンインストール時にクリア。`,
      },
      {
        heading: "ポリシーの変更",
        body: "当社はこのプライバシーポリシーを随時更新することがあります。変更はこの文書の上部の「発効日」に反映されます。変更後のアプリの継続使用は、更新されたポリシーの承諾とみなされます。",
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
    title: "Integritetspolicy",
    effectiveDate: "Ikraftträdandedatum: 22 februari 2025",
    sections: [
      {
        heading: "Introduktion",
        body: "Gallery Guy (\u201cvi\u201d, \u201cvår\u201d, \u201cappen\u201d) är utvecklad av Batur Cihan. Denna integritetspolicy förklarar hur appen hanterar din information. Gallery Guy är designad med integritet i fokus — all din data stannar på din enhet. Vi samlar inte in, överför eller lagrar någon personlig information på externa servrar.",
      },
      {
        heading: "Information vi inte samlar in",
        body: `Gallery Guy samlar inte in någon personlig information. Specifikt:

• Ingen personlig information (namn, e-post, telefonnummer)
• Ingen användningsanalys eller telemetri
• Inga reklamidentifierare eller spårning
• Inget enhetsfingeravtryck
• Ingen platsdata
• Inget kontoskapande krävs
• Inga molnuppladdningar av något slag
• Inga cookies eller webbspårningstekniker`,
      },
      {
        heading: "Information lagrad på din enhet",
        body: `Följande data lagras lokalt på din enhet och lämnar den aldrig:

• Fotobiblioteksåtkomst: Appen läser ditt fotobibliotek för att skanna, visa och hantera dina bilder och videor. Skrivåtkomst används för radering och flytt av filer mellan album.

• OCR-skanningsresultat: Text som identifierats från skärmdumpar cachas lokalt på din enhet för kategorisering. Denna data lämnar aldrig din enhet.

• Filer i Dolt valv: Bilder och videor som flyttats till Dolt valv lagras i appens sandboxade filsystem på din enhet, skyddade av biometrisk autentisering.

• Användarinställningar: Ditt temaläge, språkval och onboarding-status lagras lokalt med enhetens lagring.`,
      },
      {
        heading: "Behörigheter vi begär",
        body: `• Fotobibliotek (läs och skriv): Krävs för att appen ska fungera. Används för att skanna ditt galleri, upptäcka skärmdumpar, hitta liknande bilder, identifiera stora videor och radera eller flytta filer du väljer.

• Biometrisk autentisering (Face ID / Touch ID): Används enbart för att skydda åtkomsten till Dolt valv-funktionen. Biometriska data hanteras helt av operativsystemet; appen kommer aldrig åt eller lagrar biometrisk information direkt.`,
      },
      {
        heading: "Tredjeparts-SDK:er",
        body: `• ML Kit Text Recognition: Används för OCR på enheten för att klassificera skärmdumpar efter innehåll. Denna SDK körs helt på din enhet — inga bilder eller text skickas till någon server.

• Expo Framework-moduler: Standardmoduler för mediabiblioteksåtkomst, filsystem, lokalisering och lokal autentisering. Ingen av dessa moduler samlar in eller överför data.

Appen använder inga tredjeparts-analys-, reklam- eller kraschrapporteringstjänster.`,
      },
      {
        heading: "Appens köpmodell",
        body: "Gallery Guy erbjuder en gratisversion och ett engångsköp. Betalningar behandlas av Apple via App Store. Vi har inte tillgång till din betalningsinformation.",
      },
      {
        heading: "Barns integritet",
        body: "Gallery Guy samlar inte medvetet in information från barn. Appen kräver ingen registrering och samlar inte in någon personlig data oavsett ålder.",
      },
      {
        heading: "Ändringar av denna policy",
        body: "Vi kan uppdatera denna integritetspolicy med jämna mellanrum. Ändringar träder i kraft vid publicering av den uppdaterade policyn i appen eller på vår webbplats.",
      },
      {
        heading: "Kontakt",
        body: "För frågor om denna integritetspolicy, kontakta oss på: baturcihan@icloud.com",
      },
    ],
  },
  no: {
    title: "Personvernpolicy",
    effectiveDate: "Ikrafttredelsesdato: 22. februar 2025",
    sections: [
      {
        heading: "Introduksjon",
        body: "Gallery Guy (\u201cvi\u201d, \u201cv\u00e5r\u201d, \u201cappen\u201d) er utviklet av Batur Cihan. Denne personvernpolicyen forklarer hvordan appen h\u00e5ndterer informasjonen din. Gallery Guy er designet med personvern i fokus \u2014 all din data forblir p\u00e5 enheten din. Vi samler ikke inn, overf\u00f8rer eller lagrer noen personlig informasjon p\u00e5 eksterne servere.",
      },
      {
        heading: "Informasjon vi ikke samler inn",
        body: `Gallery Guy samler ikke inn noen personlig informasjon. Spesifikt:

• Ingen personlig informasjon (navn, e-post, telefonnummer)
• Ingen bruksanalyse eller telemetri
• Ingen reklameidentifikatorer eller sporing
• Ingen enhetsfingeravtrykk
• Ingen posisjonsdata
• Ingen kontoopprettelse nødvendig
• Ingen skyopplastinger av noe slag
• Ingen informasjonskapsler eller nettspøringsteknologier`,
      },
      {
        heading: "Informasjon lagret på enheten din",
        body: `Følgende data lagres lokalt på enheten din og forlater den aldri:

• Fotobibliotektilgang: Appen leser fotobiblioteket ditt for å skanne, vise og håndtere bildene og videoene dine. Skrivetilgang brukes til sletting og flytting av filer mellom album.

• OCR-skanningsresultater: Tekst gjenkjent fra skjermbilder lagres lokalt på enheten din for kategoriseringsformål. Denne dataen forlater aldri enheten din.

• Filer i Skjult hvelv: Bilder og videoer flyttet til Skjult hvelv lagres i appens sandkassefilsystem på enheten din, beskyttet av biometrisk autentisering.

• Brukerinnstillinger: Temavalg, språkpreferanse og onboarding-status lagres lokalt med enhetslagring.`,
      },
      {
        heading: "Tillatelser vi ber om",
        body: `• Fotobibliotek (les og skriv): Kreves for at appen skal fungere. Brukes til å skanne galleriet ditt, oppdage skjermbilder, finne lignende bilder, identifisere store videoer og slette eller flytte filer du velger.

• Biometrisk autentisering (Face ID / Touch ID): Brukes utelukkende for å beskytte tilgangen til Skjult hvelv-funksjonen. Biometriske data håndteres helt av operativsystemet; appen får aldri tilgang til eller lagrer biometrisk informasjon direkte.`,
      },
      {
        heading: "Tredjeparts-SDK-er",
        body: `• ML Kit Text Recognition: Brukes til OCR på enheten for å klassifisere skjermbilder etter innhold. Denne SDK-en kjører helt på enheten din — ingen bilder eller tekst sendes til noen server.

• Expo Framework-moduler: Standardmoduler for mediebibliotektilgang, filsystem, lokalisering og lokal autentisering. Ingen av disse modulene samler inn eller overfører data.

Appen bruker ingen tredjeparts analyse-, reklame- eller krasjrapporteringstjenester.`,
      },
      {
        heading: "Appens kjøpsmodell",
        body: "Gallery Guy tilbyr en gratisversjon og et engangskjøp. Betalinger behandles av Apple via App Store. Vi har ikke tilgang til betalingsinformasjonen din.",
      },
      {
        heading: "Barns personvern",
        body: "Gallery Guy samler ikke bevisst inn informasjon fra barn. Appen krever ingen registrering og samler ikke inn noen personlige data uavhengig av alder.",
      },
      {
        heading: "Endringer i denne policyen",
        body: "Vi kan oppdatere denne personvernpolicyen med jevne mellomrom. Endringer trer i kraft ved publisering av den oppdaterte policyen i appen eller på nettstedet vårt.",
      },
      {
        heading: "Kontakt",
        body: "For spørsmål om denne personvernpolicyen, kontakt oss på: baturcihan@icloud.com",
      },
    ],
  },
  nl: {
    title: "Privacybeleid",
    effectiveDate: "Ingangsdatum: 22 februari 2025",
    sections: [
      {
        heading: "Inleiding",
        body: "Gallery Guy (\u201cwij\u201d, \u201cons\u201d, \u201cde app\u201d) is ontwikkeld door Batur Cihan. Dit privacybeleid legt uit hoe de app omgaat met je informatie. Gallery Guy is ontworpen met privacy als kern \u2014 al je gegevens blijven op je apparaat. Wij verzamelen, verzenden of bewaren geen persoonlijke informatie op externe servers.",
      },
      {
        heading: "Informatie die wij niet verzamelen",
        body: `Gallery Guy verzamelt geen persoonlijke informatie. Specifiek:

• Geen persoonlijke informatie (naam, e-mail, telefoonnummer)
• Geen gebruiksanalyse of telemetrie
• Geen advertentie-identificatoren of tracking
• Geen apparaatfingerprinting
• Geen locatiegegevens
• Geen accountaanmaking vereist
• Geen cloudupload van welke aard dan ook
• Geen cookies of webtracking-technologieën`,
      },
      {
        heading: "Informatie opgeslagen op je apparaat",
        body: `De volgende gegevens worden lokaal op je apparaat opgeslagen en verlaten het nooit:

• Fotobibliotheektoegang: De app leest je fotobibliotheek om je foto's en video's te scannen, weergeven en beheren. Schrijftoegang wordt gebruikt voor het verwijderen en verplaatsen van bestanden tussen albums.

• OCR-scanresultaten: Tekst herkend uit schermafbeeldingen wordt lokaal op je apparaat gecacht voor categoriseringsdoeleinden. Deze gegevens verlaten nooit je apparaat.

• Bestanden in Verborgen kluis: Foto's en video's verplaatst naar de Verborgen kluis worden opgeslagen in het sandboxed bestandssysteem van de app op je apparaat, beschermd door biometrische authenticatie.

• Gebruikersvoorkeuren: Je thema-instelling, taalvoorkeur en onboarding-status worden lokaal opgeslagen met apparaatopslag.`,
      },
      {
        heading: "Machtigingen die wij vragen",
        body: `• Fotobibliotheek (lezen en schrijven): Vereist om de app te laten werken. Wordt gebruikt om je galerij te scannen, schermafbeeldingen te detecteren, vergelijkbare foto's te vinden, grote video's te identificeren en bestanden te verwijderen of verplaatsen die je selecteert.

• Biometrische authenticatie (Face ID / Touch ID): Wordt uitsluitend gebruikt om de toegang tot de Verborgen kluis-functie te beschermen. Biometrische gegevens worden volledig door het besturingssysteem afgehandeld; de app heeft nooit rechtstreeks toegang tot biometrische informatie en slaat deze niet op.`,
      },
      {
        heading: "SDK's van derden",
        body: `• ML Kit Text Recognition: Wordt gebruikt voor OCR op het apparaat om schermafbeeldingen te classificeren op inhoud. Deze SDK draait volledig op je apparaat — er worden geen afbeeldingen of tekst naar een server gestuurd.

• Expo Framework-modules: Standaardmodules voor mediabibliotheektoegang, bestandssysteem, lokalisatie en lokale authenticatie. Geen van deze modules verzamelt of verzendt gegevens.

De app gebruikt geen analyse-, advertentie- of crashrapportagediensten van derden.`,
      },
      {
        heading: "Aankoopmodel van de app",
        body: "Gallery Guy biedt een gratis versie en een eenmalige aankoop. Betalingen worden verwerkt door Apple via de App Store. Wij hebben geen toegang tot je betalingsinformatie.",
      },
      {
        heading: "Privacy van kinderen",
        body: "Gallery Guy verzamelt niet bewust informatie van kinderen. De app vereist geen registratie en verzamelt geen persoonlijke gegevens, ongeacht leeftijd.",
      },
      {
        heading: "Wijzigingen in dit beleid",
        body: "Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Wijzigingen worden van kracht bij publicatie van het bijgewerkte beleid in de app of op onze website.",
      },
      {
        heading: "Contact",
        body: "Voor vragen over dit privacybeleid, neem contact met ons op via: baturcihan@icloud.com",
      },
    ],
  },
  ro: {
    title: "Politica de confidențialitate",
    effectiveDate: "Data intrării în vigoare: 22 februarie 2025",
    sections: [
      {
        heading: "Introducere",
        body: "Gallery Guy (\u201cnoi\u201d, \u201cal nostru\u201d, \u201caplica\u021bia\u201d) este dezvoltată de Batur Cihan. Această politică de confidențialitate explică modul în care aplicația gestionează informațiile tale. Gallery Guy este concepută cu confidențialitatea ca prioritate \u2014 toate datele tale rămân pe dispozitivul tău. Nu colectăm, transmitem sau stocăm nicio informație personală pe servere externe.",
      },
      {
        heading: "Informații pe care nu le colectăm",
        body: `Gallery Guy nu colectează nicio informație personală. Mai exact:

• Nicio informație personală (nume, e-mail, număr de telefon)
• Nicio analiză de utilizare sau telemetrie
• Niciun identificator publicitar sau tracking
• Nicio amprentă digitală a dispozitivului
• Nicio dată de localizare
• Nicio creare de cont necesară
• Nicio încărcare în cloud de niciun fel
• Niciun cookie sau tehnologii de urmărire web`,
      },
      {
        heading: "Informații stocate pe dispozitivul tău",
        body: `Următoarele date sunt stocate local pe dispozitivul tău și nu îl părăsesc niciodată:

• Acces la biblioteca de fotografii: Aplicația citește biblioteca ta de fotografii pentru a scana, afișa și gestiona fotografiile și videoclipurile tale. Accesul de scriere este utilizat pentru ștergere și mutare fișiere între albume.

• Rezultate scanare OCR: Textul recunoscut din capturile de ecran este stocat local pe dispozitivul tău în scopuri de categorizare. Aceste date nu părăsesc niciodată dispozitivul tău.

• Fișiere din Seiful ascuns: Fotografiile și videoclipurile mutate în Seiful ascuns sunt stocate în sistemul de fișiere sandbox al aplicației pe dispozitivul tău, protejate prin autentificare biometrică.

• Preferințe utilizator: Modul temă, preferința de limbă și starea de onboarding sunt stocate local cu stocarea dispozitivului.`,
      },
      {
        heading: "Permisiuni pe care le solicităm",
        body: `• Biblioteca de fotografii (citire și scriere): Necesară pentru funcționarea aplicației. Utilizată pentru scanarea galeriei, detectarea capturilor de ecran, găsirea fotografiilor similare, identificarea videoclipurilor mari și ștergerea sau mutarea fișierelor selectate.

• Autentificare biometrică (Face ID / Touch ID): Utilizată exclusiv pentru a proteja accesul la funcția Seif ascuns. Datele biometrice sunt gestionate complet de sistemul de operare; aplicația nu accesează și nu stochează niciodată informații biometrice direct.`,
      },
      {
        heading: "SDK-uri terțe",
        body: `• ML Kit Text Recognition: Utilizat pentru OCR pe dispozitiv pentru clasificarea capturilor de ecran după conținut. Acest SDK rulează complet pe dispozitivul tău — nicio imagine sau text nu este trimis către vreun server.

• Module Expo Framework: Module standard pentru acces la biblioteca media, sistem de fișiere, localizare și autentificare locală. Niciunul dintre aceste module nu colectează sau transmite date.

Aplicația nu utilizează niciun serviciu de analiză, publicitate sau raportare a erorilor de la terți.`,
      },
      {
        heading: "Modelul de achiziție al aplicației",
        body: "Gallery Guy oferă o versiune gratuită și o achiziție unică. Plățile sunt procesate de Apple prin App Store. Nu avem acces la informațiile tale de plată.",
      },
      {
        heading: "Confidențialitatea copiilor",
        body: "Gallery Guy nu colectează cu bună știință informații de la copii. Aplicația nu necesită înregistrare și nu colectează nicio dată personală, indiferent de vârstă.",
      },
      {
        heading: "Modificări ale acestei politici",
        body: "Putem actualiza această politică de confidențialitate periodic. Modificările intră în vigoare la publicarea politicii actualizate în aplicație sau pe site-ul nostru web.",
      },
      {
        heading: "Contact",
        body: "Pentru întrebări despre această politică de confidențialitate, contactează-ne la: baturcihan@icloud.com",
      },
    ],
  },
  el: {
    title: "Πολιτική Απορρήτου",
    effectiveDate: "Ημερομηνία ισχύος: 22 Φεβρουαρίου 2025",
    sections: [
      {
        heading: "Εισαγωγή",
        body: "Ο Gallery Guy (\u201cεμείς\u201d, \u201cμας\u201d, \u201cη εφαρμογή\u201d) αναπτύσσεται από τον Batur Cihan. Αυτή η πολιτική απορρήτου εξηγεί πώς η εφαρμογή χειρίζεται τις πληροφορίες σου. Ο Gallery Guy είναι σχεδιασμένος με το απόρρητο ως προτεραιότητα \u2014 όλα τα δεδομένα σου παραμένουν στη συσκευή σου. Δεν συλλέγουμε, μεταδίδουμε ή αποθηκεύουμε προσωπικές πληροφορίες σε εξωτερικούς διακομιστές.",
      },
      {
        heading: "Πληροφορίες που δεν συλλέγουμε",
        body: `Ο Gallery Guy δεν συλλέγει καμία προσωπική πληροφορία. Συγκεκριμένα:

• Καμία προσωπική πληροφορία (όνομα, email, αριθμός τηλεφώνου)
• Καμία ανάλυση χρήσης ή τηλεμετρία
• Κανένας αναγνωριστικός διαφημίσεων ή παρακολούθηση
• Κανένα αποτύπωμα συσκευής
• Κανένα δεδομένο τοποθεσίας
• Δεν απαιτείται δημιουργία λογαριασμού
• Κανένα ανέβασμα στο cloud
• Κανένα cookie ή τεχνολογίες παρακολούθησης ιστού`,
      },
      {
        heading: "Πληροφορίες αποθηκευμένες στη συσκευή σου",
        body: `Τα ακόλουθα δεδομένα αποθηκεύονται τοπικά στη συσκευή σου και δεν την εγκαταλείπουν ποτέ:

• Πρόσβαση στη βιβλιοθήκη φωτογραφιών: Η εφαρμογή διαβάζει τη βιβλιοθήκη φωτογραφιών σου για σάρωση, εμφάνιση και διαχείριση φωτογραφιών και βίντεο. Η πρόσβαση εγγραφής χρησιμοποιείται για διαγραφή και μετακίνηση αρχείων μεταξύ άλμπουμ.

• Αποτελέσματα σάρωσης OCR: Το κείμενο που αναγνωρίζεται από στιγμιότυπα οθόνης αποθηκεύεται τοπικά στη συσκευή σου για σκοπούς κατηγοριοποίησης. Αυτά τα δεδομένα δεν εγκαταλείπουν ποτέ τη συσκευή σου.

• Αρχεία στο Κρυφό θησαυροφυλάκιο: Φωτογραφίες και βίντεο που μεταφέρονται στο Κρυφό θησαυροφυλάκιο αποθηκεύονται στο sandbox σύστημα αρχείων της εφαρμογής στη συσκευή σου, προστατευμένα με βιομετρική ταυτοποίηση.

• Προτιμήσεις χρήστη: Η λειτουργία θέματος, η προτίμηση γλώσσας και η κατάσταση εισαγωγής αποθηκεύονται τοπικά στην αποθήκευση της συσκευής.`,
      },
      {
        heading: "Δικαιώματα που ζητάμε",
        body: `• Βιβλιοθήκη φωτογραφιών (ανάγνωση και εγγραφή): Απαιτείται για τη λειτουργία της εφαρμογής. Χρησιμοποιείται για σάρωση της γκαλερί, ανίχνευση στιγμιοτύπων οθόνης, εύρεση παρόμοιων φωτογραφιών, εντοπισμό μεγάλων βίντεο και διαγραφή ή μετακίνηση αρχείων που επιλέγεις.

• Βιομετρική ταυτοποίηση (Face ID / Touch ID): Χρησιμοποιείται αποκλειστικά για την προστασία της πρόσβασης στη λειτουργία Κρυφό θησαυροφυλάκιο. Τα βιομετρικά δεδομένα διαχειρίζονται εξ ολοκλήρου από το λειτουργικό σύστημα· η εφαρμογή δεν έχει ποτέ πρόσβαση ή αποθηκεύει βιομετρικές πληροφορίες απευθείας.`,
      },
      {
        heading: "SDK τρίτων",
        body: `• ML Kit Text Recognition: Χρησιμοποιείται για OCR στη συσκευή για ταξινόμηση στιγμιοτύπων οθόνης κατά περιεχόμενο. Αυτό το SDK εκτελείται εξ ολοκλήρου στη συσκευή σου — καμία εικόνα ή κείμενο δεν αποστέλλεται σε διακομιστή.

• Modules Expo Framework: Τυπικές μονάδες για πρόσβαση στη βιβλιοθήκη πολυμέσων, σύστημα αρχείων, τοπική προσαρμογή και τοπική ταυτοποίηση. Καμία από αυτές τις μονάδες δεν συλλέγει ή μεταδίδει δεδομένα.

Η εφαρμογή δεν χρησιμοποιεί υπηρεσίες ανάλυσης, διαφήμισης ή αναφοράς σφαλμάτων τρίτων.`,
      },
      {
        heading: "Μοντέλο αγοράς της εφαρμογής",
        body: "Ο Gallery Guy προσφέρει δωρεάν έκδοση και εφάπαξ αγορά. Οι πληρωμές επεξεργάζονται από την Apple μέσω του App Store. Δεν έχουμε πρόσβαση στα στοιχεία πληρωμής σου.",
      },
      {
        heading: "Απόρρητο παιδιών",
        body: "Ο Gallery Guy δεν συλλέγει εν γνώσει πληροφορίες από παιδιά. Η εφαρμογή δεν απαιτεί εγγραφή και δεν συλλέγει προσωπικά δεδομένα ανεξαρτήτως ηλικίας.",
      },
      {
        heading: "Αλλαγές σε αυτήν την πολιτική",
        body: "Μπορούμε να ενημερώσουμε αυτήν την πολιτική απορρήτου κατά καιρούς. Οι αλλαγές τίθενται σε ισχύ κατά τη δημοσίευση της ενημερωμένης πολιτικής στην εφαρμογή ή στον ιστότοπό μας.",
      },
      {
        heading: "Επικοινωνία",
        body: "Για ερωτήσεις σχετικά με αυτήν την πολιτική απορρήτου, επικοινώνησε μαζί μας στο: baturcihan@icloud.com",
      },
    ],
  },
  da: {
    title: "Privatlivspolitik",
    effectiveDate: "Ikrafttrædelsesdato: 22. februar 2025",
    sections: [
      {
        heading: "Introduktion",
        body: "Gallery Guy (\u201cvi\u201d, \u201cvores\u201d, \u201cappen\u201d) er udviklet af Batur Cihan. Denne privatlivspolitik forklarer hvordan appen håndterer dine oplysninger. Gallery Guy er designet med privatliv i fokus \u2014 alle dine data forbliver på din enhed. Vi indsamler, overfører eller opbevarer ingen personlige oplysninger på eksterne servere.",
      },
      {
        heading: "Oplysninger vi ikke indsamler",
        body: `Gallery Guy indsamler ingen personlige oplysninger. Specifikt:

• Ingen personlige oplysninger (navn, e-mail, telefonnummer)
• Ingen brugsanalyse eller telemetri
• Ingen reklameidentifikatorer eller sporing
• Ingen enhedsfingeraftryk
• Ingen placeringsdata
• Ingen kontooprettelse nødvendig
• Ingen cloud-upload af nogen art
• Ingen cookies eller web-sporingsteknologier`,
      },
      {
        heading: "Oplysninger gemt på din enhed",
        body: `Følgende data gemmes lokalt på din enhed og forlader den aldrig:

• Fotobiblioteksadgang: Appen læser dit fotobibliotek for at scanne, vise og håndtere dine billeder og videoer. Skriveadgang bruges til sletning og flytning af filer mellem album.

• OCR-scanningsresultater: Tekst genkendt fra skærmbilleder caches lokalt på din enhed til kategoriseringsformål. Disse data forlader aldrig din enhed.

• Filer i Skjult boks: Billeder og videoer flyttet til Skjult boks opbevares i appens sandboxede filsystem på din enhed, beskyttet af biometrisk godkendelse.

• Brugerindstillinger: Dit temavalg, sprogpræference og onboarding-status gemmes lokalt med enhedens lagring.`,
      },
      {
        heading: "Tilladelser vi anmoder om",
        body: `• Fotobibliotek (læse og skrive): Kræves for at appen kan fungere. Bruges til at scanne dit galleri, opdage skærmbilleder, finde lignende billeder, identificere store videoer og slette eller flytte filer du vælger.

• Biometrisk godkendelse (Face ID / Touch ID): Bruges udelukkende til at beskytte adgangen til funktionen Skjult boks. Biometriske data håndteres udelukkende af operativsystemet; appen tilgår eller gemmer aldrig biometriske oplysninger direkte.`,
      },
      {
        heading: "Tredjeparts-SDK'er",
        body: `• ML Kit Text Recognition: Bruges til OCR på enheden til at klassificere skærmbilleder efter indhold. Denne SDK kører udelukkende på din enhed — ingen billeder eller tekst sendes til nogen server.

• Expo Framework-moduler: Standardmoduler til mediebiblioteksadgang, filsystem, lokalisering og lokal godkendelse. Ingen af disse moduler indsamler eller overfører data.

Appen bruger ingen tredjeparts analyse-, reklame- eller crashrapporteringstjenester.`,
      },
      {
        heading: "Appens købsmodel",
        body: "Gallery Guy tilbyder en gratis version og et engangskøb. Betalinger behandles af Apple via App Store. Vi har ikke adgang til dine betalingsoplysninger.",
      },
      {
        heading: "Børns privatliv",
        body: "Gallery Guy indsamler ikke bevidst oplysninger fra børn. Appen kræver ingen registrering og indsamler ingen personlige data uanset alder.",
      },
      {
        heading: "Ændringer i denne politik",
        body: "Vi kan opdatere denne privatlivspolitik med jævne mellemrum. Ændringer træder i kraft ved offentliggørelse af den opdaterede politik i appen eller på vores hjemmeside.",
      },
      {
        heading: "Kontakt",
        body: "For spørgsmål om denne privatlivspolitik, kontakt os på: baturcihan@icloud.com",
      },
    ],
  },
  bg: {
    title: "Политика за поверителност",
    effectiveDate: "Дата на влизане в сила: 22 февруари 2025",
    sections: [
      {
        heading: "Въведение",
        body: "Gallery Guy (\u201cние\u201d, \u201cнашето\u201d, \u201cприложението\u201d) е разработено от Batur Cihan. Тази политика за поверителност обяснява как приложението обработва информацията ти. Gallery Guy е проектирано с поверителността като приоритет \u2014 всички твои данни остават на устройството ти. Не събираме, предаваме или съхраняваме лична информация на външни сървъри.",
      },
      {
        heading: "Информация, която не събираме",
        body: `Gallery Guy не събира никаква лична информация. По-конкретно:

• Никаква лична информация (име, имейл, телефонен номер)
• Никакъв анализ на използването или телеметрия
• Никакви рекламни идентификатори или проследяване
• Никакъв отпечатък на устройството
• Никакви данни за местоположение
• Не се изисква създаване на акаунт
• Никакво качване в облака
• Никакви бисквитки или технологии за уеб проследяване`,
      },
      {
        heading: "Информация, съхранявана на устройството ти",
        body: `Следните данни се съхраняват локално на устройството ти и никога не го напускат:

• Достъп до библиотеката със снимки: Приложението чете библиотеката ти със снимки, за да сканира, показва и управлява снимките и видеата ти. Достъпът за запис се използва за изтриване и преместване на файлове между албуми.

• Резултати от OCR сканиране: Текстът, разпознат от екранни снимки, се кешира локално на устройството ти за целите на категоризацията. Тези данни никога не напускат устройството ти.

• Файлове в Скрития сейф: Снимки и видеа, преместени в Скрития сейф, се съхраняват в пясъчната файлова система на приложението на устройството ти, защитени с биометрично удостоверяване.

• Потребителски предпочитания: Режимът на темата, езиковото предпочитание и състоянието на въвеждане се съхраняват локално в хранилището на устройството.`,
      },
      {
        heading: "Разрешения, които искаме",
        body: `• Библиотека със снимки (четене и запис): Необходимо за работата на приложението. Използва се за сканиране на галерията, откриване на екранни снимки, намиране на подобни снимки, идентифициране на големи видеа и изтриване или преместване на файлове, които избереш.

• Биометрично удостоверяване (Face ID / Touch ID): Използва се единствено за защита на достъпа до функцията Скрит сейф. Биометричните данни се обработват изцяло от операционната система; приложението никога не осъществява достъп или съхранява биометрична информация директно.`,
      },
      {
        heading: "SDK-та на трети страни",
        body: `• ML Kit Text Recognition: Използва се за OCR на устройството за класификация на екранни снимки по съдържание. Този SDK работи изцяло на устройството ти — никакви изображения или текст не се изпращат до сървър.

• Модули на Expo Framework: Стандартни модули за достъп до медийната библиотека, файлова система, локализация и локално удостоверяване. Нито един от тези модули не събира или предава данни.

Приложението не използва услуги за анализ, реклама или докладване на сривове от трети страни.`,
      },
      {
        heading: "Модел на покупка на приложението",
        body: "Gallery Guy предлага безплатна версия и еднократна покупка. Плащанията се обработват от Apple чрез App Store. Нямаме достъп до информацията за плащане.",
      },
      {
        heading: "Поверителност на децата",
        body: "Gallery Guy не събира съзнателно информация от деца. Приложението не изисква регистрация и не събира никакви лични данни, независимо от възрастта.",
      },
      {
        heading: "Промени в тази политика",
        body: "Можем да актуализираме тази политика за поверителност периодично. Промените влизат в сила при публикуване на актуализираната политика в приложението или на уебсайта ни.",
      },
      {
        heading: "Контакт",
        body: "За въпроси относно тази политика за поверителност, свържи се с нас на: baturcihan@icloud.com",
      },
    ],
  },
  cs: {
    title: "Zásady ochrany osobních údajů",
    effectiveDate: "Datum účinnosti: 22. února 2025",
    sections: [
      {
        heading: "Úvod",
        body: "Gallery Guy (\u201cmy\u201d, \u201cnáš\u201d, \u201caplikace\u201d) je vyvinut Batur Cihanem. Tyto zásady ochrany osobních údajů vysvětlují, jak aplikace nakládá s vašimi informacemi. Gallery Guy je navržen s ochranou soukromí jako prioritou \u2014 všechna vaše data zůstávají na vašem zařízení. Neshromažďujeme, nepřenášíme ani neukládáme žádné osobní informace na externích serverech.",
      },
      {
        heading: "Informace, které neshromažďujeme",
        body: `Gallery Guy neshromažďuje žádné osobní informace. Konkrétně:

• Žádné osobní informace (jméno, e-mail, telefonní číslo)
• Žádná analýza používání nebo telemetrie
• Žádné reklamní identifikátory nebo sledování
• Žádný otisk zařízení
• Žádná data o poloze
• Není vyžadováno vytvoření účtu
• Žádné nahrávání do cloudu
• Žádné cookies nebo technologie webového sledování`,
      },
      {
        heading: "Informace uložené na vašem zařízení",
        body: `Následující data jsou uložena lokálně na vašem zařízení a nikdy jej neopouštějí:

• Přístup k fotoknihovně: Aplikace čte vaši fotoknihovnu pro skenování, zobrazení a správu fotek a videí. Přístup pro zápis se používá pro mazání a přesouvání souborů mezi alby.

• Výsledky OCR skenování: Text rozpoznaný ze snímků obrazovky je uložen lokálně na vašem zařízení pro účely kategorizace. Tato data nikdy neopouštějí vaše zařízení.

• Soubory ve Skrytém trezoru: Fotky a videa přesunutá do Skrytého trezoru jsou uložena v sandboxovaném souborovém systému aplikace na vašem zařízení, chráněna biometrickou autentizací.

• Uživatelské předvolby: Režim motivu, jazyková preference a stav onboardingu jsou uloženy lokálně v úložišti zařízení.`,
      },
      {
        heading: "Oprávnění, která požadujeme",
        body: `• Fotoknihovna (čtení a zápis): Vyžadováno pro fungování aplikace. Používá se ke skenování galerie, detekci snímků obrazovky, vyhledání podobných fotek, identifikaci velkých videí a mazání nebo přesouvání souborů, které vyberete.

• Biometrická autentizace (Face ID / Touch ID): Používá se výhradně k ochraně přístupu k funkci Skrytý trezor. Biometrická data jsou zpracovávána výhradně operačním systémem; aplikace nikdy nepřistupuje k biometrickým informacím přímo ani je neukládá.`,
      },
      {
        heading: "SDK třetích stran",
        body: `• ML Kit Text Recognition: Používá se pro OCR na zařízení ke klasifikaci snímků obrazovky podle obsahu. Toto SDK běží výhradně na vašem zařízení — žádné obrázky ani text nejsou odesílány na server.

• Moduly Expo Framework: Standardní moduly pro přístup k mediální knihovně, souborovému systému, lokalizaci a lokální autentizaci. Žádný z těchto modulů neshromažďuje ani nepřenáší data.

Aplikace nepoužívá žádné analytické, reklamní ani crash reportovací služby třetích stran.`,
      },
      {
        heading: "Model nákupu aplikace",
        body: "Gallery Guy nabízí bezplatnou verzi a jednorázový nákup. Platby jsou zpracovávány společností Apple prostřednictvím App Store. Nemáme přístup k vašim platebním informacím.",
      },
      {
        heading: "Ochrana soukromí dětí",
        body: "Gallery Guy vědomě neshromažďuje informace od dětí. Aplikace nevyžaduje registraci a neshromažďuje žádné osobní údaje bez ohledu na věk.",
      },
      {
        heading: "Změny těchto zásad",
        body: "Tyto zásady ochrany osobních údajů můžeme čas od času aktualizovat. Změny vstupují v platnost zveřejněním aktualizovaných zásad v aplikaci nebo na naší webové stránce.",
      },
      {
        heading: "Kontakt",
        body: "V případě dotazů ohledně těchto zásad ochrany osobních údajů nás kontaktujte na: baturcihan@icloud.com",
      },
    ],
  },
  az: {
    title: "Məxfilik Siyasəti",
    effectiveDate: "Qüvvəyə minmə tarixi: 22 fevral 2025",
    sections: [
      {
        heading: "Giriş",
        body: "Gallery Guy (\u201cbiz\u201d, \u201cbizim\u201d, \u201ct\u0259tbiq\u201d) Batur Cihan t\u0259r\u0259find\u0259n haz\u0131rlan\u0131b. Bu m\u0259xfilik siyas\u0259ti t\u0259tbiqin m\u0259lumatlar\u0131n\u0131z\u0131 nec\u0259 idar\u0259 etdiyini izah edir. Gallery Guy m\u0259xfilik prioritet olaraq dizayn edilib \u2014 b\u00fct\u00fcn m\u0259lumatlar\u0131n\u0131z cihaz\u0131n\u0131zda qal\u0131r. Xarici serverl\u0259rd\u0259 he\u00e7 bir \u015f\u0259xsi m\u0259lumat toplamır, \u00f6t\u00fcrmür v\u0259 ya saxlam\u0131r\u0131q.",
      },
      {
        heading: "Toplamadığımız məlumatlar",
        body: `Gallery Guy heç bir şəxsi məlumat toplamır. Xüsusilə:

• Heç bir şəxsi məlumat (ad, e-poçt, telefon nömrəsi)
• Heç bir istifadə analitikası və ya telemetriya
• Heç bir reklam identifikatoru və ya izləmə
• Heç bir cihaz barmaq izi
• Heç bir məkan datası
• Hesab yaratmaq tələb olunmur
• Heç bir bulud yükləməsi
• Heç bir cookie və ya veb izləmə texnologiyası`,
      },
      {
        heading: "Cihazınızda saxlanılan məlumatlar",
        body: `Aşağıdakı məlumatlar cihazınızda lokal olaraq saxlanılır və heç vaxt onu tərk etmir:

• Foto kitabxanasına giriş: Tətbiq şəkillərinizi və videolarınızı skan etmək, göstərmək və idarə etmək üçün foto kitabxananızı oxuyur. Yazma girişi faylların silinməsi və albumlar arasında köçürülməsi üçün istifadə olunur.

• OCR skan nəticələri: Ekran görüntülərindən tanınan mətn kateqoriyalaşdırma məqsədləri üçün cihazınızda lokal olaraq saxlanılır. Bu məlumatlar heç vaxt cihazınızı tərk etmir.

• Gizli seyfdəki fayllar: Gizli seyfə köçürülmüş şəkillər və videolar biometrik autentifikasiya ilə qorunan tətbiqin sandbox fayl sistemində cihazınızda saxlanılır.

• İstifadəçi tərəfləri: Mövzu rejimi, dil tərcihi və onboarding statusu cihaz yaddaşında lokal olaraq saxlanılır.`,
      },
      {
        heading: "Tələb etdiyimiz icazələr",
        body: `• Foto kitabxanası (oxuma və yazma): Tətbiqin işləməsi üçün tələb olunur. Qalereyaızı skan etmək, ekran görüntülərini aşkar etmək, oxşar şəkilləri tapmaq, böyük videoları müəyyən etmək və seçdiyiniz faylları silmək və ya köçürmək üçün istifadə olunur.

• Biometrik autentifikasiya (Face ID / Touch ID): Yalnız Gizli seyf funksiyasına girişi qorumaq üçün istifadə olunur. Biometrik məlumatlar tamamilə əməliyyat sistemi tərəfindən idarə olunur; tətbiq heç vaxt biometrik məlumatlara birbaşa giriş etmir və ya saxlamır.`,
      },
      {
        heading: "Üçüncü tərəf SDK-ları",
        body: `• ML Kit Text Recognition: Ekran görüntülərini məzmuna görə təsnif etmək üçün cihazda OCR üçün istifadə olunur. Bu SDK tamamilə cihazınızda işləyir — heç bir şəkil və ya mətn serverə göndərilmir.

• Expo Framework modulları: Media kitabxanasına giriş, fayl sistemi, lokallaşdırma və lokal autentifikasiya üçün standart modullar. Bu modulların heç biri məlumat toplamır və ya ötürmür.

Tətbiq heç bir üçüncü tərəf analitika, reklam və ya qəza hesabatı xidmətindən istifadə etmir.`,
      },
      {
        heading: "Tətbiqin alış modeli",
        body: "Gallery Guy pulsuz versiya və birdəfəlik alış təklif edir. Ödənişlər Apple tərəfindən App Store vasitəsilə emal olunur. Ödəniş məlumatlarınıza girişimiz yoxdur.",
      },
      {
        heading: "Uşaqların məxfiliyi",
        body: "Gallery Guy bilərəkdən uşaqlardan məlumat toplamır. Tətbiq qeydiyyat tələb etmir və yaşdan asılı olmayaraq heç bir şəxsi məlumat toplamır.",
      },
      {
        heading: "Bu siyasətdə dəyişikliklər",
        body: "Bu məxfilik siyasətini vaxtaşırı yeniləyə bilərik. Dəyişikliklər tətbiqdə və ya veb saytımızda yenilənmiş siyasətin dərc edilməsi ilə qüvvəyə minir.",
      },
      {
        heading: "Əlaqə",
        body: "Bu məxfilik siyasəti ilə bağlı suallarınız üçün bizimlə əlaqə saxlayın: baturcihan@icloud.com",
      },
    ],
  },
  mk: {
    title: "Политика за приватност",
    effectiveDate: "Датум на стапување во сила: 22 февруари 2025",
    sections: [
      {
        heading: "Вовед",
        body: `Gallery Guy (\u201cние\u201d, \u201cнаша\u201d, \u201cапликацијата\u201d) е развиена од Batur Cihan. Оваа Политика за приватност објаснува како апликацијата ги обработува вашите информации. Gallery Guy е дизајниран со приватност како основа \u2014 сите ваши податоци остануваат на вашиот уред. Не собираме, пренесуваме или складираме лични информации на надворешни сервери.`,
      },
      {
        heading: "Информации кои не ги собираме",
        body: `Gallery Guy не собира никакви лични информации. Конкретно:

• Без лични информации (име, е-пошта, телефонски број)
• Без аналитика или телеметрија за користење
• Без рекламни идентификатори или следење
• Без отпечатоци на уреди
• Без податоци за локација
• Без потреба од креирање сметка
• Без прикачување на облак од каков било вид
• Без колачиња или технологии за веб следење`,
      },
      {
        heading: "Информации складирани на вашиот уред",
        body: `Следниве податоци се складираат локално на вашиот уред и никогаш не го напуштаат:

• Пристап до библиотека со фотографии: Апликацијата ја чита вашата библиотека со фотографии за скенирање, прикажување и управување со вашите фотографии и видеа. Пристапот за запишување се користи за бришење и преместување датотеки меѓу албуми.

• Резултати од OCR скенирање: Текстот препознаен од слики од екран е кеширан локално на вашиот уред за цели на категоризација. Овие податоци никогаш не го напуштаат вашиот уред.

• Датотеки во скриен трезор: Фотографиите и видеата преместени во Скриениот трезор се складираат во изолираниот датотечен систем на апликацијата на вашиот уред, заштитени со биометриска автентикација.

• Кориснички преференции: Вашиот режим на тема, јазична преференција и состојба на завршување на воведот се складираат локално користејќи складирање на уредот.`,
      },
      {
        heading: "Дозволи кои ги бараме",
        body: `• Библиотека со фотографии (читање и запишување): Потребно за функционирање на апликацијата. Се користи за скенирање на вашата галерија, откривање слики од екран, наоѓање слични фотографии, идентификување големи видеа и бришење или преместување датотеки кои ги избирате.

• Биометриска автентикација (Face ID / Touch ID): Се користи исклучиво за заштита на пристапот до функцијата Скриен трезор. Биометриските податоци целосно ги обработува операцискиот систем; апликацијата никогаш не пристапува или складира биометриски информации директно.`,
      },
      {
        heading: "SDK-а од трети лица",
        body: `• ML Kit Text Recognition: Се користи за OCR на уредот за класификација на слики од екран по содржина. Овој SDK работи целосно на вашиот уред — ниту една слика или текст не се испраќа на сервер.

• Expo Framework модули: Стандардни модули за пристап до медиумска библиотека, датотечен систем, локализација и локална автентикација. Ниту еден од овие модули не собира или пренесува податоци.

Апликацијата не користи услуги за аналитика, рекламирање или известување за падови од трети лица.`,
      },
      {
        heading: "Безбедност на податоци",
        body: `• Сите податоци остануваат на вашиот уред.
• Скриениот трезор е заштитен со биометриска автентикација на ниво на уредот.
• Ниту едни податоци не се пренесуваат преку интернет.
• Нема серверска инфраструктура или складирање во облак.`,
      },
      {
        heading: "Приватност на децата",
        body: "Gallery Guy не собира податоци од никого, вклучувајќи деца. Апликацијата не бара креирање сметка и нема можности за мрежна комуникација.",
      },
      {
        heading: "Промени на оваа политика",
        body: "Може да ја ажурираме оваа Политика за приватност. Промените ќе бидат објавени на оваа страница со ажуриран датум. Продолженото користење на апликацијата по промените претставува прифаќање.",
      },
      {
        heading: "Контакт",
        body: "Ако имате прашања за оваа Политика за приватност, контактирајте нè на: bfrkcihan@gmail.com",
      },
    ],
  },
  sl: {
    title: "Politika zasebnosti",
    effectiveDate: "Datum veljavnosti: 22. februar 2025",
    sections: [
      {
        heading: "Uvod",
        body: `Gallery Guy (\u201Emi\u201D, \u201Cnaša\u201D, \u201Caplikacija\u201D) je razvil Batur Cihan. Ta Politika zasebnosti pojasnjuje, kako aplikacija obravnava vaše podatke. Gallery Guy je zasnovan z zasebnostjo kot jedrom \u2014 vsi vaši podatki ostanejo na vaši napravi. Ne zbiramo, prenašamo ali shranjujemo nobenih osebnih podatkov na zunanjih strežnikih.`,
      },
      {
        heading: "Podatki, ki jih ne zbiramo",
        body: `Gallery Guy ne zbira nobenih osebnih podatkov. Natančneje:

• Brez osebnih podatkov (ime, e-pošta, telefonska številka)
• Brez analitike ali telemetrije uporabe
• Brez oglaševalskih identifikatorjev ali sledenja
• Brez prstnih odtisov naprav
• Brez podatkov o lokaciji
• Brez potrebe po ustvarjanju računa
• Brez nalaganja v oblak kakršne koli vrste
• Brez piškotkov ali tehnologij spletnega sledenja`,
      },
      {
        heading: "Podatki, shranjeni na vaši napravi",
        body: `Naslednji podatki so shranjeni lokalno na vaši napravi in je nikoli ne zapustijo:

• Dostop do knjižnice fotografij: Aplikacija bere vašo knjižnico fotografij za skeniranje, prikaz in upravljanje vaših fotografij in videov. Dostop za pisanje se uporablja za brisanje in premikanje datotek med albumi.

• Rezultati OCR skeniranja: Besedilo, prepoznano iz posnetkov zaslona, je predpomnjeno lokalno na vaši napravi za namene kategorizacije. Ti podatki nikoli ne zapustijo vaše naprave.

• Datoteke v skritem trezorju: Fotografije in videi, premaknjeni v Skriti trezor, so shranjeni v izoliranem datotečnem sistemu aplikacije na vaši napravi, zaščiteni z biometrično avtentikacijo.

• Uporabniške nastavitve: Vaš način teme, jezikovna nastavitev in stanje dokončanja uvoda so shranjeni lokalno z uporabo shranjevanja na napravi.`,
      },
      {
        heading: "Dovoljenja, ki jih zahtevamo",
        body: `• Knjižnica fotografij (branje in pisanje): Potrebno za delovanje aplikacije. Uporablja se za skeniranje vaše galerije, zaznavanje posnetkov zaslona, iskanje podobnih fotografij, identifikacijo velikih videov ter brisanje ali premikanje datotek, ki jih izberete.

• Biometrična avtentikacija (Face ID / Touch ID): Uporablja se izključno za zaščito dostopa do funkcije Skriti trezor. Biometrične podatke v celoti obdeluje operacijski sistem; aplikacija nikoli ne dostopa do biometričnih podatkov neposredno ali jih shranjuje.`,
      },
      {
        heading: "SDK-ji tretjih oseb",
        body: `• ML Kit Text Recognition: Uporablja se za OCR na napravi za klasifikacijo posnetkov zaslona po vsebini. Ta SDK deluje v celoti na vaši napravi — nobena slika ali besedilo se ne pošlje na strežnik.

• Expo Framework moduli: Standardni moduli za dostop do medijske knjižnice, datotečnega sistema, lokalizacije in lokalne avtentikacije. Noben od teh modulov ne zbira ali prenaša podatkov.

Aplikacija ne uporablja nobenih storitev za analitiko, oglaševanje ali poročanje o sesutjih tretjih oseb.`,
      },
      {
        heading: "Varnost podatkov",
        body: `• Vsi podatki ostanejo na vaši napravi.
• Skriti trezor je zaščiten z biometrično avtentikacijo na ravni naprave.
• Nobeni podatki se ne prenašajo prek interneta.
• Ni strežniške infrastrukture ali shranjevanja v oblaku.`,
      },
      {
        heading: "Zasebnost otrok",
        body: "Gallery Guy ne zbira podatkov od nikogar, vključno z otroki. Aplikacija ne zahteva ustvarjanja računa in nima zmožnosti spletne komunikacije.",
      },
      {
        heading: "Spremembe te politike",
        body: "To Politiko zasebnosti lahko posodobimo. Spremembe bodo objavljene na tej strani s posodobljenim datumom. Nadaljnja uporaba aplikacije po spremembah pomeni sprejem.",
      },
      {
        heading: "Kontakt",
        body: "Če imate vprašanja o tej Politiki zasebnosti, nas kontaktirajte na: bfrkcihan@gmail.com",
      },
    ],
  },
  pl: {
    title: "Polityka prywatności",
    effectiveDate: "Data wejścia w życie: 22 lutego 2025",
    sections: [
      {
        heading: "Wstęp",
        body: `Gallery Guy (\u201Emy\u201D, \u201Cnasz\u201D, \u201Caplikacja\u201D) został opracowany przez Batur Cihan. Niniejsza Polityka prywatności wyjaśnia, jak aplikacja obsługuje Twoje dane. Gallery Guy został zaprojektowany z myślą o prywatności \u2014 wszystkie Twoje dane pozostają na Twoim urządzeniu. Nie zbieramy, nie przesyłamy ani nie przechowujemy żadnych danych osobowych na zewnętrznych serwerach.`,
      },
      {
        heading: "Informacje, których nie zbieramy",
        body: `Gallery Guy nie zbiera żadnych danych osobowych. W szczególności:

• Brak danych osobowych (imię, e-mail, numer telefonu)
• Brak analityki użytkowania lub telemetrii
• Brak identyfikatorów reklamowych lub śledzenia
• Brak odcisków palców urządzeń
• Brak danych o lokalizacji
• Brak wymogu tworzenia konta
• Brak przesyłania do chmury jakiegokolwiek rodzaju
• Brak plików cookie lub technologii śledzenia internetowego`,
      },
      {
        heading: "Informacje przechowywane na Twoim urządzeniu",
        body: `Następujące dane są przechowywane lokalnie na Twoim urządzeniu i nigdy go nie opuszczają:

• Dostęp do biblioteki zdjęć: Aplikacja odczytuje Twoją bibliotekę zdjęć w celu skanowania, wyświetlania i zarządzania zdjęciami i filmami. Dostęp do zapisu jest używany do usuwania i przenoszenia plików między albumami.

• Wyniki skanowania OCR: Tekst rozpoznany ze zrzutów ekranu jest buforowany lokalnie na Twoim urządzeniu w celach kategoryzacji. Te dane nigdy nie opuszczają Twojego urządzenia.

• Pliki w ukrytym sejfie: Zdjęcia i filmy przeniesione do Ukrytego sejfu są przechowywane w izolowanym systemie plików aplikacji na Twoim urządzeniu, chronione uwierzytelnianiem biometrycznym.

• Preferencje użytkownika: Tryb motywu, preferencje językowe i stan ukończenia wprowadzenia są przechowywane lokalnie za pomocą pamięci urządzenia.`,
      },
      {
        heading: "Uprawnienia, o które prosimy",
        body: `• Biblioteka zdjęć (odczyt i zapis): Wymagane do funkcjonowania aplikacji. Używane do skanowania galerii, wykrywania zrzutów ekranu, znajdowania podobnych zdjęć, identyfikacji dużych filmów oraz usuwania lub przenoszenia wybranych plików.

• Uwierzytelnianie biometryczne (Face ID / Touch ID): Używane wyłącznie do ochrony dostępu do funkcji Ukryty sejf. Dane biometryczne są obsługiwane całkowicie przez system operacyjny; aplikacja nigdy nie uzyskuje bezpośredniego dostępu do danych biometrycznych ani ich nie przechowuje.`,
      },
      {
        heading: "SDK firm trzecich",
        body: `• ML Kit Text Recognition: Używany do OCR na urządzeniu w celu klasyfikacji zrzutów ekranu według zawartości. Ten SDK działa całkowicie na Twoim urządzeniu — żadne obrazy ani tekst nie są wysyłane na serwer.

• Moduły Expo Framework: Standardowe moduły do dostępu do biblioteki mediów, systemu plików, lokalizacji i lokalnego uwierzytelniania. Żaden z tych modułów nie zbiera ani nie przesyła danych.

Aplikacja nie korzysta z żadnych usług analitycznych, reklamowych ani raportowania awarii firm trzecich.`,
      },
      {
        heading: "Bezpieczeństwo danych",
        body: `• Wszystkie dane pozostają na Twoim urządzeniu.
• Ukryty sejf jest chroniony uwierzytelnianiem biometrycznym na poziomie urządzenia.
• Żadne dane nie są przesyłane przez internet.
• Brak infrastruktury serwerowej ani przechowywania w chmurze.`,
      },
      {
        heading: "Prywatność dzieci",
        body: "Gallery Guy nie zbiera danych od nikogo, w tym od dzieci. Aplikacja nie wymaga tworzenia konta i nie posiada możliwości komunikacji online.",
      },
      {
        heading: "Zmiany niniejszej polityki",
        body: "Możemy zaktualizować niniejszą Politykę prywatności. Zmiany zostaną opublikowane na tej stronie z zaktualizowaną datą. Dalsze korzystanie z aplikacji po zmianach oznacza akceptację.",
      },
      {
        heading: "Kontakt",
        body: "Jeśli masz pytania dotyczące niniejszej Polityki prywatności, skontaktuj się z nami: bfrkcihan@gmail.com",
      },
    ],
  },
  uk: {
    title: "Політика конфіденційності",
    effectiveDate: "Дата набрання чинності: 22 лютого 2025",
    sections: [
      {
        heading: "Вступ",
        body: `Gallery Guy (\u201Cми\u201D, \u201Cнаш\u201D, \u201Cдодаток\u201D) розроблений Batur Cihan. Ця Політика конфіденційності пояснює, як додаток обробляє вашу інформацію. Gallery Guy створений із конфіденційністю як основою \u2014 усі ваші дані залишаються на вашому пристрої. Ми не збираємо, не передаємо та не зберігаємо жодних особистих даних на зовнішніх серверах.`,
      },
      {
        heading: "Інформація, яку ми не збираємо",
        body: `Gallery Guy не збирає жодних особистих даних. Зокрема:

• Жодних особистих даних (ім'я, електронна пошта, номер телефону)
• Жодної аналітики використання або телеметрії
• Жодних рекламних ідентифікаторів або відстеження
• Жодних відбитків пристроїв
• Жодних даних про місцезнаходження
• Створення облікового запису не потрібне
• Жодного завантаження в хмару будь-якого виду
• Жодних файлів cookie або технологій веб-відстеження`,
      },
      {
        heading: "Інформація, що зберігається на вашому пристрої",
        body: `Наступні дані зберігаються локально на вашому пристрої та ніколи його не покидають:

• Доступ до бібліотеки фото: Додаток читає вашу бібліотеку фото для сканування, відображення та керування вашими фото та відео. Доступ на запис використовується для видалення та переміщення файлів між альбомами.

• Результати OCR-сканування: Текст, розпізнаний зі знімків екрана, кешується локально на вашому пристрої для цілей категоризації. Ці дані ніколи не покидають ваш пристрій.

• Файли прихованого сейфа: Фото та відео, переміщені до Прихованого сейфа, зберігаються в ізольованій файловій системі додатку на вашому пристрої, захищені біометричною автентифікацією.

• Налаштування користувача: Ваш режим теми, мовні налаштування та стан завершення вступу зберігаються локально за допомогою сховища пристрою.`,
      },
      {
        heading: "Дозволи, які ми запитуємо",
        body: `• Бібліотека фото (читання та запис): Необхідно для роботи додатку. Використовується для сканування вашої галереї, виявлення знімків екрана, пошуку схожих фото, ідентифікації великих відео та видалення або переміщення обраних файлів.

• Біометрична автентифікація (Face ID / Touch ID): Використовується виключно для захисту доступу до функції Прихований сейф. Біометричні дані повністю обробляються операційною системою; додаток ніколи не отримує доступу до біометричних даних безпосередньо та не зберігає їх.`,
      },
      {
        heading: "SDK третіх сторін",
        body: `• ML Kit Text Recognition: Використовується для OCR на пристрої для класифікації знімків екрана за вмістом. Цей SDK працює повністю на вашому пристрої — жодні зображення чи текст не надсилаються на сервер.

• Модулі Expo Framework: Стандартні модулі для доступу до медіатеки, файлової системи, локалізації та локальної автентифікації. Жоден із цих модулів не збирає та не передає дані.

Додаток не використовує жодних сервісів аналітики, реклами або звітування про збої третіх сторін.`,
      },
      {
        heading: "Безпека даних",
        body: `• Усі дані залишаються на вашому пристрої.
• Прихований сейф захищений біометричною автентифікацією на рівні пристрою.
• Жодні дані не передаються через інтернет.
• Немає серверної інфраструктури або хмарного сховища.`,
      },
      {
        heading: "Конфіденційність дітей",
        body: "Gallery Guy не збирає дані від нікого, включаючи дітей. Додаток не вимагає створення облікового запису та не має можливостей онлайн-комунікації.",
      },
      {
        heading: "Зміни цієї політики",
        body: "Ми можемо оновити цю Політику конфіденційності. Зміни будуть опубліковані на цій сторінці з оновленою датою. Подальше використання додатку після змін означає прийняття.",
      },
      {
        heading: "Контакт",
        body: "Якщо у вас є питання щодо цієї Політики конфіденційності, зв'яжіться з нами: bfrkcihan@gmail.com",
      },
    ],
  },
  fi: {
    title: "Tietosuojakäytäntö",
    effectiveDate: "Voimaantulopäivä: 22. helmikuuta 2025",
    sections: [
      {
        heading: "Johdanto",
        body: `Gallery Guy (\u201Cme\u201D, \u201Cmeidän\u201D, \u201Csovellus\u201D) on Batur Cihanin kehittämä. Tämä Tietosuojakäytäntö selittää, miten sovellus käsittelee tietojasi. Gallery Guy on suunniteltu yksityisyys ytimessään \u2014 kaikki tietosi pysyvät laitteellasi. Emme kerää, lähetä tai tallenna mitään henkilökohtaisia tietoja ulkoisille palvelimille.`,
      },
      {
        heading: "Tiedot joita emme kerää",
        body: `Gallery Guy ei kerää mitään henkilökohtaisia tietoja. Erityisesti:

• Ei henkilökohtaisia tietoja (nimi, sähköposti, puhelinnumero)
• Ei käytön analytiikkaa tai telemetriaa
• Ei mainostunnisteita tai seurantaa
• Ei laitteen sormenjälkeä
• Ei sijaintitietoja
• Ei tilin luontia vaadita
• Ei pilvilatauksia minkäänlaisia
• Ei evästeitä tai verkonseurantateknologioita`,
      },
      {
        heading: "Laitteellesi tallennetut tiedot",
        body: `Seuraavat tiedot tallennetaan paikallisesti laitteellesi eivätkä koskaan poistu sieltä:

• Valokuvakirjaston käyttöoikeus: Sovellus lukee valokuvakirjastoasi skannatakseen, näyttääkseen ja hallinnoidakseen valokuviasi ja videoitasi. Kirjoitusoikeutta käytetään tiedostojen poistamiseen ja siirtämiseen albumien välillä.

• OCR-skannauksen tulokset: Kuvakaappauksista tunnistettu teksti välimuistitetaan paikallisesti laitteellesi luokittelutarkoituksiin. Nämä tiedot eivät koskaan poistu laitteeltasi.

• Piilotetun holvin tiedostot: Piilotettuun holviin siirretyt valokuvat ja videot tallennetaan sovelluksen eristettyyn tiedostojärjestelmään laitteellasi, suojattuna biometrisellä todennuksella.

• Käyttäjäasetukset: Teematila, kieliasetus ja perehdytyksen valmistumistila tallennetaan paikallisesti laitteen tallennustilaan.`,
      },
      {
        heading: "Pyytämämme käyttöoikeudet",
        body: `• Valokuvakirjasto (luku ja kirjoitus): Vaaditaan sovelluksen toimintaan. Käytetään gallerian skannaamiseen, kuvakaappausten tunnistamiseen, samankaltaisten kuvien etsimiseen, suurten videoiden tunnistamiseen ja valitsemiesi tiedostojen poistamiseen tai siirtämiseen.

• Biometrinen todennus (Face ID / Touch ID): Käytetään yksinomaan Piilotettu holvi -ominaisuuden pääsyn suojaamiseen. Biometriset tiedot käsittelee kokonaan käyttöjärjestelmä; sovellus ei koskaan pääse suoraan biometrisiin tietoihin tai tallenna niitä.`,
      },
      {
        heading: "Kolmannen osapuolen SDK:t",
        body: `• ML Kit Text Recognition: Käytetään laitteella tapahtuvaan OCR:ään kuvakaappausten sisällön luokitteluun. Tämä SDK toimii kokonaan laitteellasi — mitään kuvia tai tekstiä ei lähetetä palvelimelle.

• Expo Framework -moduulit: Vakiomoduulit mediakirjaston käyttöön, tiedostojärjestelmään, lokalisointiin ja paikalliseen todennukseen. Mikään näistä moduuleista ei kerää tai lähetä tietoja.

Sovellus ei käytä mitään kolmannen osapuolen analytiikka-, mainonta- tai kaatumisraportointipalveluja.`,
      },
      {
        heading: "Tietoturva",
        body: `• Kaikki tiedot pysyvät laitteellasi.
• Piilotettu holvi on suojattu laitetason biometrisellä todennuksella.
• Mitään tietoja ei lähetetä internetin kautta.
• Ei palvelininfrastruktuuria tai pilvitallennusta.`,
      },
      {
        heading: "Lasten yksityisyys",
        body: "Gallery Guy ei kerää tietoja keneltäkään, mukaan lukien lapsilta. Sovellus ei vaadi tilin luontia eikä siinä ole verkkoviestintäominaisuuksia.",
      },
      {
        heading: "Tämän käytännön muutokset",
        body: "Voimme päivittää tätä Tietosuojakäytäntöä. Muutokset julkaistaan tällä sivulla päivitetyllä päivämäärällä. Sovelluksen jatkuva käyttö muutosten jälkeen tarkoittaa hyväksymistä.",
      },
      {
        heading: "Yhteystiedot",
        body: "Jos sinulla on kysymyksiä tästä Tietosuojakäytännöstä, ota yhteyttä: bfrkcihan@gmail.com",
      },
    ],
  },
  hu: {
    title: "Adatvédelmi irányelvek",
    effectiveDate: "Hatálybalépés dátuma: 2025. február 22.",
    sections: [
      {
        heading: "Bevezetés",
        body: `A Gallery Guy (\u201Emi\u201D, \u201Ca miénk\u201D, \u201Caz alkalmazás\u201D) fejlesztője Batur Cihan. Ez az Adatvédelmi irányelv elmagyarázza, hogyan kezeli az alkalmazás az adataidat. A Gallery Guy az adatvédelmet szem előtt tartva készült \u2014 minden adatod az eszközödön marad. Nem gyűjtünk, nem továbbítunk és nem tárolunk semmilyen személyes adatot külső szervereken.`,
      },
      {
        heading: "Információk, amelyeket nem gyűjtünk",
        body: `A Gallery Guy nem gyűjt semmilyen személyes adatot. Konkrétan:

• Nincs személyes adat (név, e-mail, telefonszám)
• Nincs használati analitika vagy telemetria
• Nincsenek hirdetési azonosítók vagy nyomon követés
• Nincs eszköz-ujjlenyomat
• Nincs helyadat
• Nincs szükség fiók létrehozására
• Nincs semmilyen felhőfeltöltés
• Nincsenek sütik vagy webes nyomkövető technológiák`,
      },
      {
        heading: "Az eszközödön tárolt információk",
        body: `A következő adatok helyben, az eszközödön vannak tárolva és soha nem hagyják el:

• Fotókönyvtár hozzáférés: Az alkalmazás olvassa a fotókönyvtáradat a szkenneléshez, megjelenítéshez és a fotóid és videóid kezeléséhez. Az írási hozzáférés a fájlok törléséhez és albumok közötti mozgatásához használatos.

• OCR szkennelés eredményei: A képernyőképekből felismert szöveg helyben kerül gyorsítótárazásra az eszközödön kategorizálási célokra. Ezek az adatok soha nem hagyják el az eszközödet.

• Rejtett széf fájljai: A Rejtett széfbe áthelyezett fotók és videók az alkalmazás elszigetelt fájlrendszerében vannak tárolva az eszközödön, biometrikus hitelesítéssel védve.

• Felhasználói beállítások: A téma mód, nyelvi beállítás és a bevezető befejezési állapota helyben van tárolva az eszköz tárhelyén.`,
      },
      {
        heading: "Kért engedélyek",
        body: `• Fotókönyvtár (olvasás és írás): Az alkalmazás működéséhez szükséges. A galéria szkenneléséhez, képernyőképek felismeréséhez, hasonló fotók kereséséhez, nagy videók azonosításához és a kiválasztott fájlok törléséhez vagy mozgatásához használatos.

• Biometrikus hitelesítés (Face ID / Touch ID): Kizárólag a Rejtett széf funkció hozzáférésének védelméhez használatos. A biometrikus adatokat teljes egészében az operációs rendszer kezeli; az alkalmazás soha nem fér hozzá közvetlenül a biometrikus adatokhoz és nem tárolja azokat.`,
      },
      {
        heading: "Harmadik fél SDK-k",
        body: `• ML Kit Text Recognition: Az eszközön történő OCR-hez használatos a képernyőképek tartalom szerinti osztályozásához. Ez az SDK teljes egészében az eszközödön fut — semmilyen kép vagy szöveg nem kerül elküldésre szerverre.

• Expo Framework modulok: Standard modulok a médiakönyvtár-hozzáféréshez, fájlrendszerhez, lokalizációhoz és helyi hitelesítéshez. Ezen modulok egyike sem gyűjt vagy továbbít adatokat.

Az alkalmazás nem használ semmilyen harmadik fél analitikai, hirdetési vagy összeomlás-jelentési szolgáltatást.`,
      },
      {
        heading: "Adatbiztonság",
        body: `• Minden adat az eszközödön marad.
• A Rejtett széf eszközszintű biometrikus hitelesítéssel van védve.
• Semmilyen adat nem kerül továbbításra az interneten keresztül.
• Nincs szerver-infrastruktúra vagy felhőtárhely.`,
      },
      {
        heading: "Gyermekek adatvédelme",
        body: "A Gallery Guy nem gyűjt adatokat senkitől, beleértve a gyermekeket sem. Az alkalmazás nem igényel fiók létrehozását és nincsenek online kommunikációs képességei.",
      },
      {
        heading: "Ezen irányelvek módosítása",
        body: "Frissíthetjük ezt az Adatvédelmi irányelvet. A módosítások frissített dátummal kerülnek közzétételre ezen az oldalon. Az alkalmazás további használata a módosítások után elfogadást jelent.",
      },
      {
        heading: "Kapcsolat",
        body: "Ha kérdésed van ezzel az Adatvédelmi irányelvvel kapcsolatban, lépj kapcsolatba velünk: bfrkcihan@gmail.com",
      },
    ],
  },
  sr: {
    title: "Politika privatnosti",
    effectiveDate: "Datum stupanja na snagu: 22. februar 2025.",
    sections: [
      {
        heading: "Uvod",
        body: `Dobrodošli u Gallery Guy (\u201Emi\u201C, \u201Enas\u201C ili \u201Enaš\u201C). Posvećeni smo zaštiti vaše privatnosti. Ova Politika privatnosti objašnjava kako Gallery Guy obrađuje informacije kada koristite našu iOS aplikaciju.`,
      },
      {
        heading: "Informacije koje prikupljamo",
        body: "Gallery Guy je dizajniran sa privatnošću na prvom mestu. Ne prikupljamo, ne skladištimo i ne prenosimo vaše lične podatke ili fotografije. Sva obrada fotografija odvija se lokalno na vašem uređaju.",
      },
      {
        heading: "Kako koristimo vaše informacije",
        body: "Pošto ne prikupljamo lične podatke, ne koristimo vaše informacije ni u kakve svrhe. Sva obrada fotografija i analiza odvija se na uređaju i nikada ne napušta vaš telefon.",
      },
      {
        heading: "Skladištenje podataka",
        body: "Gallery Guy ne skladišti nikakve korisničke podatke na eksternim serverima. Sve podatke o aplikaciji (podešavanja, postavke) čuva lokalno na vašem uređaju koristeći standardne iOS mehanizme skladištenja.",
      },
      {
        heading: "Usluge trećih strana",
        body: "Gallery Guy ne integriše analitičke alate, oglašivačke mreže ili bilo koje SDK-ove trećih strana koji prikupljaju korisničke podatke. Jedina usluga treće strane je Apple-ov App Store za distribuciju aplikacije i obradu kupovina.",
      },
      {
        heading: "Privatnost dece",
        body: "Gallery Guy ne prikuplja lične podatke ni od koga, uključujući decu mlađu od 13 godina. Naša aplikacija je bezbedna za korišćenje od strane korisnika svih uzrasta jer ne vrši prikupljanje podataka.",
      },
      {
        heading: "Izmene ove politike",
        body: "Možemo povremeno ažurirati ovu Politiku privatnosti. Obavestićemo vas o svim izmenama objavljivanjem nove Politike privatnosti na ovoj stranici i ažuriranjem datuma stupanja na snagu.",
      },
      {
        heading: "Vaša prava",
        body: "Pošto ne prikupljamo nikakve lične podatke, nema podataka koje možete zahtevati, izmeniti ili obrisati. Vaše fotografije i podaci uvek ostaju pod vašom kontrolom na vašem uređaju.",
      },
      {
        heading: "Kontakt",
        body: "Ako imate pitanja o ovoj Politici privatnosti, kontaktirajte nas na: bfrkcihan@gmail.com",
      },
    ],
  },
  he: {
    title: "מדיניות פרטיות",
    effectiveDate: "תאריך תוקף: 22 בפברואר 2025",
    sections: [
      {
        heading: "מבוא",
        body: `ברוכים הבאים ל-Gallery Guy (\u201Eאנחנו\u201C, \u201Eאותנו\u201C או \u201Eשלנו\u201C). אנו מחויבים להגן על פרטיותכם. מדיניות פרטיות זו מסבירה כיצד Gallery Guy מטפל במידע כאשר אתם משתמשים באפליקציית ה-iOS שלנו.`,
      },
      {
        heading: "מידע שאנו אוספים",
        body: "Gallery Guy תוכנן עם פרטיות בראש סדר העדיפויות. איננו אוספים, מאחסנים או מעבירים את המידע האישי או התמונות שלכם. כל עיבוד התמונות מתבצע באופן מקומי על המכשיר שלכם.",
      },
      {
        heading: "כיצד אנו משתמשים במידע שלכם",
        body: "מכיוון שאיננו אוספים מידע אישי, איננו משתמשים במידע שלכם לשום מטרה. כל עיבוד וניתוח התמונות מתבצע על המכשיר ולעולם לא עוזב את הטלפון שלכם.",
      },
      {
        heading: "אחסון נתונים",
        body: "Gallery Guy אינו מאחסן נתוני משתמש בשרתים חיצוניים. כל נתוני האפליקציה (הגדרות, העדפות) מאוחסנים באופן מקומי על המכשיר שלכם באמצעות מנגנוני אחסון סטנדרטיים של iOS.",
      },
      {
        heading: "שירותי צד שלישי",
        body: "Gallery Guy אינו משלב כלי אנליטיקה, רשתות פרסום או SDK של צד שלישי שאוספים נתוני משתמש. שירות הצד השלישי היחיד הוא App Store של Apple להפצת האפליקציה ועיבוד רכישות.",
      },
      {
        heading: "פרטיות ילדים",
        body: "Gallery Guy אינו אוסף מידע אישי מאף אחד, כולל ילדים מתחת לגיל 13. האפליקציה שלנו בטוחה לשימוש על ידי משתמשים בכל גיל מכיוון שהיא אינה מבצעת איסוף נתונים.",
      },
      {
        heading: "שינויים במדיניות זו",
        body: "אנו עשויים לעדכן מדיניות פרטיות זו מעת לעת. נודיע לכם על שינויים על ידי פרסום מדיניות הפרטיות החדשה בדף זה ועדכון תאריך התוקף.",
      },
      {
        heading: "הזכויות שלכם",
        body: "מכיוון שאיננו אוספים מידע אישי כלשהו, אין נתונים שתוכלו לבקש, לשנות או למחוק. התמונות והנתונים שלכם נשארים תמיד בשליטתכם על המכשיר שלכם.",
      },
      {
        heading: "יצירת קשר",
        body: "אם יש לכם שאלות לגבי מדיניות פרטיות זו, צרו איתנו קשר בכתובת: bfrkcihan@gmail.com",
      },
    ],
  },
  id: {
    title: "Kebijakan Privasi",
    effectiveDate: "Tanggal berlaku: 22 Februari 2025",
    sections: [
      {
        heading: "Pendahuluan",
        body: `Selamat datang di Gallery Guy (\u201Ekami\u201C, \u201Ekita\u201C atau \u201Emilik kami\u201C). Kami berkomitmen melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana Gallery Guy menangani informasi saat Anda menggunakan aplikasi iOS kami.`,
      },
      {
        heading: "Informasi yang Kami Kumpulkan",
        body: "Gallery Guy dirancang dengan mengutamakan privasi. Kami tidak mengumpulkan, menyimpan, atau mengirimkan informasi pribadi atau foto Anda. Semua pemrosesan foto dilakukan secara lokal di perangkat Anda.",
      },
      {
        heading: "Bagaimana Kami Menggunakan Informasi Anda",
        body: "Karena kami tidak mengumpulkan informasi pribadi, kami tidak menggunakan informasi Anda untuk tujuan apa pun. Semua pemrosesan dan analisis foto dilakukan di perangkat dan tidak pernah meninggalkan ponsel Anda.",
      },
      {
        heading: "Penyimpanan Data",
        body: "Gallery Guy tidak menyimpan data pengguna di server eksternal. Semua data aplikasi (pengaturan, preferensi) disimpan secara lokal di perangkat Anda menggunakan mekanisme penyimpanan iOS standar.",
      },
      {
        heading: "Layanan Pihak Ketiga",
        body: "Gallery Guy tidak mengintegrasikan alat analitik, jaringan iklan, atau SDK pihak ketiga yang mengumpulkan data pengguna. Satu-satunya layanan pihak ketiga adalah App Store Apple untuk distribusi aplikasi dan pemrosesan pembelian.",
      },
      {
        heading: "Privasi Anak",
        body: "Gallery Guy tidak mengumpulkan informasi pribadi dari siapa pun, termasuk anak di bawah 13 tahun. Aplikasi kami aman digunakan oleh pengguna segala usia karena tidak melakukan pengumpulan data.",
      },
      {
        heading: "Perubahan Kebijakan Ini",
        body: "Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan dengan memposting Kebijakan Privasi baru di halaman ini dan memperbarui tanggal berlaku.",
      },
      {
        heading: "Hak Anda",
        body: "Karena kami tidak mengumpulkan informasi pribadi apa pun, tidak ada data yang dapat Anda minta, ubah, atau hapus. Foto dan data Anda selalu tetap di bawah kendali Anda di perangkat Anda.",
      },
      {
        heading: "Hubungi Kami",
        body: "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, hubungi kami di: bfrkcihan@gmail.com",
      },
    ],
  },
  th: {
    title: "นโยบายความเป็นส่วนตัว",
    effectiveDate: "วันที่มีผลบังคับใช้: 22 กุมภาพันธ์ 2025",
    sections: [
      {
        heading: "บทนำ",
        body: `ยินดีต้อนรับสู่ Gallery Guy (\u201Eเรา\u201C, \u201Eพวกเรา\u201C หรือ \u201Eของเรา\u201C) เรามุ่งมั่นที่จะปกป้องความเป็นส่วนตัวของคุณ นโยบายความเป็นส่วนตัวนี้อธิบายวิธีที่ Gallery Guy จัดการข้อมูลเมื่อคุณใช้แอปพลิเคชัน iOS ของเรา`,
      },
      {
        heading: "ข้อมูลที่เราเก็บรวบรวม",
        body: "Gallery Guy ออกแบบโดยให้ความสำคัญกับความเป็นส่วนตัวเป็นอันดับแรก เราไม่เก็บรวบรวม จัดเก็บ หรือส่งข้อมูลส่วนบุคคลหรือรูปภาพของคุณ การประมวลผลรูปภาพทั้งหมดดำเนินการภายในเครื่องบนอุปกรณ์ของคุณ",
      },
      {
        heading: "วิธีที่เราใช้ข้อมูลของคุณ",
        body: "เนื่องจากเราไม่เก็บรวบรวมข้อมูลส่วนบุคคล เราจึงไม่ใช้ข้อมูลของคุณเพื่อวัตถุประสงค์ใดๆ การประมวลผลและวิเคราะห์รูปภาพทั้งหมดดำเนินการบนอุปกรณ์และไม่เคยออกจากโทรศัพท์ของคุณ",
      },
      {
        heading: "การจัดเก็บข้อมูล",
        body: "Gallery Guy ไม่จัดเก็บข้อมูลผู้ใช้บนเซิร์ฟเวอร์ภายนอก ข้อมูลแอปพลิเคชันทั้งหมด (การตั้งค่า ค่าปรับแต่ง) จัดเก็บภายในเครื่องบนอุปกรณ์ของคุณโดยใช้กลไกการจัดเก็บมาตรฐานของ iOS",
      },
      {
        heading: "บริการของบุคคลที่สาม",
        body: "Gallery Guy ไม่รวมเครื่องมือวิเคราะห์ เครือข่ายโฆษณา หรือ SDK ของบุคคลที่สามที่เก็บรวบรวมข้อมูลผู้ใช้ บริการบุคคลที่สามเพียงอย่างเดียวคือ App Store ของ Apple สำหรับการจำหน่ายแอปพลิเคชันและการประมวลผลการซื้อ",
      },
      {
        heading: "ความเป็นส่วนตัวของเด็ก",
        body: "Gallery Guy ไม่เก็บรวบรวมข้อมูลส่วนบุคคลจากบุคคลใดๆ รวมถึงเด็กอายุต่ำกว่า 13 ปี แอปพลิเคชันของเราปลอดภัยสำหรับผู้ใช้ทุกวัยเนื่องจากไม่มีการเก็บรวบรวมข้อมูล",
      },
      {
        heading: "การเปลี่ยนแปลงนโยบายนี้",
        body: "เราอาจอัปเดตนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว เราจะแจ้งให้คุณทราบเกี่ยวกับการเปลี่ยนแปลงโดยการโพสต์นโยบายความเป็นส่วนตัวใหม่บนหน้านี้และอัปเดตวันที่มีผลบังคับใช้",
      },
      {
        heading: "สิทธิ์ของคุณ",
        body: "เนื่องจากเราไม่เก็บรวบรวมข้อมูลส่วนบุคคลใดๆ จึงไม่มีข้อมูลที่คุณสามารถร้องขอ แก้ไข หรือลบได้ รูปภาพและข้อมูลของคุณยังคงอยู่ภายใต้การควบคุมของคุณบนอุปกรณ์ของคุณเสมอ",
      },
      {
        heading: "ติดต่อเรา",
        body: "หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ ติดต่อเราได้ที่: bfrkcihan@gmail.com",
      },
    ],
  },
  vi: {
    title: "Chính sách bảo mật",
    effectiveDate: "Ngày có hiệu lực: 22 tháng 2 năm 2025",
    sections: [
      {
        heading: "Giới thiệu",
        body: `Chào mừng đến với Gallery Guy (\u201Echúng tôi\u201C, \u201Ecủa chúng tôi\u201C). Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Chính sách bảo mật này giải thích cách Gallery Guy xử lý thông tin khi bạn sử dụng ứng dụng iOS của chúng tôi.`,
      },
      {
        heading: "Thông tin chúng tôi thu thập",
        body: "Gallery Guy được thiết kế với quyền riêng tư là ưu tiên hàng đầu. Chúng tôi không thu thập, lưu trữ hoặc truyền thông tin cá nhân hoặc ảnh của bạn. Tất cả xử lý ảnh được thực hiện cục bộ trên thiết bị của bạn.",
      },
      {
        heading: "Cách chúng tôi sử dụng thông tin của bạn",
        body: "Vì chúng tôi không thu thập thông tin cá nhân, chúng tôi không sử dụng thông tin của bạn cho bất kỳ mục đích nào. Tất cả xử lý và phân tích ảnh được thực hiện trên thiết bị và không bao giờ rời khỏi điện thoại của bạn.",
      },
      {
        heading: "Lưu trữ dữ liệu",
        body: "Gallery Guy không lưu trữ dữ liệu người dùng trên máy chủ bên ngoài. Tất cả dữ liệu ứng dụng (cài đặt, tùy chọn) được lưu trữ cục bộ trên thiết bị của bạn bằng cơ chế lưu trữ tiêu chuẩn của iOS.",
      },
      {
        heading: "Dịch vụ bên thứ ba",
        body: "Gallery Guy không tích hợp công cụ phân tích, mạng quảng cáo hoặc SDK bên thứ ba nào thu thập dữ liệu người dùng. Dịch vụ bên thứ ba duy nhất là App Store của Apple để phân phối ứng dụng và xử lý giao dịch mua.",
      },
      {
        heading: "Quyền riêng tư của trẻ em",
        body: "Gallery Guy không thu thập thông tin cá nhân từ bất kỳ ai, bao gồm trẻ em dưới 13 tuổi. Ứng dụng của chúng tôi an toàn cho người dùng mọi lứa tuổi vì không thực hiện thu thập dữ liệu.",
      },
      {
        heading: "Thay đổi chính sách này",
        body: "Chúng tôi có thể cập nhật Chính sách bảo mật này theo thời gian. Chúng tôi sẽ thông báo cho bạn về các thay đổi bằng cách đăng Chính sách bảo mật mới trên trang này và cập nhật ngày có hiệu lực.",
      },
      {
        heading: "Quyền của bạn",
        body: "Vì chúng tôi không thu thập bất kỳ thông tin cá nhân nào, không có dữ liệu nào bạn có thể yêu cầu, sửa đổi hoặc xóa. Ảnh và dữ liệu của bạn luôn nằm trong tầm kiểm soát của bạn trên thiết bị của bạn.",
      },
      {
        heading: "Liên hệ",
        body: "Nếu bạn có câu hỏi về Chính sách bảo mật này, vui lòng liên hệ chúng tôi tại: bfrkcihan@gmail.com",
      },
    ],
  },
  ar: {
    title: "سياسة الخصوصية",
    effectiveDate: "تاريخ السريان: 22 فبراير 2025",
    sections: [
      {
        heading: "مقدمة",
        body: "Gallery Guy (\"نحن\"، \"لدينا\"، \"التطبيق\") تم تطويره بواسطة Batur Cihan. توضح سياسة الخصوصية هذه كيف يتعامل التطبيق مع معلوماتك. تم تصميم Gallery Guy مع الخصوصية كأولوية — جميع بياناتك تبقى على جهازك. لا نجمع أو ننقل أو نخزن أي معلومات شخصية على خوادم خارجية.",
      },
      {
        heading: "معلومات لا نجمعها",
        body: `Gallery Guy لا يجمع أي معلومات شخصية. تحديداً:

\u2022 لا معلومات شخصية (الاسم، البريد الإلكتروني، رقم الهاتف)
\u2022 لا تحليلات استخدام أو قياس عن بُعد
\u2022 لا معرّفات إعلانية أو تتبع
\u2022 لا بصمة رقمية للجهاز
\u2022 لا بيانات موقع
\u2022 لا حاجة لإنشاء حساب
\u2022 لا رفع سحابي من أي نوع
\u2022 لا ملفات تعريف ارتباط أو تقنيات تتبع ويب`,
      },
      {
        heading: "معلومات مخزنة على جهازك",
        body: `البيانات التالية مخزنة محلياً على جهازك ولا تغادره أبداً:

\u2022 الوصول لمكتبة الصور: يقرأ التطبيق مكتبة صورك لمسح وعرض وإدارة صورك وفيديوهاتك. يُستخدم الوصول للكتابة للحذف ونقل الملفات بين الألبومات.

\u2022 نتائج مسح OCR: النص المتعرف عليه من لقطات الشاشة يُخزَّن مؤقتاً محلياً على جهازك لأغراض التصنيف. هذه البيانات لا تغادر جهازك أبداً.

\u2022 ملفات الخزنة المخفية: الصور والفيديوهات المنقولة إلى الخزنة المخفية تُخزَّن في نظام ملفات التطبيق المحمي على جهازك، محمية بالمصادقة البيومترية.

\u2022 تفضيلات المستخدم: وضع السمة، تفضيل اللغة، وحالة الإعداد الأولي تُخزَّن محلياً على الجهاز.`,
      },
      {
        heading: "الأذونات المطلوبة",
        body: `\u2022 مكتبة الصور (قراءة وكتابة): مطلوبة لعمل التطبيق. تُستخدم لمسح معرضك، كشف لقطات الشاشة، إيجاد الصور المتشابهة، تحديد الفيديوهات الكبيرة، وحذف أو نقل الملفات التي تختارها.

\u2022 المصادقة البيومترية (Face ID / Touch ID): تُستخدم فقط لحماية الوصول لميزة الخزنة المخفية. البيانات البيومترية تُدار بالكامل بواسطة نظام التشغيل؛ التطبيق لا يصل أو يخزن المعلومات البيومترية مباشرة.`,
      },
      {
        heading: "حزم SDK الخارجية",
        body: `\u2022 ML Kit Text Recognition: يُستخدم لـ OCR على الجهاز لتصنيف لقطات الشاشة حسب المحتوى. تعمل حزمة SDK بالكامل على جهازك — لا تُرسل صور أو نصوص لأي خادم.

\u2022 وحدات إطار عمل Expo: وحدات قياسية للوصول لمكتبة الوسائط، نظام الملفات، الترجمة، والمصادقة المحلية. لا تجمع أو تنقل أي من هذه الوحدات بيانات.

التطبيق لا يستخدم أي خدمات تحليلات أو إعلانات أو تقارير أعطال من طرف ثالث.`,
      },
      {
        heading: "أمان البيانات",
        body: `\u2022 جميع البيانات تبقى في التخزين المحلي لجهازك
\u2022 ملفات الخزنة المخفية محمية بالمصادقة البيومترية لجهازك
\u2022 صندوق حماية التطبيق يمنع التطبيقات الأخرى من الوصول لبيانات Gallery Guy المخزنة
\u2022 التطبيق لا يتتبع المستخدمين (NSPrivacyTracking مضبوط على false)`,
      },
      {
        heading: "مشاركة البيانات",
        body: "لا نشارك أو نبيع أو نؤجر أو نتبادل أي بيانات مع أطراف ثالثة. ليس لدينا خوادم تستقبل بيانات من التطبيق. لا توجد بيانات لمشاركتها لأننا لا نجمع أياً منها.",
      },
      {
        heading: "خصوصية الأطفال",
        body: "Gallery Guy لا يجمع عن قصد معلومات من أطفال أقل من 13 عاماً. التطبيق لا يتطلب التحقق من العمر لأنه لا يجمع معلومات شخصية. إذا كان لدى ولي الأمر مخاوف، يمكنه التواصل مع المطور.",
      },
      {
        heading: "حقوقك",
        body: `بما أن جميع البيانات مخزنة محلياً على جهازك، لديك التحكم الكامل:

\u2022 حق الوصول: جميع بياناتك موجودة بالفعل على جهازك.
\u2022 حق الحذف: يمكنك حذف أي بيانات بإزالة الملفات داخل التطبيق أو إلغاء تثبيت التطبيق.
\u2022 حق النقل: صورك تبقى في مكتبة صور جهازك.
\u2022 حق الانسحاب: لا يوجد شيء للانسحاب منه لأننا لا نجمع بيانات.`,
      },
      {
        heading: "الاحتفاظ بالبيانات",
        body: `\u2022 ذاكرة OCR المؤقتة: مخزنة محلياً، تُمسح تلقائياً عند إلغاء تثبيت التطبيق.
\u2022 ملفات الخزنة المخفية: تبقى حتى تستعيدها أو تحذفها أو تلغي تثبيت التطبيق.
\u2022 التفضيلات: مخزنة محلياً، تُمسح عند إلغاء التثبيت.`,
      },
      {
        heading: "تغييرات على هذه السياسة",
        body: "قد نحدّث سياسة الخصوصية هذه من وقت لآخر. ستنعكس التغييرات في \"تاريخ السريان\" أعلى هذا المستند. استمرار استخدام التطبيق بعد التغييرات يعني قبول السياسة المحدثة.",
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

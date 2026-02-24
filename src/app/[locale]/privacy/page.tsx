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

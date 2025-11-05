# 🔥 Energy Disco - Progressive Web App

![Energy Disco Logo](imagenes/logo-discoteca.png)

## Descripción

**Energy Disco** es una Progressive Web App (PWA) moderna diseñada para la **Discoteca Energy** de Cangas del Narcea. La aplicación conecta a los visitantes y clientes habituales con la mejor experiencia de la discoteca a través de una plataforma digital accesible desde cualquier dispositivo.

Con más de dos décadas marcando el ritmo en Cangas del Narcea, Energy Disco es sinónimo de noches inolvidables en un espacio donde la elegancia se encuentra con la energía. Una barra que recorre todo el local, una pista central que late al compás de la música, y una atmósfera que solo se entiende cuando se vive.

---

## ✨ Características Principales

### 🔔 Notificaciones Push en Tiempo Real
- Recibe actualizaciones instantáneas sobre eventos especiales
- Anuncios de promociones y novedades
- Recordatorios de eventos importantes
- Integración con **OneSignal** para máxima confiabilidad
- Funciona tanto en dispositivos móviles como de escritorio

### 🎵 Playlist de Spotify
- Acceso directo a nuestra playlist oficial
- Descubre la música que suena en Energy Disco
- Reproduce y gestiona tus canciones favoritas

### 📱 Instalable en Cualquier Dispositivo
- **Android**: Botón de instalación automático
- **iOS**: Instrucciones sencillas para añadir a pantalla de inicio
- **Desktop**: Compatible con navegadores Chromium (Chrome, Edge, Opera)
- Experiencia de aplicación nativa sin descargar app store

### 🎤 Conoce a Nuestros DJs Residentes
- Descubre los perfiles de nuestros DJs
- Conecta con los creadores de la atmósfera de Energy Disco

### 📍 Ubicación y Contacto
- Mapa integrado para encontrarnos fácilmente
- Información de localización exacta

### 💾 Soporte Offline
- La app funciona incluso sin conexión a internet
- Service Worker para cacheo inteligente de contenidos

---

## 🛠️ Stack Tecnológico

- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **PWA**: Progressive Web App con Service Worker
- **Notificaciones**: OneSignal SDK v16
- **Manifest**: Web App Manifest para instalación
- **Almacenamiento**: LocalStorage para datos persistentes

---

## 📦 Instalación

### En Android
1. Abre la app en **Chrome** o cualquier navegador Chromium
2. Verás un botón **"📲 Instalar App"** en el banner
3. Toca el botón para instalar
4. La app aparecerá en tu pantalla de inicio

### En iOS
1. Abre la app en **Safari**
2. Toca el botón **Compartir** (⎋) en la barra inferior
3. Desplázate y selecciona **"Añadir a pantalla de inicio"**
4. Toca **"Añadir"**
5. La app estará lista en tu pantalla de inicio

### En Desktop
1. Abre en **Chrome**, **Edge** u **Opera**
2. Busca el botón de instalación (usualmente en la barra de direcciones)
3. Haz clic y sigue las instrucciones

---

## 🔔 Activar Notificaciones

Las notificaciones push te mantienen informado sobre:
- 🎉 Eventos especiales y fiestas temáticas
- 🎤 Actuaciones de artistas invitados
- 🍹 Promociones y happy hours
- 📢 Noticias y anuncios importantes

**Para activar**: Toca el botón **"🔔 Activar Notificaciones"** al abrir la app por primera vez.

---

## 📋 Estructura del Proyecto

EnergyDiscoApp/
├── index.html # Página principal
├── app.js # Lógica de la aplicación
├── style.css # Estilos
├── service-worker.js # Service Worker para offline
├── manifest.json # Web App Manifest
├── carta.json # Carta de Jarras
├── OneSignalSDKWorker.js # Worker de OneSignal
├── README.md # Este archivo
├── imagenes/ # Logos y fotos
│ ├── logo-discoteca.png # Logo principal
│ ├── mene.png # DJ Mene
│ └── pablosky.png # DJ Pablosky
└── iconos/ # Iconos para PWA
├── favicon.svg # Icono SVG
├── favicon.ico # Icono ICO
├── favicon-96x96.png # Icono PNG 96x96
├── apple-touch-icon.png# Icono iOS
├── web-app-manifest-192x192.png # Icono PWA 192x192
├── web-app-manifest-512x512.png # Icono PWA 512x512



### Descripción de Archivos

| Archivo | Descripción |
|---------|-------------|
| **index.html** | Página HTML principal con estructura de la PWA |
| **app.js** | Lógica JavaScript: Service Worker, PWA, OneSignal |
| **style.css** | Estilos CSS de la aplicación |
| **service-worker.js** | Service Worker para soporte offline |
| **manifest.json** | Configuración de la PWA (deprecated, usar site.webmanifest) |
| **carta.json** | Datos de bebidas y raciones |
| **OneSignalSDKWorker.js** | Worker de OneSignal para notificaciones |
| **imagenes/** | Carpeta con logos y fotos de DJs |
| **iconos/** | Carpeta con todos los iconos y configuración |




## 📱 Especificaciones PWA

| Característica | Detalles |
|---|---|
| **Instalable** | ✅ Sí, en todos los dispositivos |
| **Offline** | ✅ Service Worker activo |
| **Responsive** | ✅ Adaptada a cualquier pantalla |
| **Notificaciones** | ✅ OneSignal integrado |
| **HTTPS** | ✅ Recomendado para máxima seguridad |
| **Performance** | ⚡ Carga rápida y optimizada |

---

## 🔒 Privacidad y Seguridad

- Tu privacidad es nuestra prioridad
- Las notificaciones son gestionadas por OneSignal de forma segura
- No compartimos datos personales sin tu consentimiento
- Puedes desactivar notificaciones en cualquier momento

---

## 💬 Soporte y Contacto

¿Preguntas o sugerencias? Contáctanos a través de Energy Disco:

📍 **Ubicación**: Cangas del Narcea, Asturias  
🌐 **Web**: energydisco.com  
📱 **Social**: Síguenos en Instagram y Facebook

---

## 🎉 ¿Por Qué Energy Disco?

Energy Disco no es solo una discoteca, es una **experiencia**. Con esta PWA, llevamos esa experiencia directamente a tu bolsillo:

- 🎵 **Música en vivo** con los mejores DJs
- 🍾 **Ambiente exclusivo** y elegante
- 👥 **Comunidad vibrante** de amantes de la música
- 🌙 **Noches inolvidables** garantizadas

---

## 📜 Licencia

Esta aplicación ha sido desarrollada con ❤️ para la comunidad de Energy Disco.

**Creado con pasión para las noches más energéticas de Cangas Del Narcea.**

---

*Última actualización: Noviembre 2025*  
*Energy Disco PWA v1.0*

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:7F52FF,100:0D96F6&height=200&section=header&text=Adriel%20Rosales&fontSize=48&fontColor=ffffff&fontAlignY=38&desc=Mobile%20Lead%20%E2%80%A2%20Android%20%E2%80%A2%20iOS%20%E2%80%A2%20Seguridad&descAlignY=58&descSize=18" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&pause=1200&color=7F52FF&center=true&vCenter=true&width=640&lines=Mobile+Lead+%40+Encode+Labs;Kotlin+%E2%80%A2+Swift+%E2%80%A2+KMP+%E2%80%A2+Flutter+%E2%80%A2+React;Auditor%C3%ADa+de+seguridad+de+apps;Front+para+IA+con+RAG+%2B+LLM;Migraciones+a+nativo+en+producci%C3%B3n" />
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/adriel-rosales/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="mailto:adrielrosales1999@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" /></a>
  <img src="https://img.shields.io/badge/📍_Córdoba,_Argentina-1f2937?style=for-the-badge" />
</p>

---

## 👋 Sobre mí

Soy **Mobile Lead** con **+5 años** llevando apps Android e iOS **de cero a producción**, en productos usados en **más de 12 países**. Hoy lidero el área mobile en **Encode Labs**, donde me hago cargo del ciclo completo: arquitectura, desarrollo, **migraciones de apps en producción** y publicación en **Google Play Console y App Store Connect**.

Además del desarrollo, trabajo en **seguridad de aplicaciones**: construí **Reverso**, una herramienta de auditoría que ya encontró secretos expuestos en apps en producción. Y hoy desarrollo el **front de una plataforma de IA basada en RAG y LLMs** junto al equipo de IA de Encode.

Mi base es **Android nativo (Kotlin)** e **iOS nativo (Swift)**, y también trabajo con **Kotlin Multiplatform, Flutter y React**. Migré **más de 3 apps de Flutter a nativo** sin frenar la operación.

---

## 🚀 Proyectos principales

### 🛡️ Reverso — Auditoría de seguridad de aplicaciones

Herramienta propia de **análisis de seguridad** para apps mobile. No es un experimento: ya **auditó apps en producción** y encontró vulnerabilidades reales, entre ellas **archivos `.env` embebidos en el build** con credenciales de servicios internos y **API keys y secretos expuestos** dentro del binario.

Cualquier secreto que viaja dentro de una app lo puede extraer cualquiera que la descargue. Reverso existe para encontrarlos antes que un atacante.

**Qué hace**
- Descompila el APK e inspecciona manifest, recursos, assets y código
- Detecta **secretos hardcodeados**: API keys, tokens, credenciales y archivos de configuración embebidos
- Identifica **cifrado débil**, **componentes exportados** sin protección y **almacenamiento local sin cifrar**
- Genera **reportes de auditoría profesionales** con cada hallazgo, su severidad, evidencia y cómo corregirlo

**Hacia dónde va**
- Expansión de Android a **auditorías multi-target**

> **Demo disponible.** Si querés ver a Reverso auditando una app, escribime y te la muestro.

---

### 🤖 Plataforma de IA con RAG + LLM — *Encode Labs · en curso*

Desarrollo del **front** de una plataforma de IA construida junto al equipo de IA de Encode. El sistema combina **RAG (Retrieval-Augmented Generation)** con **LLMs**: en vez de responder solo con lo que "sabe" el modelo, primero recupera la información relevante de la base de conocimiento y responde a partir de ella.

**Mi parte**
- Diseño y desarrollo de la interfaz con la que los usuarios consultan al sistema
- Integración del front con el pipeline de RAG y los servicios del modelo
- Presentación de respuestas junto a las **fuentes recuperadas**, para que el usuario pueda verificar de dónde sale cada respuesta
- Manejo de estados propios de un sistema con LLM: respuestas en streaming, latencia, errores y reintentos

---

### 🪪 Wallet de Identidad Digital — *Encode Labs · en curso*

Wallet **nativa en Kotlin (Android) y Swift (iOS)** para **alojar credenciales verificables y métodos de pago** en una misma app.

- Dos apps nativas, cada una aprovechando al máximo su plataforma
- Verificación de identidad en **4 capas**: SDK anti-inyección / liveness, match biométrico contra **RENAPER**, OCR + **PDF417** del DNI y validación de vigencia del documento
- Veredictos biométricos que viajan **server-to-server, nunca por el cliente**
- Mitigación de **race conditions y TOCTOU** en el pipeline KYC: operaciones atómicas, idempotency keys y políticas de reintento alineadas

---

## 📁 Otros proyectos

**Migraciones Flutter → Nativo — *Encode Labs*.** Migración de más de 3 apps en producción de Flutter a Kotlin y Swift, de punta a punta: relevamiento, plan de migración sin cortar el servicio, reescritura nativa y publicación en Play Console y App Store Connect.

**Identidad Digital — Onboarding KYC biométrico · *completado*.** Verificación de identidad para el mercado argentino con **AWS Face Liveness**, validación biométrica contra **RENAPER**, lectura de DNI con OCR + PDF417 y **criptografía post-cuántica híbrida** (X25519 + ML-KEM-768 → AES-256-GCM) para proteger los datos biométricos. Liderazgo técnico y definición de arquitectura.

**Phoenix — Control de acceso e IoT.** App Android enterprise integrada con hardware dedicado. Lideré la migración de .NET MAUI a Kotlin nativo e implementé reconocimiento facial, autenticación por PIN, QR y biometría, llamadas SIP + DTMF para apertura remota e integración con NFC/RFID, Bluetooth y cámaras IR/RGB.

**Aplivit — Alfabetización de adultos guiada por voz.** App en Kotlin Multiplatform + Compose Multiplatform para Android e iOS, con guía por voz, cola de TTS serializada y soporte en español, inglés y francés.

---

## 🧠 Cómo trabajo

| Área | Lo que aplico |
|---|---|
| **Seguridad** | Auditoría de apps, detección de secretos, KYC, biometría, almacenamiento seguro, certificate pinning, criptografía post-cuántica |
| **Arquitectura** | Clean Architecture, MVVM, MVI, BLoC, modularización |
| **Migraciones** | Flutter / .NET MAUI → nativo (Kotlin + Swift) con la app en producción, sin cortar el servicio |
| **Release y stores** | Google Play Console y App Store Connect: firmas, tracks de testing, releases escalonados, revisiones |
| **Concurrencia y estado** | Coroutines, Flow / StateFlow, Swift async/await, diseño idempotente |
| **IA** | Front para sistemas RAG + LLM, integración con servicios de modelos |
| **Hardware** | NFC/RFID, Bluetooth, GPS, cámaras IR/RGB, integraciones embebidas |
| **Liderazgo** | Definición de arquitectura, estándares de código y mentoría del equipo |

---

## 🛠️ Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=kotlin,swift,flutter,dart,react,ts,androidstudio&theme=dark" /><br/>
  <img src="https://skillicons.dev/icons?i=firebase,aws,git,github,figma&theme=dark" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Kotlin%20Multiplatform-7F52FF?style=flat-square&logo=kotlin&logoColor=white" />
  <img src="https://img.shields.io/badge/Jetpack%20Compose-4285F4?style=flat-square&logo=jetpackcompose&logoColor=white" />
  <img src="https://img.shields.io/badge/SwiftUI-0D96F6?style=flat-square&logo=swift&logoColor=white" />
  <img src="https://img.shields.io/badge/Room%20%2F%20SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white" />
  <img src="https://img.shields.io/badge/Hilt%20%2F%20Koin-00796B?style=flat-square" />
  <img src="https://img.shields.io/badge/AWS%20Face%20Liveness-232F3E?style=flat-square&logo=amazonaws&logoColor=white" />
  <img src="https://img.shields.io/badge/RAG%20%2B%20LLM-111827?style=flat-square" />
</p>

---

## 📬 Contacto

Me interesan los desafíos donde mobile, seguridad, identidad e IA se cruzan. Escribime a [adrielrosales1999@gmail.com](mailto:adrielrosales1999@gmail.com) o por [LinkedIn](https://www.linkedin.com/in/adriel-rosales/).

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0D96F6,100:7F52FF&height=100&section=footer" />
</p>

<div align="center">
  <img src="public/logo-cuadrado.svg" alt="SofTana Logo" width="120" />

  # SofTana 💊
  **El Sistema Operativo Offline-First para Farmacias**

  [![Next.js 16](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
  [![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

  <img src="public/images/La%20Sala%20de%20Control%20Total%201920x1080.webp" alt="SofTana Master Console" width="100%" style="border-radius: 16px; margin-top: 20px;" />
</div>

<br />

## ⚡ Sobre SofTana

SofTana no es solo un punto de venta (POS). Es el **cerebro operativo** diseñado específicamente para boticas y farmacias en el mercado peruano. Construido con una arquitectura **Offline-First**, garantiza que tu negocio siga despachando, vendiendo y controlando inventario incluso cuando la conexión a internet falla. 

Esta es la **Landing Page Oficial (Web Institucional)**, desarrollada con un enfoque estético "Cine-Tech" que transmite seguridad, control absoluto y tecnología de clase mundial.

---

## 🚀 Características Clave (El Sistema)

*   🛡️ **Soberanía Offline:** Arquitectura local redundante. Si el internet cae, el sistema guarda las transacciones y las sincroniza silenciosamente al volver la red.
*   ⚡ **Fricción Cero:** Interfaz táctil de ultra-alta velocidad diseñada para despachar medicamentos más rápido de lo que el cliente parpadea.
*   🧬 **Catálogo Maestro (ADN):** Olvida la carga manual. Acceso inmediato a una base de datos estandarizada con más de **30,000 SKUs médicos** precargados.

---

## 🛠️ Stack Tecnológico

Este proyecto fue construido utilizando los últimos estándares de desarrollo web (2025/2026):

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router + Turbopack)
*   **UI Library:** [React 19](https://react.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (CSS-First Architecture)
*   **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
*   **Iconografía:** [Lucide React](https://lucide.dev/)
*   **SEO/GEO:** Generación de metadatos estáticos, JSON-LD, Open Graph 1080x1080, PWA Manifest.

---

## 📦 Desarrollo Local

Para correr este proyecto en tu máquina local:

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo (con Turbopack)
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

---

## 🏗️ Arquitectura del Proyecto

```text
softana-info/
├── public/                 # Assets estáticos (Imágenes, SVGs, Manifest, Robots)
├── src/
│   ├── app/                # Next.js App Router (Páginas, Layouts, Metadata)
│   ├── components/
│   │   ├── sections/       # Bloques principales (Hero, Features, Pricing, Footer)
│   │   └── ui/             # Componentes base reutilizables (Botones, Tarjetas, GlassContainers)
│   ├── config/             # Fuentes de verdad (site-config.ts)
│   └── lib/                # Utilidades (Merge de clases con clsx/tailwind-merge)
└── tailwind.config / css   # Configuración CSS nativa v4
```

---

## 🌐 Despliegue

Este proyecto está optimizado para una arquitectura **SSG (Static Site Generation)**. Todas las rutas se pre-renderizan en el momento del *build* para garantizar el TTFB (Time to First Byte) más rápido posible y una indexación SEO/GEO impecable.

Recomendado desplegar en **Vercel** o **Cloudflare Pages**.

```bash
# Generar build de producción
npm run build

# Iniciar servidor de producción
npm start
```

---

<div align="center">
  <img src="public/images/Colaboración%20Global%20Sin%20Fisuras%201920x1080.webp" alt="SofTana Conectividad Global" width="100%" style="border-radius: 16px; margin-bottom: 20px;" />
  
  <p>Diseñado e implementado por <strong><a href="https://sudolabs.space">Sudolabs</a></strong></p>
  <p>Ingeniería de Software · Huancayo, Perú</p>
</div>

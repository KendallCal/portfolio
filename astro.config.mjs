// @ts-check
// Habilita la comprobación de tipos en este archivo.

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// URL del sitio obtenida desde las variables de entorno.
const site = process.env.SITE_URL;

export default defineConfig({
  // Solo agrega la propiedad "site" si existe una URL configurada.
  ...(site ? { site } : {}),

  // Configuración de idiomas.
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      // El idioma principal no lleva prefijo en la URL.
      prefixDefaultLocale: false,
    },
  },

  // Configuración de Vite.
  vite: {
    plugins: [tailwindcss()],
  },
});
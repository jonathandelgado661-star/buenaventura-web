# Buenaventura Proyectos — buenaventurapatulul.com

Sitio web inmobiliario para asesores comerciales que comercializan proyectos de terrenos en
**Patulul**, **Río Bravo** y **Tecpán**. Construido con Next.js (App Router), TypeScript y
Tailwind CSS v4, orientado a conversión hacia WhatsApp (+502 3003 2614).

Este sitio **no pertenece a los desarrolladores/propietarios** de los proyectos. Es administrado
por asesores comerciales independientes (ver aviso en el footer).

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (tema definido en `src/app/globals.css`)
- `next/image` para todas las fotografías
- Sin librerías de UI pesadas — componentes propios

## Estructura relevante

```
src/
  app/                      Rutas (home, /patulul, /rio-bravo, /tecpan,
                             /proyectos, /proyectos/[slug], /contacto,
                             sitemap.ts, robots.ts)
  components/
    layout/                 Header (sticky) y Footer
    home/                   Secciones de la home
    location/                Bloques reutilizables para páginas de ubicación
    project/                Bloques reutilizables para la ficha de proyecto
    shared/                 Card, Gallery+Lightbox, Faq, Reveal, etc.
    whatsapp/               Botón CTA, botón flotante, barra móvil
  data/
    types.ts                Tipos (Project, LocationInfo, LotOption...)
    projects.ts              ← Fuente única de verdad de los 6 proyectos
    locations.ts              Fuente única de verdad de las 3 ubicaciones
    faqs.ts, nav.ts
  lib/
    whatsapp.ts              Número, mensajes y builder de enlaces wa.me
    analytics.ts              trackEvent() — capa lista para GA4/GTM/Meta Pixel
public/
  images/<slug>/              Fotografías por proyecto (optimizadas con sips)
  logos/<slug>.jpg             Logotipo de cada proyecto
```

### Cómo agregar o editar un proyecto

Todo el contenido comercial (precios, enganches, medidas, amenidades, financiamiento,
ubicación, mensajes de WhatsApp) vive en **`src/data/projects.ts`**. Para agregar un proyecto
nuevo:

1. Copia sus fotos a `public/images/<slug>/` y su logo a `public/logos/<slug>.jpg`.
2. Agrega un objeto `Project` en `src/data/projects.ts`.
3. Si pertenece a una ubicación nueva, agrégala en `src/data/locations.ts`.

Las páginas (`/proyectos/[slug]`, comparador, cards, etc.) se generan automáticamente — no hay
que tocar componentes.

## Contenido: qué es real y qué falta

- **Fotografías**: reales, tomadas del material entregado (fotos aéreas/urbanización de cada
  proyecto). Las de **Las Delicias** incluyen 4 fotogramas extraídos de los videos entregados
  (no hay suficientes fotos fijas de ese proyecto todavía) — se recomienda reemplazarlas por
  fotografía fija cuando esté disponible.
- **Logotipos**: se recuperaron del material entregado (aparecían como cuadro de título al
  inicio de cada carpeta/video). Son de baja resolución (hasta 720×360). Si existe una versión
  en mayor resolución o vectorial, reemplaza el archivo correspondiente en `public/logos/`
  manteniendo el mismo nombre.
- **Precios, medidas, enganches, financiamiento y amenidades**: tomados tal cual de la
  información proporcionada. Donde no había dato confirmado (p. ej. precio de lote comercial en
  Bella Vista, mensualidades), el sitio muestra “Consultar” en vez de inventar cifras.

## WhatsApp

Todo el sitio usa `src/lib/whatsapp.ts` como única fuente del número
(`+502 3003 2614` → `https://wa.me/50230032614`) y de los mensajes predefinidos por
sección/proyecto. Para cambiar el número o algún mensaje, edita únicamente ese archivo (o el
campo `whatsappMessage` de cada proyecto en `data/projects.ts`).

## Analítica / Ads (Meta Pixel, GA4, GTM)

Aún no se configuró ningún ID. `src/lib/analytics.ts` ya expone `trackEvent()` con los eventos
`whatsapp_click`, `project_view`, `location_view`, `financing_cta_click` y `maps_click`,
disparados desde los componentes correspondientes. Cuando tengas los IDs:

1. Cópialos a un `.env.local` basado en `.env.example`.
2. Instala los snippets de GTM/GA4/Meta Pixel en `src/app/layout.tsx`.
3. `trackEvent()` ya hace `dataLayer.push`, `gtag()` y `fbq()` si existen — no hay que tocar el
   resto del código.

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue en Vercel

1. Sube este repo a GitHub.
2. Importa el repo en [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js (detectado automáticamente). No requiere variables de entorno para
   funcionar.
4. Conecta el dominio `buenaventurapatulul.com` desde Vercel → Settings → Domains.

## Comandos

```bash
npm run dev      # desarrollo
npm run build    # build de producción
npm run start    # servir el build
npm run lint     # ESLint
```

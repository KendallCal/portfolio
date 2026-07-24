import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readBuiltPage = (path) =>
  readFileSync(new URL(`../dist${path}`, import.meta.url), "utf8");

const readSource = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const extractProjectCards = (html) =>
  html.match(/<article\b[^>]*\bproject-card\b[\s\S]*?<\/article>/g) ?? [];

test("the catalog is minimal, breadcrumb-free, and preserves the shared cards", () => {
  const homepage = readBuiltPage("/index.html");
  const catalog = readBuiltPage("/projects/index.html");

  assert.match(catalog, /data-project-catalog/);
  assert.doesNotMatch(catalog, /proyectos realizados/i);
  assert.doesNotMatch(catalog, /Trabajo seleccionado/);
  assert.match(catalog, />\s*Proyectos\s*</);
  assert.match(catalog, /Una selección de proyectos personales/);
  assert.doesNotMatch(catalog, /data-search-input/);
  assert.doesNotMatch(catalog, /data-filter-btn/);
  assert.doesNotMatch(catalog, /Ruta de navegación/);

  const catalogCards = extractProjectCards(catalog);
  const homepageCards = extractProjectCards(homepage);
  assert.notEqual(catalogCards.length, 0);
  assert.deepEqual(catalogCards, homepageCards);
});

test("featured projects use an ordered two-card carousel with conditional controls", () => {
  const gridSource = readSource("src/components/projects/ProjectGrid.astro");
  const carouselSource = readSource(
    "src/components/projects/ProjectCarousel.astro",
  );

  assert.match(gridSource, /projects\.filter\(\(project\) => project\.featured\)/);
  assert.match(gridSource, /<ProjectCarousel projects=\{visibleProjects\}/);
  assert.match(carouselSource, /projects\.length > 2/);
  assert.match(carouselSource, /data-project-carousel/);
  assert.match(carouselSource, /Carousel-Chevron-Left\.astro/);
  assert.match(carouselSource, /Carousel-Chevron-Right\.astro/);
  assert.match(carouselSource, /translate3d/);
});

test("project details render the full description, product value, platform, and clean metadata", () => {
  const projects = [
    {
      slug: "eduvialcr",
      fullDescription: "EduvialCR es una plataforma EdTech",
      platform: "Web[\\s\\S]*Móvil",
    },
    {
      slug: "academia",
      fullDescription: "AcademIA es una plataforma multiagente",
      platform: "Web",
    },
    {
      slug: "bingo-demo",
      fullDescription: "Bingo Demo es un proyecto experimental",
      platform: "Web",
    },
  ];

  for (const project of projects) {
    const detail = readBuiltPage(`/projects/${project.slug}/index.html`);
    assert.match(detail, new RegExp(project.fullDescription));
    assert.match(detail, new RegExp(project.platform));
    assert.match(detail, /Lo que ofrece/);
    assert.match(detail, /Tecnologías/);
    assert.match(detail, /Siguiente proyecto/);
    assert.doesNotMatch(detail, /Aspectos destacados/);
    assert.doesNotMatch(detail, /Ruta de navegación/);
    assert.doesNotMatch(detail, /\d+ tecnologías/);
  }

  const eduvial = readBuiltPage("/projects/eduvialcr/index.html");
  const academia = readBuiltPage("/projects/academia/index.html");
  const bingo = readBuiltPage("/projects/bingo-demo/index.html");
  assert.match(eduvial, /Información/);
  assert.match(eduvial, /Full stack/);
  assert.match(eduvial, /Dispositivos/);
  assert.match(eduvial, /Mi aporte/);
  assert.doesNotMatch(eduvial, /Navegación del pie de página/);
  assert.match(academia, /Información/);
  assert.match(academia, /Mi aporte/);
  assert.match(bingo, /Información/);
  assert.match(bingo, /Mi aporte/);
});

test("project actions are conditional, compact, and use the project accent", () => {
  const eduvial = readBuiltPage("/projects/eduvialcr/index.html");
  const academia = readBuiltPage("/projects/academia/index.html");
  const detailSource = readSource("src/pages/projects/[slug].astro");

  assert.match(eduvial, />\s*Ver proyecto\s*</);
  assert.doesNotMatch(eduvial, />\s*Ver repositorio\s*</);
  assert.match(academia, />\s*Ver proyecto\s*</);
  assert.match(academia, />\s*Ver repositorio\s*</);
  assert.match(readBuiltPage("/projects/bingo-demo/index.html"), />\s*Ver repositorio\s*</);
  assert.doesNotMatch(eduvial, /tu-usuario/);
  assert.doesNotMatch(readBuiltPage("/index.html"), /tu-usuario|tu-dominio/);
  assert.match(detailSource, /class="project-action"/);
  assert.match(detailSource, /height: 2\.25rem/);
  assert.match(detailSource, /color: var\(--project-accent\)/);
  assert.match(detailSource, /color-mix\(in srgb, var\(--project-accent\)/);
  assert.match(detailSource, /OpenIcon/);
  assert.match(detailSource, /GitHubIcon/);
  assert.match(detailSource, /isAvailableProjectUrl/);
});

test("the gallery is a data-driven carousel with optional privacy-enhanced video", () => {
  const gallerySource = readSource("src/components/projects/ProjectGallery.astro");
  const dataSource = readSource("src/data/projects.ts");
  const eduvial = readBuiltPage("/projects/eduvialcr/index.html");

  assert.match(dataSource, /type ProjectMedia/);
  assert.match(dataSource, /interface ProjectCaseStudy/);
  assert.match(dataSource, /eduvial-simulator-selection-concept\.png/);
  assert.match(dataSource, /type: "youtube"/);
  assert.match(dataSource, /platforms: ProjectPlatform\[\]/);
  assert.match(gallerySource, /youtube-nocookie\.com\/embed/);
  assert.match(gallerySource, /data-gallery-next/);
  assert.match(gallerySource, /data-gallery-prev/);
  assert.match(gallerySource, /aria-label="Siguiente diapositiva"/);
  assert.match(gallerySource, /motion-reduce:transition-none/);
  assert.match(gallerySource, /touchstart/);
  assert.doesNotMatch(gallerySource, /Vista del proyecto/);
  assert.match(gallerySource, /aspect-video/);
  assert.match(gallerySource, /Carousel-Chevron-Left\.astro/);
  assert.match(gallerySource, /Carousel-Chevron-Right\.astro/);
  assert.match(gallerySource, /data-play-video/);
  assert.doesNotMatch(gallerySource, /data-gallery-caption/);
  assert.match(eduvial, /data-gallery/);
  assert.doesNotMatch(eduvial, /mockups y no representan necesariamente el estado exacto de producción/);
});

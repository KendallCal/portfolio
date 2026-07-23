import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readBuiltPage = (path) =>
  readFileSync(new URL(`../dist${path}`, import.meta.url), "utf8");

const readSource = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const extractProjectCards = (html) =>
  html.match(/<article\b[^>]*\bproject-card\b[\s\S]*?<\/article>/g) ?? [];

test("the catalog is focused, breadcrumb-free, and preserves the shared cards", () => {
  const homepage = readBuiltPage("/index.html");
  const catalog = readBuiltPage("/projects/index.html");

  assert.match(catalog, /data-project-catalog/);
  assert.doesNotMatch(catalog, /proyectos realizados/i);
  assert.match(catalog, /Soluciones construidas con/);
  assert.match(catalog, /intención/);
  assert.match(catalog, /Cada proyecto reúne decisiones de producto, diseño y desarrollo/);
  assert.doesNotMatch(catalog, /Trabajo seleccionado/);
  assert.doesNotMatch(catalog, /Ruta de navegación/);

  const catalogCards = extractProjectCards(catalog);
  const homepageCards = extractProjectCards(homepage);
  assert.notEqual(catalogCards.length, 0);
  assert.deepEqual(catalogCards, homepageCards);
});

test("project details render the full description, product value, platform, and clean metadata", () => {
  const projects = [
    {
      slug: "eduvialcr",
      fullDescription: "EduvialCR es una plataforma web desarrollada con Next.js",
      platform: "Web y Android",
    },
    {
      slug: "academia",
      fullDescription: "AcademIA es una plataforma web multiagente",
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
});

test("project actions are conditional and the live action copies the CV button design", () => {
  const eduvial = readBuiltPage("/projects/eduvialcr/index.html");
  const academia = readBuiltPage("/projects/academia/index.html");
  const detailSource = readSource("src/pages/projects/[slug].astro");
  const aboutSource = readSource("src/components/AboutMe.astro");

  assert.match(eduvial, />\s*Ver proyecto\s*</);
  assert.doesNotMatch(eduvial, />\s*Ver repositorio\s*</);
  assert.doesNotMatch(academia, />\s*Ver proyecto\s*</);
  assert.doesNotMatch(academia, />\s*Ver repositorio\s*</);

  for (const cssClass of [
    "rounded-full",
    "border-sky-400/30",
    "bg-sky-400/10",
    "text-sky-300",
    "hover:bg-sky-400",
    "active:scale-[0.97]",
  ]) {
    assert.match(aboutSource, new RegExp(cssClass.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(detailSource, new RegExp(cssClass.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("the gallery is a data-driven carousel with optional privacy-enhanced video", () => {
  const gallerySource = readSource("src/components/projects/ProjectGallery.astro");
  const dataSource = readSource("src/data/projects.ts");
  const eduvial = readBuiltPage("/projects/eduvialcr/index.html");

  assert.match(dataSource, /type ProjectMedia/);
  assert.match(dataSource, /type: "youtube"/);
  assert.match(dataSource, /platforms: ProjectPlatform\[\]/);
  assert.match(gallerySource, /youtube-nocookie\.com\/embed/);
  assert.match(gallerySource, /data-gallery-next/);
  assert.match(gallerySource, /data-gallery-prev/);
  assert.match(gallerySource, /aria-label="Siguiente diapositiva"/);
  assert.match(gallerySource, /motion-reduce:transition-none/);
  assert.match(gallerySource, /touchstart/);
  assert.match(gallerySource, /ArrowRight/);
  assert.match(gallerySource, /data-play-video/);
  assert.match(eduvial, /data-gallery/);
});

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readBuiltPage = (path) =>
  readFileSync(new URL(`../dist${path}`, import.meta.url), "utf8");

const routes = [
  "",
  "about/",
  "contact/",
  "projects/",
  "projects/eduvialcr/",
  "projects/videoteca-uned/",
  "projects/binary-search-tree-visualizer/",
  "projects/banker-sim/",
  "projects/portfolio/",
];

test("every production route is generated in Spanish and English", () => {
  for (const route of routes) {
    assert.match(readBuiltPage(`/${route}index.html`), /<html lang="es"/);
    assert.match(readBuiltPage(`/en/${route}index.html`), /<html lang="en"/);
  }
});

test("language controls preserve equivalent localized routes", () => {
  for (const route of routes) {
    const spanish = readBuiltPage(`/${route}index.html`);
    const english = readBuiltPage(`/en/${route}index.html`);
    const spanishPath = `/${route}`.replace(/\/$/, "") || "/";
    const englishPath = `/en/${route}`.replace(/\/$/, "") || "/en";

    assert.match(spanish, new RegExp(`href="${englishPath.replaceAll("/", "\\/")}"[^>]*data-language-switch`));
    assert.match(english, new RegExp(`href="${spanishPath.replaceAll("/", "\\/")}"[^>]*data-language-switch`));
  }
});

test("English pages localize UI, metadata, contact messages, and project content", () => {
  const home = readBuiltPage("/en/index.html");
  const contact = readBuiltPage("/en/contact/index.html");
  const project = readBuiltPage("/en/projects/eduvialcr/index.html");

  assert.match(home, /Hi,/);
  assert.match(home, /Projects/);
  assert.match(home, /Experience/);
  assert.match(home, /About me/);
  assert.match(home, /View all projects/);
  assert.match(home, /<title>Kendall Calderón — Portfolio<\/title>/);
  assert.match(contact, /Open to opportunities/);
  assert.match(contact, /Send an email/);
  assert.match(contact, /I%20saw%20your%20portfolio/);
  assert.match(project, /EduvialCR is an EdTech platform/);
  assert.match(project, /What it offers/);
  assert.match(project, /Project summary/);
  assert.match(project, /All projects/);
  assert.match(project, /View project|View repository/);
});

test("localized pages expose server-rendered language metadata", () => {
  const spanish = readBuiltPage("/about/index.html");
  const english = readBuiltPage("/en/about/index.html");

  assert.match(spanish, /<title>Sobre mí — Kendall Calderón<\/title>/);
  assert.match(english, /<title>About me — Kendall Calderón<\/title>/);
  assert.match(spanish, /hreflang="es"/);
  assert.match(spanish, /hreflang="en"/);
  assert.match(english, /hreflang="es"/);
  assert.match(english, /hreflang="en"/);
});

test("generated inline scripts never expose TypeScript syntax to browsers", () => {
  for (const route of routes) {
    for (const prefix of ["", "en/"]) {
      const html = readBuiltPage(`/${prefix}${route}index.html`);
      const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
        .map(([, script]) => script)
        .join("\n");

      assert.doesNotMatch(scripts, /querySelector(?:All)?<[^>]+>/);
      assert.doesNotMatch(scripts, /\([^)]*\b\w+\s*:\s*(?:number|string|boolean)\b/);
      assert.doesNotMatch(scripts, /\bas\s+(?:const|[A-Z]\w*(?:\[\])?)/);
    }
  }
});

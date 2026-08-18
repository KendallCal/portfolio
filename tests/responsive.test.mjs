import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readSource = (path) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("mobile navigation is accessible and keeps all global actions", () => {
  const header = readSource("src/components/Header.astro");

  assert.match(header, /min-h-11/);
  assert.match(header, /size-11/);
  assert.match(header, /t\.header\.github/);
  assert.match(header, /t\.header\.linkedin/);
  assert.match(header, /event\.key !== "Escape"/);
  assert.match(header, /document\.body\.classList\.toggle\("overflow-hidden", open\)/);
  assert.match(header, /setMobileMenu\(false\)/);
  assert.match(header, /aria-hidden/);
  assert.match(header, /language\.toUpperCase\(\)/);
  assert.match(header, /rounded-2xl border border-white\/10 bg-zinc-950\/70/);
  assert.match(header, /backdrop-blur-2xl backdrop-saturate-150/);
  assert.match(header, /scale-\[0\.98\]/);
  assert.match(header, /scale-100/);
});

test("mobile hero preserves content, portrait, and touch-friendly actions", () => {
  const hero = readSource("src/components/Hero.astro");
  const socialPill = readSource("src/components/SocialPill.astro");

  assert.match(hero, /100svh/);
  assert.match(hero, /md:hidden/);
  assert.match(hero, /size-28/);
  assert.ok(hero.indexOf("md:hidden") < hero.indexOf("<h1"));
  assert.match(hero, /hidden justify-center pt-5 pb-4 md:flex/);
  assert.match(hero, /hero-socials.*grid grid-cols-2/);
  assert.match(hero, /a:last-child/);
  assert.match(hero, /grid-column: 1 \/ -1/);
  assert.match(hero, /clamp\(/);
  assert.match(socialPill, /h-11/);
  assert.match(socialPill, /sm:h-10/);
});

test("project cards keep desktop dimensions and gain mobile-safe sizing", () => {
  const card = readSource("src/components/projects/ProjectCard.astro");
  const carousel = readSource("src/components/projects/ProjectCarousel.astro");
  const gallery = readSource("src/components/projects/ProjectGallery.astro");

  assert.match(card, /h-107\.5/);
  assert.match(card, /sm:h-105/);
  assert.match(card, /max-w-full/);
  assert.match(card, /size-11/);
  assert.match(card, /sm:size-8/);
  assert.match(carousel, /sm:w-1\/2/);
  assert.match(carousel, /lg:-left-8/);
  assert.match(carousel, /hidden -translate-y-1\/2 sm:left-0 sm:inline-flex/);
  assert.match(carousel, /AUTOPLAY_DELAY_MS/);
  assert.match(carousel, /touchstart/);
  assert.match(carousel, /touchend/);
  assert.match(gallery, /lg:-left-10/);
});

test("mobile experience and footer use compact stacked layouts", () => {
  const about = readSource("src/components/AboutMe.astro");
  const experience = readSource("src/components/Experience.astro");
  const footer = readSource("src/components/Footer.astro");
  const stack = readSource("src/components/Stack.astro");

  assert.match(about, /hidden gap-2 sm:grid sm:grid-cols-3/);
  assert.match(about, /mt-6 flex justify-center sm:mt-10/);
  assert.match(experience, /flex-col items-start/);
  assert.match(experience, /ml-7 last:mb-0 sm:ml-6/);
  assert.match(experience, /mt-8 px-3 sm:mt-10 sm:px-2/);
  assert.match(experience, /sm:flex-row/);
  assert.match(experience, /hidden font-normal text-white sm:inline/);
  assert.match(footer, /mailto:kendallcr2012@gmail\.com/);
  assert.match(footer, /label: t\.header\.links\.about/);
  assert.match(footer, /hover:text-white sm:hidden/);
  assert.match(footer, /hidden text-sm font-normal text-zinc-300 sm:inline/);
  assert.match(footer, /hidden items-center gap-6 sm:flex/);
  assert.match(footer, /justify-content: center/);
  assert.match(stack, /grid-template-columns: repeat\(4, minmax\(0, 1fr\)\)/);
  assert.match(stack, /--icon-size: 1\.65rem/);
  assert.doesNotMatch(
    stack.match(/@media \(max-width: 559px\)[\s\S]*?@media \(prefers-reduced-motion/)?.[0] ?? "",
    /min-height:/,
  );
});

test("technology data contains only the selected sixteen tools", () => {
  const technologyData = readSource("src/data/technologies.ts");
  const names = [...technologyData.matchAll(/\{ name: "([^"]+)"/g)].map(
    ([, name]) => name,
  );

  assert.deepEqual(names, [
    "Python",
    "C#",
    "AWS",
    "Java",
    "CSS",
    "HTML",
    "Git",
    "GitHub",
    "OpenAI",
    "Claude",
    "OpenCode",
    "MySQL",
    "Visual Studio Code",
    "Visual Studio",
    "Next.js",
    "JavaScript",
  ]);

  const stack = readSource("src/components/Stack.astro");
  assert.match(stack, /height: 29rem/);
});

test("project information is compact and ordered first on mobile", () => {
  const detail = readSource("src/pages/projects/[slug].astro");

  assert.match(detail, /contents lg:order-1 lg:block lg:space-y-12/);
  assert.match(detail, /contents lg:order-2 lg:block/);
  assert.match(detail, /order-1 border-y/);
  assert.match(detail, /section class="order-2"/);
  assert.match(detail, /section class="order-3"/);
  assert.match(detail, /grid grid-cols-3 gap-3/);
  assert.match(detail, /order-4 border-t/);
  assert.match(detail, /order-5 border-t/);
  assert.match(detail, /aria-label=\{t\.detail\.projectNavigation\}/);
  assert.match(detail, /group hidden items-center gap-2.*md:inline-flex/);
  assert.match(detail, /nextProject/);
  assert.match(detail, /project-actions mt-6 grid grid-cols-2/);
  assert.match(detail, /\.project-action:only-child/);
  assert.match(detail, /grid-column: 1 \/ -1/);
});

test("about certifications are the final mobile profile section", () => {
  const aboutPage = readSource("src/pages/about.astro");

  assert.match(aboutPage, /contents lg:block lg:space-y-12/);
  assert.match(aboutPage, /section class="order-1".*about-introduction-title/);
  assert.match(aboutPage, /section class="order-2".*about-education-title/);
  assert.match(
    aboutPage,
    /aside class="order-3 divide-y divide-zinc-800\/80 lg:space-y-8/,
  );
  assert.match(
    aboutPage,
    /divide-y divide-zinc-800\/80 border-t border-zinc-800\/80 sm:border-y/,
  );
  assert.match(aboutPage, /aria-labelledby="about-information-title"/);
  assert.match(
    aboutPage,
    /id="about-information-title" class="section-title mt-0!">\{t\.about\.information\}/,
  );
  assert.match(aboutPage, /py-5 lg:hidden/);
  assert.match(
    aboutPage,
    /gap-5 pt-8 text-center sm:border-t sm:border-zinc-800\/80/,
  );
  assert.match(aboutPage, /section class="order-4".*about-certifications-title/);
  assert.match(
    aboutPage,
    /grid grid-cols-\[1\.75rem_minmax\(0,1fr\)\].*sm:flex/,
  );
  assert.match(aboutPage, /col-start-2 inline-flex.*sm:col-auto sm:ml-auto/);
  assert.match(aboutPage, /flex min-h-10 items-center gap-2\.5/);
  assert.match(
    aboutPage,
    /grid grid-cols-2 gap-x-4 gap-y-2\.5 lg:block lg:space-y-2\.5/,
  );
});

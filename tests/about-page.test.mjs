import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readBuiltPage = (path) =>
  readFileSync(new URL(`../dist${path}`, import.meta.url), "utf8");

test("about page presents the extended professional profile", () => {
  const about = readBuiltPage("/about/index.html");

  assert.match(about, /Kendall Calderón Burgos/);
  assert.match(about, /San Ramón, Alajuela, Costa Rica/);
  assert.doesNotMatch(about, /San José, Alajuela, Costa Rica/);
  assert.match(about, /Universidad Estatal a Distancia de Costa Rica/);
  assert.match(about, /Ingeniería Informática/);
  assert.match(about, /Python Essentials 2/);
  assert.match(about, /Artificial Intelligence Fundamentals/);
  assert.match(about, /AWS Certified Cloud Practitioner/);
  assert.match(about, /Scrum Foundation Professional Certification/);
  assert.match(about, /Desarrollador de software/);
  assert.match(about, /Cloud Computing/);
  assert.match(about, /Inteligencia Artificial/);
  assert.match(about, /A2\+ \/ B1/);
  assert.match(about, /Amazon Web Services/);
  assert.match(about, /IBM SkillsBuild/);
  assert.match(about, /Cisco Networking Academy/);
  assert.match(about, /CertiProf/);
  assert.match(about, /Ver credencial/);
  assert.match(about, /460a64db-74a5-4d90-abd8-82ee548d23aa/);
  assert.doesNotMatch(about, /AWS re\/Start Cloud Specialist/);
  assert.doesNotMatch(about, /Lean Six Sigma White Belt/);
  assert.doesNotMatch(about, /Cybersecurity Awareness/);
  assert.match(about, /Español/);
  assert.match(about, /Inglés/);
  assert.match(about, /Educación/);
  assert.match(about, /Certificaciones/);
  assert.match(about, /Idiomas/);
  assert.match(about, /Fortalezas/);
  assert.match(about, /Áreas de interés/);
  assert.match(about, /Descargar CV/);
  assert.match(about, /data-download-cv/);
  assert.match(about, /href="\/cv-kendall-calderon\.pdf"/);
  assert.doesNotMatch(about, /Volver al portafolio/);
  assert.doesNotMatch(about, /pendiente de agregar/i);
});

test("homepage about action opens the extended profile", () => {
  const homepage = readBuiltPage("/index.html");

  assert.match(homepage, /href="\/about"/);
  assert.match(homepage, /Ver perfil completo/);
});

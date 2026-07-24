import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readBuiltPage = (path) =>
  readFileSync(new URL(`../dist${path}`, import.meta.url), "utf8");

test("contact page offers direct email and WhatsApp actions", () => {
  const contact = readBuiltPage("/contact/index.html");

  assert.match(contact, /data-contact-page/);
  assert.match(contact, /mailto:/);
  assert.match(contact, /Enviar un correo/);
  assert.match(contact, /https:\/\/wa\.me\/50684919253/);
  assert.match(contact, /Escribir por WhatsApp/);
  assert.doesNotMatch(contact, /Volver al portafolio/);
  assert.match(contact, /Abierto a oportunidades/);
  assert.match(contact, /Procuro responder a la mayor brevedad posible/);
});

test("global navigation opens the contact page", () => {
  const homepage = readBuiltPage("/index.html");

  assert.match(homepage, /href="\/contact"/);
});

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readBuiltPage = (path) =>
  readFileSync(new URL(`../dist${path}`, import.meta.url), "utf8");

test("contact page offers mailto form and WhatsApp", () => {
  const contact = readBuiltPage("/contact/index.html");

  assert.match(contact, /data-email-form/);
  assert.match(contact, /type="email"/);
  assert.match(contact, /Enviar correo/);
  assert.match(contact, /mailto:/);
  assert.match(contact, /https:\/\/wa\.me\/50684919253/);
  assert.match(contact, /Escribir por WhatsApp/);
  assert.doesNotMatch(contact, /Volver al portafolio/);
  assert.match(contact, /Hablemos/);
});

test("global navigation opens the contact page", () => {
  const homepage = readBuiltPage("/index.html");

  assert.match(homepage, /href="\/contact"/);
});

import { defaultLanguage, type Language } from "./config";
import { translations } from "./translations";

export const getTranslations = (language: Language) => translations[language];

export const getLanguageFromPath = (pathname: string): Language =>
  pathname === "/en" || pathname.startsWith("/en/") ? "en" : defaultLanguage;

export const localizePath = (path: string, language: Language): string => {
  const [pathname, suffix = ""] = path.split(/(?=[?#])/u, 2);
  const localized =
    pathname === "/en"
      ? "/"
      : pathname.startsWith("/en/")
        ? pathname.slice(3)
        : pathname || "/";
  const normalized =
    localized.length > 1 ? localized.replace(/\/+$/u, "") : localized;

  return `${language === "en" ? `/en${normalized === "/" ? "" : normalized}` : normalized}${suffix}`;
};

export const switchLanguagePath = (pathname: string, language: Language) =>
  localizePath(pathname, language === "es" ? "en" : "es");

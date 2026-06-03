// Bilingual EN/ID glue. Pages take a `lang` prop; helpers below resolve content
// bundles and produce the link to the other-language version of the current page.

import * as EN from "./data/content";
import * as ID from "./data/content.id";

export type Lang = "en" | "id";
export const LANGS: Lang[] = ["en", "id"];
export const DEFAULT_LANG: Lang = "en";

const BUNDLES = { en: EN, id: ID } as const;

export function getContent(lang: Lang) {
  return BUNDLES[lang];
}

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "id" : "en";
}

// Derive locale from URL path. `/` and `/what-we-do` → "en"; `/id` and `/id/...` → "id".
export function langFromPath(pathname: string): Lang {
  return /^\/id(\/|$)/.test(pathname) ? "id" : "en";
}

// Map a slug like "/" or "/what-we-do" to its prefixed form for the given lang.
export function pathFor(lang: Lang, slug: string): string {
  const clean = slug.startsWith("/") ? slug : `/${slug}`;
  if (lang === "en") return clean === "" ? "/" : clean;
  return clean === "/" ? "/id/" : `/id${clean}`;
}

// Given the current pathname, return the equivalent path in `target`.
export function altLangPath(pathname: string, target: Lang): string {
  const stripped = pathname.replace(/^\/id(?=\/|$)/, "") || "/";
  return pathFor(target, stripped);
}

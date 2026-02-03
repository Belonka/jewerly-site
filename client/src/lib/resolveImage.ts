import { toAssetUrl } from "./assets";

export function resolveImage(src?: string) {
  if (!src) return "";

  const s = src.trim();

  // полный URL
  if (/^https?:\/\//.test(s)) return s;

  // локальные public-ассеты (оставь только то, что реально лежит в /public)
  if (s.startsWith("/icons/") || s.startsWith("/images/")) return s;

  // если вдруг прилетел "/products/..." — это НЕ local, режем слэш и отправляем в S3
  const normalized = s.replace(/^\/+/, "");

  return toAssetUrl(normalized);
}

// import { toAssetUrl } from "./assets";

// export function resolveImage(src?: string) {
//   if (!src) return "";

//   if (/^https?:\/\//.test(src)) return src;

//   if (src.startsWith("/")) return src;

//   return toAssetUrl(src);
// }
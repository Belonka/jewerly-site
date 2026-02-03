


export function toAssetUrl(keyOrUrl: string) {
  if (!keyOrUrl) return "";
  
  if (keyOrUrl.startsWith("http://") || keyOrUrl.startsWith("https://")) 
    return keyOrUrl;

  const base = process.env.NEXT_PUBLIC_ASSETS_BASE_URL ;
  if (!base) throw new Error("Missing NEXT_PUBLIC_ASSETS_BASE_URL in .env.local");

  
  const normalizedBase = base.endsWith("/") ? base : base + "/";
  const normalizedKey = keyOrUrl.startsWith("/") ? keyOrUrl.slice(1) : keyOrUrl;

  return normalizedBase + normalizedKey;
}
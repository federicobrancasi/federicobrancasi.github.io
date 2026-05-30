import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'profile';
  image?: string;
  structuredData?: Record<string, unknown>;
}

const SITE_URL = 'https://branca.si';
const DEFAULT_IMAGE = `${SITE_URL}/android-chrome-512x512.png`;

const upsertMetaTag = (selector: string, attributes: Record<string, string>, content: string) => {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);

  if (!meta) {
    meta = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => meta?.setAttribute(key, value));
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', href);
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  path,
  type = 'website',
  image = DEFAULT_IMAGE,
  structuredData,
}) => {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();

    document.title = title;
    upsertCanonical(canonicalUrl);

    upsertMetaTag('meta[name="description"]', { name: 'description' }, description);
    upsertMetaTag('meta[name="author"]', { name: 'author' }, 'Federico Brancasi');
    upsertMetaTag('meta[property="og:title"]', { property: 'og:title' }, title);
    upsertMetaTag('meta[property="og:description"]', { property: 'og:description' }, description);
    upsertMetaTag('meta[property="og:type"]', { property: 'og:type' }, type);
    upsertMetaTag('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    upsertMetaTag('meta[property="og:image"]', { property: 'og:image' }, image);
    upsertMetaTag('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    upsertMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    upsertMetaTag('meta[name="twitter:image"]', { name: 'twitter:image' }, image);

    if (structuredData) {
      let script = document.head.querySelector<HTMLScriptElement>('#page-structured-data');

      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'page-structured-data';
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(structuredData);
    }
  }, [description, image, path, structuredData, title, type]);

  return null;
};

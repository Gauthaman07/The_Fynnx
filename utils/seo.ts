
interface SEOProps {
  title: string;
  description: string;
  path?: string;
  robots?: string;
}

export const updateMetaTags = ({ title, description, path = '', robots = 'index, follow' }: SEOProps) => {
  const baseUrl = 'https://thefynnx.com';
  const fullUrl = `${baseUrl}${path}`;

  // Update title
  document.title = title;

  // Update meta tags
  const metaUpdates: Record<string, string> = {
    'meta[name="title"]': title,
    'meta[name="description"]': description,
    'meta[name="robots"]': robots,
    'meta[property="og:title"]': title,
    'meta[property="og:description"]': description,
    'meta[property="og:url"]': fullUrl,
    'meta[name="twitter:title"]': title,
    'meta[name="twitter:description"]': description,
    'meta[name="twitter:url"]': fullUrl,
  };

  Object.entries(metaUpdates).forEach(([selector, content]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute('content', content);
    }
  });

  // Update canonical
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', fullUrl);
  }
};

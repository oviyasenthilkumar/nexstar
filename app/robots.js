export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/', '/api/'],
      },
    ],
    sitemap: 'https://nexstar-consulting.com/sitemap.xml',
    host: 'https://nexstar-consulting.com',
  };
}

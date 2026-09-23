/** @type {import('next').NextConfig} */
const privateNoIndexHeaders = [
  {
    key: 'X-Robots-Tag',
    value:
      'noindex, nofollow, noarchive, nosnippet, noimageindex, max-image-preview:none, max-snippet:0, max-video-preview:0',
  },
  {
    key: 'Cache-Control',
    value: 'private, no-store, max-age=0, must-revalidate',
  },
];

const nextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    '/*': ['./public/agreements/anaheim-regular.ttf'],
  },
  async headers() {
    return [
      {
        source: '/sign/:path*',
        headers: [
          ...privateNoIndexHeaders,
          { key: 'Referrer-Policy', value: 'no-referrer' },
        ],
      },
      {
        source: '/api/sign/:path*',
        headers: [
          ...privateNoIndexHeaders,
          { key: 'Referrer-Policy', value: 'no-referrer' },
        ],
      },
      {
        source: '/RFQ/:path*',
        headers: privateNoIndexHeaders,
      },
      {
        source: '/resumes/:path*',
        headers: privateNoIndexHeaders,
      },
      {
        source: '/people/anthony/:path*',
        headers: privateNoIndexHeaders,
      },
    ];
  },
};

module.exports = nextConfig;

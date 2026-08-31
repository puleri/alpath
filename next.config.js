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
  async headers() {
    return [
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

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://www.john-liu.dev/:path*",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.API_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

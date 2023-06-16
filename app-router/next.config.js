/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination:
          "https://800efed8-3644-4aa2-b61d-9ed9c519a49f.mock.pstmn.io/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;

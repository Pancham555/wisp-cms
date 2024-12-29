/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "cdn.leonardo.ai",
      },
    ],
  },
  redirects: async () => {
    return [];
  },
};

export default nextConfig;

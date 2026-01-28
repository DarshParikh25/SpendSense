/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // Allow cross-origin dev requests
  allowedDevOrigins: ["*.local-origin.dev", "localhost", "127.0.0.1"],

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.clerk.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // for google profile avatar
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // for github profile avatar
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

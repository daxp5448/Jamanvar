/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emits .next/standalone — a self-contained server bundle used by the
  // production Docker image (see Dockerfile).
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

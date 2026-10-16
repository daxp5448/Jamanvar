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
  async redirects() {
    return [
      // Short, shareable address for the WhatsApp Ordering page.
      { source: "/whatsapp-ordering", destination: "/products/whatsapp-ordering", permanent: true },
      { source: "/kiosk", destination: "/products/kiosk", permanent: true },
    ];
  },
};

export default nextConfig;

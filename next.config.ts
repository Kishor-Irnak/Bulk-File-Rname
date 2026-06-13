import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  compress: true,
  transpilePackages: ['motion'],
  experimental: {
    // Tree-shake lucide-react and motion to only include icons/exports actually used.
    // This can reduce the client bundle by 15–30% on icon-heavy pages.
    optimizePackageImports: ['lucide-react', 'motion'],
  },
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify — file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;

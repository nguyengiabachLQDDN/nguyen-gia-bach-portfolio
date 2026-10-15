import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/vi', destination: '/', permanent: true },
      { source: '/vi/:path*', destination: '/:path*', permanent: true },
      { source: '/projects/esight-or-robotics', destination: '/projects/esight', permanent: true },
    ];
  },
};

export default nextConfig;

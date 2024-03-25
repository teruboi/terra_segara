/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns:[
          {
            protocol: 'https',
            hostname: 'ui-avatars.com',
            port: '',
            pathname: '/api/**'
          }
        ]
      },
};

export default nextConfig;

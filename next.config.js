/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    transpilePackages: ['three'],
    nextConfig,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            },
        ],
        domain: ['localhost']
    },
}

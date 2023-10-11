/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    transpilePackages: ['three'],
    nextConfig,
    images: {
        remotePatterns: [
            {
                protocol: ['http', 'https'],
                hostname: ['localhost', 'main--whimsical-tarsier-5985be.netlify.app'],
                port: '*',
                pathname: '/**',
            },
        ],
        domain: ['localhost', 'main--whimsical-tarsier-5985be.netlify.app']
    },
}
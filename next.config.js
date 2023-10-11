/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    transpilePackages: ['three'],
    nextConfig,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'main--whimsical-tarsier-5985be.netlify.app',
                port: '*',
                pathname: '/**',
            },
        ],
        domain: ['main--whimsical-tarsier-5985be.netlify.app']
    },
}
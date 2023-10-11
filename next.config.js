/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    transpilePackages: ['three'],
    nextConfig,
    images: {
        domains: ['localhost', 'main--whimsical-tarsier-5985be.netlify.app']
    },
}
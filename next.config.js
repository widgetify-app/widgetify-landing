/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React's Strict Mode
    reactStrictMode: true,

    // Configure image optimization
    images: {
        domains: [],
    },

    // Configure experimental features if needed
    experimental: {
        // App directory is now stable in Next.js 15
    },

    // Configure webpack if needed for custom fonts or assets
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: 'static/fonts/',
                },
            },
        });

        return config;
    },
}

module.exports = nextConfig
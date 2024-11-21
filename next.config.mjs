/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "www.notion.so",
            },
            {
                hostname: "images.unsplash.com"
            }
        ]
    }
};

export default nextConfig;

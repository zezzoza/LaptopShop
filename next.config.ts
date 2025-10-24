import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    basePath: "/LaptopShop",
    assetPrefix: "/LaptopShop/",
}

export default nextConfig

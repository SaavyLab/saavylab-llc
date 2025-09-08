import type { NextConfig } from "next";
// MDX support
// eslint-disable-next-line import/no-default-export
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  // Standalone output for OpenNext/Cloudflare Workers deployment
  output: "standalone",
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);

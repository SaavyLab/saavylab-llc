import type { NextConfig } from "next";
// MDX support
// eslint-disable-next-line import/no-default-export
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  // Static export suitable for static hosting (no server runtime).
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);

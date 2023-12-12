/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/src',
  output: "export",
  assetPrefix: '/out',

  // Specify the base path for the exported pages
  // assetPrefix: '/src/',

  // Specify the output directory for the export
  // output: {
  //   dir: 'out',
  // },
  typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
}

module.exports = nextConfig

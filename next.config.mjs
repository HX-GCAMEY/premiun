/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // export directories as folders with index.html (so /brands/cremac -> /brands/cremac/index.html)
  trailingSlash: true,
};

export default nextConfig;

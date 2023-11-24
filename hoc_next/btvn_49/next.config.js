/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};
const withNextIntl = require("next-intl/plugin")("./i18n.js");

module.exports = withNextIntl(
  // Other Next.js configuration ...
  nextConfig
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "vn", "fr"],
    defaultLocale: "en",
    localeDetection: false,
  },
};

module.exports = nextConfig;

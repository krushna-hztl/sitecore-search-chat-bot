/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SEARCH_ENV: process.env.SEARCH_ENV,
    SEARCH_CUSTOMER_KEY: process.env.SEARCH_CUSTOMER_KEY,
    SEARCH_API_KEY: process.env.SEARCH_API_KEY,
    SEARCH_SOURCE: process.env.SEARCH_SOURCE,
    SEARCH_DOMAIN_ID: process.env.SEARCH_DOMAIN_ID,
  },
};

export default nextConfig;

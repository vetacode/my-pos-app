/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const prettierConfig = {
  plugins: ["prettier-plugin-prisma", "prettier-plugin-tailwindcss"],
};

export default prettierConfig;

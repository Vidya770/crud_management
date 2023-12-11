/** @type {import('server').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: ["light", "dark", "corporate"],
    },
    plugins: [require("daisyui")],
  }
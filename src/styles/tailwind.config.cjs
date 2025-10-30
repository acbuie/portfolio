/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Hack for small screen; 40px is equivalent to px-5
            ".expressive-code": {
              maxWidth: "calc(100vw - 40px)",
            },
          },
        },
      },
    },
  },
};

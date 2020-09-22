module.exports = {
  purge: [],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#ECECF2",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      background: "#ECECF2",
    }),
    extend: {
      fontFamily: {
        playfair: ["Playfair Display"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      backgroundImage: () => ({
        "primary-pattern":
          "url('data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239594bf' fill-opacity='0.22'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }),
    },
  },
  variants: {},
  plugins: [],
};

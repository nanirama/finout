const plugin = require("tailwindcss/plugin")

const utilities = plugin(function ({ addUtilities }) {
  const newUtilities = {
    ".clip-0": {
      clip: "rect(0, 0, 0, 0)",
    },

    ".clip-auto": {
      clip: "auto",
    },

    ".safari-overflow-fix": {
      "-webkit-mask-image": "-webkit-radial-gradient(white, black)",
    },

    ".wrapper": {
      paddingTop: "64px",

      "@screen lg": {
        paddingTop: "72px",
      },
    },

    ".top-offset-sticky": {
      top: "64px",

      "@screen lg": {
        top: "72px",
      },
    },

    ".slide-transition": {
      transition: "max-height 0.5s cubic-bezier(0, 1, 0, 1)",
    },

    ".slide-transition--active": {
      maxHeight: "9999px",
      transition: "max-height 1s ease-in-out",
    },

    ".img-fill": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      backgroundPosition: "center",
    },
  }

  addUtilities(newUtilities, ["responsive", "hover"])
})

module.exports = utilities

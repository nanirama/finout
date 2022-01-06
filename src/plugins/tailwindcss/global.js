const plugin = require("tailwindcss/plugin")

const globalStyles = plugin(function ({ addBase, theme }) {
  const styles = {
    body: {
      color: theme("colors.green.dark"),
      minHeight: "100vh",
      fontWeight: 400,
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },

    a: {
      transitionProperty: theme("transitionProperty.colors"),
      transitionTimingFunction: theme("transitionTimingFunction.linear"),
      transitionDuration: theme("transitionDuration.100"),

      "&:hover": {
        color: theme("colors.coral.DEFAULT"),
      },
    },

    "a, button, input, select": {
      outline: "none",

      "&:focus": {
        outline: "none",
      },
    },

    "::-moz-selection": {
      backgroundColor: theme("colors.coral.DEFAULT"),
      color: theme("colors.white"),
    },

    "::selection": {
      backgroundColor: theme("colors.coral.DEFAULT"),
      color: theme("colors.white"),
    },
  }

  addBase(styles)
})

module.exports = globalStyles

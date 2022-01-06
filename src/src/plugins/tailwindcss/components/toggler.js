const plugin = require("tailwindcss/plugin")

const toggler = plugin(function ({ addComponents, theme }) {
  const styles = {
    ".hamburger-react": {
      appearance: "none",
      position: "relative",
      zIndex: "999",
      marginLeft: "auto",

      "@screen lg": {
        display: "none",
      },
    },
  }

  addComponents(styles)
})

module.exports = toggler

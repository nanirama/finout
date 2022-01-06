const plugin = require("tailwindcss/plugin")

const arrowStyles = plugin(function ({ addComponents, theme }) {
  const styles = {
    ".arrow": {
      position: "relative",
      display: "inline-block",
      height: "2px",
      backgroundColor: theme("colors.coral.DEFAULT"),
      width: "26px",

      ".arrow__head": {
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        display: "block",

        "&::before": {
          position: "relative",
          borderStyle: "solid",
          borderWidth: "2px 2px 0 0",
          borderColor: theme("colors.coral.DEFAULT"),
          content: "''",
          display: "inline-block",
          height: "8px",
          position: "relative",
          top: "6px",
          transform: "rotate(-45deg)",
          verticalAlign: "top",
          width: "8px",
          left: "0",
          transform: "rotate(45deg)",
        },
      },
    },
  }

  addComponents(styles)
})

module.exports = arrowStyles

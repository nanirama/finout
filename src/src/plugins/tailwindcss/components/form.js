const plugin = require("tailwindcss/plugin")

const form = plugin(function ({ addComponents, theme }) {
  const styles = {
    "input[type='email'], input[type='date'], input[type='datetime'], input[type='datetime-local'], input[type='month'], input[type='number'], input[type='password'], input[type='search'], input[type='tel'], input[type='text'], input[type='time'], input[type='week'], input[type='url'], select, textarea":
      {
        display: "block",
        width: "100%",
        paddingTop: "0.625rem",
        paddingBottom: "0.625rem",
        paddingLeft: theme("spacing.2"),
        paddingRight: theme("spacing.2"),
        lineHeight: theme("lineHeight.normal"),
        backgroundColor: theme("colors.white"),
        borderWidth: theme("borderWidth.DEFAULT"),
        borderColor: theme("colors.green.dark"),
        borderRadius: theme("borderRadius.DEFAULT"),
        appearance: "none",
        transitionProperty:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
        transitionDuration: "150ms",
        transitionTimingFunction: "linear",

        "&:active, &:focus": {
          borderColor: theme("colors.coral.DEFAULT"),
          outline: "none",
        },

        "&::-webkit-input-placeholder": {
          color: theme("colors.gray.DEFAULT"),
        },

        "&::-ms-input-placeholder": {
          color: theme("colors.gray.DEFAULT"),
        },
      },
  }

  addComponents(styles)
})

module.exports = form

const plugin = require("tailwindcss/plugin")

const button = plugin(function ({ addComponents, theme }) {
  const styles = {
    ".btn, .hs-button": {
      paddingLeft: theme("spacing.10"),
      paddingRight: theme("spacing.10"),
      paddingTop: theme("spacing.5"),
      paddingBottom: theme("spacing.5"),
      cursor: "pointer",
      display: "inline-block",
      fontWeight: theme("fontWeight.bold"),
      textAlign: "center",
      lineHeight: theme("lineHeight.none"),
      borderWidth: theme("borderWidth.2"),
      borderStyle: "solid",
      borderRadius: theme("borderRadius.full"),
      appearance: "none",
      transitionProperty: "background-color, border-color, color, fill, stroke",
      transitionDuration: "150ms",
      transitionTimingFunction: "linear",
      textTransform: "uppercase",
      letterSpacing: theme("letterSpacing.wider"),
    },

    ".btn-xs": {
      paddingLeft: theme("spacing.4"),
      paddingRight: theme("spacing.4"),
      paddingTop: "0.625rem",
      paddingBottom: "0.625rem",
      fontSize: theme("fontSize.xs"),
    },

    ".btn-sm": {
      paddingLeft: theme("spacing.7"),
      paddingRight: theme("spacing.7"),
      paddingTop: theme("spacing.2"),
      paddingBottom: theme("spacing.2"),
      fontSize: theme("fontSize.sm"),
    },

    ".btn-lg": {
      paddingLeft: theme("spacing.16"),
      paddingRight: theme("spacing.16"),
      paddingTop: theme("spacing.5"),
      paddingBottom: theme("spacing.5"),
      fontSize: theme("fontSize.base"),
    },

    ".btn-coral, .hs-button": {
      backgroundColor: theme("colors.coral.DEFAULT"),
      borderColor: theme("colors.coral.DEFAULT"),
      color: theme("colors.white"),

      "&:hover": {
        backgroundColor: theme("colors.coral.hover"),
        borderColor: theme("colors.coral.hover"),
        color: theme("colors.white"),
      },
    },

    ".btn-green": {
      backgroundColor: theme("colors.green.DEFAULT"),
      borderColor: theme("colors.green.DEFAULT"),
      color: theme("colors.white"),

      "&:hover": {
        backgroundColor: theme("colors.green.hover"),
        borderColor: theme("colors.green.hover"),
        color: theme("colors.white"),
      },
    },

    ".btn-outlined-green-dark": {
      backgroundColor: theme("colors.transparent.dark"),
      borderColor: theme("colors.green.dark"),
      color: theme("colors.green.dark"),

      "&:hover": {
        backgroundColor: theme("colors.coral.DEFAULT"),
        borderColor: theme("colors.coral.DEFAULT"),
        color: theme("colors.white"),
      },
    },
  }

  addComponents(styles)
})

module.exports = button

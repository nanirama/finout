const plugin = require("tailwindcss/plugin")

const formHubspot = plugin(function ({ addComponents, theme }) {
  const styles = {
    ".hs-form": {
      ".hs-form-field": {
        marginBottom: theme("spacing.5"),

        label: {
          display: "block",
          marginBottom: "0.375rem",

          "&.hs-error-msg": {
            marginTop: "0.375rem",
            fontSize: theme("fontSize.sm"),
            color: theme("colors.red"),
          },
        },
      },

      // Consent container.
      ".legal-consent-container": {
        marginTop: theme("spacing.3"),
        marginBottom: theme("spacing.3"),
        fontSize: theme("fontSize.sm"),
        color: theme("colors.gray.DEFAULT"),
      },

      // Actions section.
      ".actions": {
        marginTop: theme("spacing.8"),
      },

      ".hs-main-font-element": {
        fontSize: theme("fontSize.sm"),
        color: theme("colors.red"),
      },

      ".hs-button": {
        width: "100%",
      },
    },
  }

  addComponents(styles)
})

module.exports = formHubspot

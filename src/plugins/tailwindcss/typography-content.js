const typographyContent = {
  typography: theme => ({
    DEFAULT: {
      css: {
        a: null,

        img: null,

        "a:not(.btn, .stargazers)": {
          color: theme("colors.coral.DEFAULT"),
          fontWeight: theme("fontWeight.bold"),
          textDecoration: "none",

          "&:hover": {
            textDecoration: "underline",
          },
        },

        "h1, h2, h3, h4, h5, h6": {
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.black"),
        },

        ul: {
          "> li::before": {
            backgroundColor: theme("colors.coral.DEFAULT"),
          },
        },

        blockquote: {
          borderColor: theme("colors.coral.DEFAULT"),

          p: {
            color: theme("colors.black"),
          },

          cite: {
            fontSize: theme("fontSize.xs[0]"),
            color: theme("colors.gray"),
          },
        },

        pre: {
          backgroundColor: theme("colors.green.dark"),
          color: theme("colors.green.light"),
        },

        code: {
          backgroundColor: theme("colors.green.light"),
          padding: "4px 10px",
          color: theme("colors.gray.700"),
          borderRadius: theme("borderRadius.DEFAULT"),

          "&::before, &::after": {
            content: '"" !important',
          },
        },

        table: {
          thead: {
            th: {
              paddingTop: theme("padding.3"),
              paddingLeft: theme("padding.4"),
              paddingBottom: theme("padding.3"),
              paddingRight: theme("padding.4"),
              textAlign: "center",
              verticalAlign: "middle",
              color: theme("colors.white"),
              backgroundColor: theme("colors.gray.DEFAULT"),

              "&:first-child": {
                paddingLeft: theme("padding.4"),
              },

              "&:last-child": {
                paddingRight: theme("padding.4"),
              },
            },
          },

          tbody: {
            tr: {
              "&:nth-child(even)": {
                backgroundColor: theme("colors.green.light"),
              },
            },

            td: {
              padding: theme("padding.4"),
              fontSize: theme("fontSize.sm[0]"),
              verticalAlign: "middle",

              "&:first-child": {
                paddingLeft: theme("padding.4"),
              },

              "&:last-child": {
                paddingRight: theme("padding.4"),
              },
            },
          },
        },
      },
    },
    lg: {
      css: {
        img: null,

        h1: {
          fontSize: theme("fontSize.3xl[0]"),
          lineHeight: theme("fontSize.3xl[1]"),

          "@screen lg": {
            fontSize: theme("fontSize.4xl[0]"),
            lineHeight: theme("fontSize.4xl[1]"),
          },
        },

        h2: {
          marginBottom: theme("margin.5"),
        },
      },
    },
  }),
}

module.exports = typographyContent

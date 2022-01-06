const { flex } = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

const slickCarousel = plugin(function ({ addComponents, theme }) {
  const styles = {
    ".slick-track": {
      display: "flex !important",
    },

    ".slick-slide": {
      height: "inherit !important",

      "> div": {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      },
    },

    ".slick-dots": {
      position: "relative",
      bottom: "0 !important",
      zIndex: 99,

      li: {
        height: "12px !important",
        width: "12px !important",
        margin: "0 10px !important",

        button: {
          borderRadius: "50%",
          height: "12px !important",
          width: "12px !important",
        },

        "button::before": {
          backgroundColor: theme("colors.gray.DEFAULT"),
          content: "'' !important",
          borderRadius: "50%",
          height: "12px !important",
          width: "12px !important",
        },

        "&.slick-active button::before": {
          backgroundColor: theme("colors.coral.DEFAULT"),
          opacity: "1",
        },
      },
    },
  }

  addComponents(styles)
})

module.exports = slickCarousel

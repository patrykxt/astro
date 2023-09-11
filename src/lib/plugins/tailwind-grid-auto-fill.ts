import plugin from "tailwindcss/plugin"

const gridAutoFill = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities(
      {
        "grid-auto-fill": value => ({
          gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
        }),
      },
      { values: theme("gridAutoFill") },
    )
  },
  {
    theme: {
      gridAutoFill: {
        DEFAULT: "16rem",
        xs: "12rem",
        sm: "14rem",
        md: "16rem",
        lg: "18rem",
        xl: "20rem",
      },
    },
  },
)

export default gridAutoFill

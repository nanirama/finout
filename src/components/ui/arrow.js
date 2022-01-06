import * as React from "react"
import classNames from "classnames"

const Arrow = ({ className }) => {
  const classes = classNames({
    "arrow transition-all duration-150": true,
    [className]: className,
  })

  return (
    <span className={classes}>
      <span className="arrow__head"></span>
    </span>
  )
}

export default Arrow

import * as React from "react"
import classNames from "classnames"

const Section = ({ offset, className, children }) => {
  const classes = classNames({
    "relative -top-12": offset,
    [className]: className,
  })

  return <section className={classes}>{children}</section>
}

Section.defaultProps = {
  offset: false,
}

export default Section

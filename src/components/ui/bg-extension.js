import * as React from "react"
import classNames from "classnames"
import * as COLORS from "../../shared/colors"
import * as SIZES from "../../shared/sizes"
import * as POSITIONS from "../../shared/positions"

const BgExtension = ({ color, position, size, className }) => {
  const classes = classNames({
    "absolute z-1 left-0 w-full": true,
    "top-0": position === POSITIONS.top,
    "bottom-0": position === POSITIONS.bottom,
    "bg-green-light": color === COLORS.greenLight,
    "bg-green": color === COLORS.green,
    "bg-white": color === COLORS.white,
    "h-24": size === SIZES.DEFAULT,
    "h-52": size === SIZES.lg,
    [className]: className,
  })

  return <div className={classes}></div>
}

BgExtension.defaultProps = {
  postion: POSITIONS.top,
  color: COLORS.greenLight,
  size: SIZES.DEFAULT,
}

export default BgExtension

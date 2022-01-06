import * as React from "react"
import classNames from "classnames"
import * as COLORS from "../../shared/colors"

const Decor = ({ color, className, animated }) => {
  const wrapperClass = classNames({
    "absolute -top-8 left-1/2 transform -translate-x-1/2": true,
    [className]: className,
  })

  const colorClass = classNames({
    "relative w-8 h-8 transition-top duration-300": true,
    "lg:top-8 transition-top duration-300 group-hover:top-0": animated,
    "bg-green": color === COLORS.green,
    "bg-green-light": color === COLORS.greenLight,
  })

  return (
    <div className={wrapperClass}>
      <div className={colorClass}></div>
      <div className="w-8 h-8 bg-white"></div>
    </div>
  )
}

Decor.defaultProps = {
  color: COLORS.greenLight,
}

export default Decor

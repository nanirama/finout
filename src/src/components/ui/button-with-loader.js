import * as React from "react"
import classNames from "classnames"

import AnimatedLoader from "../../svg/animated-loader.svg"

const buttonWithLoader = ({ label, isLoading, className }) => {
  const classes = classNames({
    "button-with-loader relative btn btn-coral mt-2 w-full text-xl md:w-auto md:text-lg": true,
    loading: isLoading,
    [className]: className,
  })

  const iconClasses = classNames({
    "hidden absolute inset-x-0 inset-y-0 m-auto w-6 h-auto text-white": true,
    "!block": isLoading,
  })

  const spanClasses = classNames({
    "!invisible": isLoading,
  })

  return (
    <button type="submit" className={classes}>
      {isLoading && <AnimatedLoader className={iconClasses} />}
      <span className={spanClasses}>{label}</span>
    </button>
  )
}

export default buttonWithLoader

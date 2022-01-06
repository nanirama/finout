import * as React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import { linkRegex } from "../../helpers"
import * as COLORS from "../../shared/colors"
import * as SIZES from "../../shared/sizes"

const Button = ({ to, color, size, title, className, children }) => {
  const regex = linkRegex()
  const btnClasses = classNames({
    btn: true,
    "btn-coral": color === COLORS.coral,
    "btn-green": color === COLORS.green,
    "btn-outlined-green-dark": color === COLORS.outlinedGreenDark,
    "btn-sm": size === SIZES.sm,
    "btn-xs": size === SIZES.xs,
    [className]: className,
  })

  return (
    <React.Fragment>
      {regex.test(to) && (
        <a href={`${to}/`} className={btnClasses}>
          {title && title}
          {!title && children}
        </a>
      )}

      {!regex.test(to) && (
        <Link to={`${to}/`} className={btnClasses}>
          {title && title}
          {!title && children}
        </Link>
      )}
    </React.Fragment>
  )
}

Button.defaultProps = {
  color: COLORS.coral,
}

export default Button

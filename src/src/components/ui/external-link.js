import * as React from "react"
import classNames from "classnames"
import ExternalLinkIcon from "../../svg/external-link.svg"
import * as COLORS from "../../shared/colors"
import * as SIZES from "../../shared/sizes"

const ExternalLink = ({
  to,
  title,
  icon,
  target,
  className,
  attrs,
  size,
  color,
  full,
}) => {
  const titleClass = classNames({
    "ml-2 font-bold align-middle": true,
    "w-auto h-2": size === SIZES.sm,
    "sm:text-lg": size !== SIZES.sm,
  })

  const linkIconClass = classNames({
    "inline-block -mt-1 ml-2": true,
    "w-auto h-3": size === SIZES.sm,
  })

  const linkClass = classNames({
    "text-coral": color === COLORS.coral,
    [className]: className,
  })

  return (
    <React.Fragment>
      {to && (
        <a
          href={to}
          target={target}
          rel="noopener noreferrer"
          className={linkClass}
          {...attrs}>
          {icon && (
            <React.Fragment>
              {icon}
              {full && (
                <span className={titleClass}>
                  {title}
                  <ExternalLinkIcon className={linkIconClass} />
                </span>
              )}
            </React.Fragment>
          )}

          {!icon && (
            <React.Fragment>
              {title} <ExternalLinkIcon className={linkIconClass} />
            </React.Fragment>
          )}
        </a>
      )}
    </React.Fragment>
  )
}

ExternalLink.defaultProps = {
  full: true,
  target: "_self",
}

export default ExternalLink

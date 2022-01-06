import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { linkRegex, hasHash, hasMailTo } from "../../helpers"

const FooterLinkItem = ({ to, title, className, children }) => {
  const regex = linkRegex()
  const classes = classNames({
    "my-2 inline-block text-sm text-green-light/80 cursor-pointer lg:mt-0 lg:mb-2 hover:text-coral/100": true,
    [className]: className,
  })

  return (
    <React.Fragment>
      {hasMailTo(to) && (
        <a href={to} className={classes}>
          {title}
        </a>
      )}

      {hasHash(to) && (
        <AnchorLink to={to} className={classes}>
          {title && title}
          {!title && children}
        </AnchorLink>
      )}

      {regex.test(to) && !hasHash(to) && !hasMailTo(to) && (
        <a href={to} className={classes}>
          {title && title}
          {!title && children}
        </a>
      )}

      {!regex.test(to) && !hasHash(to) && !hasMailTo(to) && (
        <Link to={to} className={classes}>
          {title && title}
          {!title && children}
        </Link>
      )}
    </React.Fragment>
  )
}

export default FooterLinkItem

import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { linkRegex, hasHash, hasMailTo } from "../../helpers"

const NavItem = ({ title, url, children, isSticky }) => {
  const regex = linkRegex()

  const linkClass = classNames({
    "font-bold uppercase text-xl lg:text-sm lg:py-3 lg:px-1": true,
    "lg:text-white text-green-dark hover:text-coral": true,
  })

  const itemClass = classNames({
    "group py-3 text-center lg:py-0 lg:text-left": true,
  })

  return (
    <li className={itemClass}>
      {hasMailTo(url) && (
        <a href={url} className={isSticky ? "text-green-dark" :
        "font-bold uppercase text-xl lg:text-sm lg:py-3 lg:px-1 lg:text-white text-green-dark hover:text-coral"}>
          {title}
        </a>
      )}

      {hasHash(url) && (
        <AnchorLink to={url} className={linkClass}>
          {title && title}
          {!title && children}
        </AnchorLink>
      )}

      {regex.test(url) && !hasHash(url) && !hasMailTo(url) && (
        <a href={url} className={linkClass}>
          {title}
        </a>
      )}

      {!regex.test(url) && !hasHash(url) && !hasMailTo(url) && (
        <Link to={url} className={linkClass} activeClassName="!text-coral">
          {title}
        </Link>
      )}
    </li>
  )
}

export default NavItem

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

// Components
import ExternalLink from "./external-link"
import Facebook from "../../svg/facebook.svg"
import Twitter from "../../svg/twitter.svg"
import LinkedIn from "../../svg/linkedin.svg"

const Social = ({ color, size, full, className }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              facebook
              linkedin
            }
          }
        }
      }
    `
  )

  const wrapperClass = classNames({
    "flex flex-wrap space-x-5 lg:space-x-3": true,
    [className]: className,
  })

  const iconClass = classNames({
    "inline-block w-auto h-8 transition-all duration-100": true,
  })

  return (
    <div className={wrapperClass}>
      <div>
        <ExternalLink
          to={site.siteMetadata?.social?.twitter}
          size={size}
          color={color}
          full={full}
          title="Twitter"
          attrs={{ "aria-label": "twitter", title: "Join our Twitter page" }}
          icon={<Twitter className={iconClass} />}
        />
      </div>

      <div>
        <ExternalLink
          to={site.siteMetadata?.social?.linkedin}
          size={size}
          color={color}
          full={full}
          title="LinkedIn"
          attrs={{ "aria-label": "linkedin", title: "Join our LinkedIn page" }}
          icon={<LinkedIn className={iconClass} />}
        />
      </div>

      <div>
        <ExternalLink
          to={site.siteMetadata?.social?.facebook}
          size={size}
          color={color}
          full={full}
          title="Facebook"
          attrs={{ "aria-label": "facebook", title: "Join on Facebook Page" }}
          icon={<Facebook className={iconClass} />}
        />
      </div>
    </div>
  )
}

Social.defaultProps = {
  full: false,
}

export default Social

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import FacebookIcon from "../../svg/facebook.svg"
import TwitterIcon from "../../svg/twitter.svg"
import LinkedinIcon from "../../svg/linkedin.svg"
import EmailIcon from "../../svg/email.svg"
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"

const Share = ({ url, title, description, className }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const wrapperClass = classNames({
    "space-x-7 lg:space-x-4": true,
    [className]: className,
  })

  const iconClass = classNames({
    "w-auto h-9 transition duration-150 hover:text-coral": true,
  })

  return (
    <div className={wrapperClass}>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon className={iconClass} />
      </TwitterShareButton>

      <LinkedinShareButton
        url={url}
        title={title}
        summary={description}
        source={site.siteMetadata.title}>
        <LinkedinIcon className={iconClass} />
      </LinkedinShareButton>

      <FacebookShareButton url={url} quote={description}>
        <FacebookIcon className={iconClass} />
      </FacebookShareButton>

      <EmailShareButton url={url} subject={title} body={description}>
        <EmailIcon className={iconClass} />
      </EmailShareButton>
    </div>
  )
}

export default Share

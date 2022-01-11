import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import classNames from "classnames"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as COLORS from "../shared/colors"
import * as SIZES from "../shared/sizes"

// Components
import FooterLinkItem from "./ui/footer-link-item"
import * as Grid from "./ui/grid"
import Title from "./ui/title"
import Social from "./ui/social"
import Logo from "../svg/logo.svg"

const Footer = ({ className }) => {
  const date = new Date()
  const { site, data, terms, privacy } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              title
              url
            }
            footerMenuLinks {
              title
              url
            }
          }
        }
        data: contentfulSettings {
          about {
            about
          }
          address {
            raw
          }
        }
        terms: contentfulPage(slug: { eq: "terms-of-use" }) {
          slug
          title
        }
        privacy: contentfulPage(slug: { eq: "privacy-policy" }) {
          slug
          title
        }
      }
    `
  )

  const footerClasses = classNames({
    "relative z-10 pt-10 bg-green-dark": true,
    [className]: className,
  })

  const footerLinks = site?.siteMetadata?.footerMenuLinks || []
  const about = data?.about?.about || ""
  const address = data?.address || ""

  return (
    <footer className={footerClasses}>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col size="w-2/5 lg:w-1/4 xl:w-2/5">
            <Grid.Inner className="w-full h-full pb-8 text-green-light lg:pb-0 lg:pr-14 xl:pr-16">
              <Link to="/" className="inline-block">
                <span className="sr-only">
                  <Title />
                </span>

                <Logo className="h-7 w-auto text-white" />
              </Link>

              {about && (
                <p className="hidden mt-6 text-sm leading-normal text-green-light/70 lg:block">
                  {about}
                </p>
              )}
            </Grid.Inner>
          </Grid.Col>

          <Grid.Col size="w-full lg:w-1/4 xl:w-1/5" className="hidden lg:block">
            <Grid.Inner className="w-full h-full py-8 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-green-light/10 lg:py-0 lg:px-14 xl:px-16">
              <ul className="text-center lg:text-left">
                {footerLinks.map(item => (
                  <li key={item.title}>
                    <FooterLinkItem to={item.url} title={item.title} />
                  </li>
                ))}
              </ul>
            </Grid.Inner>
          </Grid.Col>

          <Grid.Col size="w-full lg:w-1/4 xl:w-1/5" className="hidden lg:block">
            <Grid.Inner className="w-full h-full pt-8 text-green-light text-center lg:text-left lg:border-r border-green-light/10 lg:pt-0 lg:px-14 xl:px-16">
              {address && (
                <address className="text-sm text-green-light/70 leading-loose not-italic">
                  {renderRichText(address)}
                </address>
              )}
            </Grid.Inner>
          </Grid.Col>

          <Grid.Col size="w-3/5 lg:w-1/4 xl:w-1/5">
<h5 className="text-white mb-0">subscribe to out newsletter</h5>
          <form action="#" className="newsform mb-4 mt-1">
                    <div className="flex items-center bg-white shadow-inner rounded-md">
                        <input type="email" placeholder="Enter your email" className="w-full px-2 py-4 mr-2 border-0 focus:outline-none" required/>
                        <button className="bg-coral text-gray-200 px-5 py-3 rounded shadow -ml-10">Send</button>
                    </div>
                </form>
            <Grid.Inner className="w-full text-white">

              <Social
                size={SIZES.sm}
                color={COLORS.white}
                className="justify-end lg:justify-start"
              />


            </Grid.Inner>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <div className="py-10 bg-green-dark">
        <Grid.Container>
          <div className="flex flex-wrap">
            <small className="w-full text-green-light/70 text-center md:space-x-6 lg:w-auto lg:text-left lg:mr-0">
              <span>
                &copy; <Title /> {date.getFullYear()}. All Rights Reserved.
              </span>

              <div className="mt-4 space-x-6 md:inline-block md:mt-0">
                <Link
                  to={`/${privacy?.slug}/`}
                  className="text-green-light/70 hover:text-coral/100">
                  {privacy?.title}
                </Link>

                <Link
                  to={`/${terms?.slug}/`}
                  className="text-green-light/70 hover:text-coral/100">
                  {terms?.title}
                </Link>
              </div>
            </small>
          </div>
        </Grid.Container>
      </div>
    </footer>
  )
}

export default Footer

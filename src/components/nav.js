import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

// Components
import NavItem from "./ui/nav-item"
import Button from "./ui/button"

const Nav = ({ isOpen, isSticky, path }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            login
            signup
            menuLinks {
              title
              url
            }
          }
        }
      }
    `
  )
  let navClass = ''
    navClass = classNames({
      "absolute z-998 -right-full top-0 flex justify-between w-full h-screen pt-14 pb-16 bg-white overflow-y-scroll transition-right duration-300 in-expo shadow-xl": true,
      "lg:flex-1 lg:items-center lg:ml-16 2xl:ml-20 lg:flex lg:relative lg:right-auto lg:top-auto lg:w-auto lg:h-auto lg:pt-0 lg:pb-0 lg:bg-none lg:bg-transparent lg:overflow-y-visible lg:shadow-none": true,
      "!right-0": isOpen,
    })

  return (
    <nav className={navClass}>
      <ul className="px-4 text-lg mt-6 space-y-4 lg:flex lg:h-auto lg:mt-0 lg:space-x-9 lg:space-y-0 lg:text-base">
        {site.siteMetadata.menuLinks.map((link, index) => (
          <NavItem key={index} title={link?.title} url={link?.url} />
        ))}
      </ul>
      <div className="text-center">
      <div className="flex lg:flex-row flex-col bottom-12 inline-flex mt-6 ml-auto text-center px-4 space-y-4 lg:static lg:w-auto lg:mt-0 lg:ml-5 lg:px-0 lg:space-y-0 lg:space-x-4">
        <Button
          to={site?.siteMetadata?.login}
          className={isSticky ? "btn login btn btn-coral btn-lg text-lg lg:btn-outlined-green-dark lg:text-white lg:btn-sm border-0" : "login btn btn-coral btn-lg text-lg lg:btn-outlined-green-dark lg:text-white lg:btn-sm border-0"}>
          Log in
        </Button>
        <Button
          to="https://go.finout.io/start-now"
          className={isSticky ? "btn btn-coral btn-lg text-lg lg:btn-outlined-green-dark lg:bg-white lg:text-green lg:btn-sm border-2" : "btn btn-coral btn-lg text-lg lg:btn-outlined-green-dark lg:bg-white lg:text-green lg:btn-sm border-2"}>
          Get Started
        </Button>
      </div>
      </div>
      {/* <div className="fixed bottom-12 w-full mt-6 ml-auto text-center px-4 space-y-4 lg:static lg:w-auto lg:mt-0 lg:px-0 lg:space-y-0 lg:space-x-4">
        <Button
          to={site?.siteMetadata?.login}
          className="btn-coral btn-lg text-sm lg:btn-outlined-green-dark lg:btn-sm">
          Log in
        </Button>
      </div> */}
    </nav>
  )
}

export default Nav
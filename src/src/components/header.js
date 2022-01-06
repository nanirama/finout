import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

// Components
import Nav from "./nav"
import Title from "./ui/title"
import NavToggler from "./ui/nav-toggler"
import PostProgress from "./ui/post-progress"
import Logo from "../svg/logo.svg"
import LogoWhite from "../svg/logo-white.svg"

const Header = ({ postTitle, isSticky }) => {
  const [isNavOpen, setisNavOpen] = React.useState(false)

  const headerClass = classNames({
    "absolute top-0 left-0 z-50 w-full": true,
  })

  return (
    <header
    className={isSticky ? "fixed left-0 z-50 w-full animate-fadeIn" : "absolute top-0 left-0 z-50 w-full trasition ease-in-out duration-500"}
  >
     <div className={isSticky ? "bg-white py-2 lg:py-4 shadow transition animate-fade-in-down" : "relative z-999 py-2 bg-trasparent lg:py-4" }>
       <div className="container flex items-center">
         <Link to="/">
          <span className="sr-only">
              <Title />
            </span>
          {
            isSticky ? <Logo className="w-auto" /> : <LogoWhite className="w-auto" />
          }
         </Link>

         <Nav isOpen={isNavOpen}   />

         <NavToggler
           onClick={() => setisNavOpen(!isNavOpen)}
           isOpen={isNavOpen}
          />
        </div>
      </div>
      {postTitle && <PostProgress title={postTitle} />}
    </header>


    // <header className={headerClass}>
    //   <div className="relative z-999 py-2 bg-white shadow-2xl lg:py-4">
    //     <div className="container flex items-center">
    //       <Link to="/">
    //         <span className="sr-only">
    //           <Title />
    //         </span>

    //         <Logo className="w-auto h-8" />
    //       </Link>

    //       <Nav isOpen={isNavOpen} />

    //       <NavToggler
    //         onClick={() => setisNavOpen(!isNavOpen)}
    //         isOpen={isNavOpen}
    //       />
    //     </div>
    //   </div>
    //   {postTitle && <PostProgress title={postTitle} />}
    // </header>
  )
}

export default Header

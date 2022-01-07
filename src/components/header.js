import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

// Components
import Nav from "./nav"
import Title from "./ui/title"
import NavToggler from "./ui/nav-toggler"
import PostProgress from "./ui/post-progress"
import Logo from "../svg/logo.svg"

const Header = ({ postTitle }) => {
  const [isNavOpen, setisNavOpen] = React.useState(false)

  const headerClass = classNames({
    "fixed top-0 left-0 z-50 w-full": true,
  })

  return (
    <header className={headerClass}>
      <div className="relative z-999 py-2 bg-white shadow-2xl lg:py-4">
        <div className="container flex items-center">
          <Link to="/">
            <span className="sr-only">
              <Title />
            </span>

            <Logo className="w-auto h-8" />
          </Link>

          <Nav isOpen={isNavOpen} />

          <NavToggler
            onClick={() => setisNavOpen(!isNavOpen)}
            isOpen={isNavOpen}
          />
        </div>
      </div>

      {postTitle && <PostProgress title={postTitle} />}
    </header>
  )
}

export default Header

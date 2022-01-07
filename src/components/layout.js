import * as React from "react"
import classNames from "classnames"
import { isIE } from "react-device-detect"

// Components
import Header from "./header"
import Footer from "./footer"
import SkipToContent from "./ui/skip-to-content"
import BrowserSupport from "./browser-support"

const Layout = ({
  location,
  title,
  hero,
  hideHeader,
  hideFooter,
  beforeFooter,
  children,
  className,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const wrapperClasses = classNames({
    wrapper: !hideHeader,
    [className]: className,
  })

  return (
    <div className={wrapperClasses} data-is-root-path={isRootPath}>
      <SkipToContent />

      {isIE && <BrowserSupport />}

      {!hideHeader && <Header postTitle={title} />}

      <main id="main">
        {hero}
        {children}
      </main>

      {!hideFooter &&
        (beforeFooter ? (
          <React.Fragment>
            {beforeFooter}
            <Footer classNames={beforeFooter ? "" : "pt-40"} />
          </React.Fragment>
        ) : (
          <Footer classNames={beforeFooter ? "" : "pt-40"} />
        ))}
    </div>
  )
}

export default Layout

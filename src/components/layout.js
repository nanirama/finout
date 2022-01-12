import React, { useEffect, useRef, useState } from "react"
import classNames from "classnames"
import { isIE } from "react-device-detect"
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

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
  const path = location.pathname
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  const wrapperClasses = classNames({
    wrapper: !hideHeader,
    [className]: className,
  })
  const [isOpen, setOpen] = React.useState(false);
  const [isSticky, setSticky] = useState(false);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  const ref = useRef(null);
  
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', () => handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   console.log('Sccroll top',ref.current.getBoundingClientRect().top)
  //   if (ref.current) {
  //     if(ref.current.getBoundingClientRect().top>=0)
  //     {
  //         setSticky(false) 
  //     }
  //     else
  //     {
  //        setSticky(ref.current.getBoundingClientRect().top <= -700);
  //     }      
  //   }
  // };
  useEffect(
    () => {
      // do some stuff
    },
    [isSticky, showScrolling, showReveal],
  )
  useScrollPosition(({ prevPos, currPos }) => {
    // if (currPos.y < 0) {
    //   setShowScrolling(true);
      
    // } else {
    //   setShowScrolling(false);
    // }
    if (currPos.y < -700) {
      setShowReveal(true);
      setSticky(true);
    } else {
      setShowReveal(false);
      setSticky(false) 
    }
  });
  return (
    <div className={path==='/' && !isSticky ? "wrapper lg:pt-0 pt-0" : "wrapper" } data-is-root-path={isRootPath}>
      <SkipToContent />

      {isIE && <BrowserSupport />}

      {!hideHeader && <Header postTitle={title} isSticky={isSticky} location={location} />}

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

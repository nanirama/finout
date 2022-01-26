import * as React from "react"
import { Link } from "gatsby"
import {isDesktop, isMobile} from 'react-device-detect';
import classNames from "classnames"

// Components
import Nav from "./nav"
import Title from "./ui/title"
import NavToggler from "./ui/nav-toggler"
import PostProgress from "./ui/post-progress"
import Logo1 from "../svg/logo1.svg"
import LogoWhite from "../svg/logo-white.svg"

const Header = ({ postTitle, isSticky,location }) => {
  const path = location.pathname
  const [isNavOpen, setisNavOpen] = React.useState(false)

  let headerClass = 'fixed top-0 left-0 z-50 w-full'
  let headerClassContainer = 'relative z-999 py-2 bg-white shadow-2xl lg:py-4'
  if(path==='/'){
    if(isSticky)
    {
      headerClass = 'fixed top-0 left-0 z-50 w-full'
      headerClassContainer = 'bg-white py-2 lg:py-4 shadow transition animate-fadeIn h-inner'
    }
    else
    {
      headerClass = 'absolute top-0 left-0 z-50 w-full'
      headerClassContainer = 'relative z-999 py-2 bg-trasparent lg:py-4 h-inner'
    }
    
  }
  const SiteLogo = ()=>{
    if(path==='/' && !isSticky){
      return(
        <>
        <Logo1 className="w-auto hidden sm:block lg:hidden" />  
        <LogoWhite className="hidden lg:block sm:hidden" />        
        </>
      )
      
    }
    else
    {
      return <Logo1 className="w-auto" />  
    }
  }

  return (
    <header className={headerClass}>
     <div className={headerClassContainer}>
       <div className="container flex items-center">
         <Link to="/">
          <span className="sr-only">
              <Title />
            </span>
            <SiteLogo />          
         </Link>

         <Nav isOpen={isNavOpen} isSticky={isSticky} path={path} />

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

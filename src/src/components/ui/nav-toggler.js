import * as React from "react"
import { Cross as Hamburger } from "hamburger-react"
import * as SIZES from "../../shared/sizes"

const NavToggler = ({ isOpen, onClick }) => {
  return (
    <Hamburger
      toggled={isOpen}
      toggle={onClick}
      color="#0e231a"
      label={`${isOpen ? "Close navigation" : "Open navigation"}`}
      distance={SIZES.sm}
      className="appearance-none relative z-999 ml-auto lg:hidden"
    />
  )
}

export default NavToggler

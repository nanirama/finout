import * as React from "react"

// Assets
import Decor from "../../svg/decor.svg"

const TextDecor = ({ children }) => {
  return (
    <span className="relative">
      {children}
      <Decor className="absolute -bottom-2 left-0 h-auto w-[105%]" />
    </span>
  )
}

export default TextDecor

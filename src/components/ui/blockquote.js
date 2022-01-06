import * as React from "react"
import classNames from "classnames"

// Assets
import Quotes from "../../svg/quotes.svg"

const Blockquote = ({ name, cite, quote, className }) => {
  const wrapperClass = classNames({
    "w-full px-8 md:px-32": true,
    [className]: className,
  })

  return (
    <div className={wrapperClass}>
      <Quotes className="mx-auto mb-6 w-auto h-8 md:h-6" />
      <blockquote className="relative z-10 font-bold text-3xl text-center">
        {quote}
        <footer className="mt-5 font-bold text-sm text-gray-500">
          {name && !cite && <React.Fragment>{name}</React.Fragment>}
          {name && cite && (
            <React.Fragment>
              {name}, <cite className="not-italic">{cite}</cite>
            </React.Fragment>
          )}
        </footer>
      </blockquote>
    </div>
  )
}

export default Blockquote

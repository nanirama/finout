import * as React from "react"
import classNames from "classnames"

const Meta = ({ author, date, className }) => {
  const wrapperClass = classNames({
    "font-display font-bold text-sm": true,
    [className]: className,
  })

  return (
    <div className={wrapperClass}>
      <div className="flex flex-wrap items-center leading-tight">
        <div className="pr-2.5 mr-2.5 border-r-2 border-green-dark">
          By {author?.name}
        </div>
        <time>{date}</time>
      </div>
    </div>
  )
}

export default Meta

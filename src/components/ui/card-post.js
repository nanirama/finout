import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import classNames from "classnames"

// Components
import Arrow from "./arrow"

const CardPost = ({ title, img, to, date, className }) => {
  const linkClass = classNames({
    "group flex flex-wrap col-start-1 col-end-4 bg-white text-left shadow-xl rounded-xl overflow-hidden transform transition duration-300 ease-out md:flex-col md:col-start-auto md:col-end-auto md:grid-cols-full md:col-start-auto md:col-end-auto": true,
    [className]: className,
  })

  return (
    <Link to={to} className={linkClass}>
      <div className="w-full">
        <GatsbyImage
          image={img}
          alt={title}
          className="overflow-hidden rounded-t-xl safari-overflow-fix aspect-w-16 aspect-h-11"
        />
      </div>

      <div className="flex flex-col p-6 lg:flex-1 w-full md:px-10 md:py-8">
        {date && (
          <time className="font-medium text-xs text-gray mb-2.5 uppercase">
            {date}
          </time>
        )}

        <h2 className="font-display text-2xl text-green-dark transition group-hover:text-black">
          {title}
        </h2>

        <div className="mt-auto">
          <span className="flex items-center mt-4 font-bold text-coral text-sm uppercase">
            <span>Read more</span>
            <Arrow className="ml-2  group-hover:w-10" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default CardPost

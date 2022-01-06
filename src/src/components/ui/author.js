import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import classNames from "classnames"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="mt-2 text-sm text-gray">{children}</p>
    },
  },
}

const Author = ({ author, date, className }) => {
  const wrapperClass = classNames({
    "pt-12 mt-12 border-t border-green-light": true,
    [className]: className,
  })

  return (
    <div className={wrapperClass}>
      <div className="flex flex-wrap">
        <div className="mr-7 w-18">
          <div className="relative w-18">
            <GatsbyImage
              image={author?.photo?.gatsbyImageData}
              alt={author?.name}
              className="aspect-w-1 aspect-h-1 rounded-full safari-overflow-fix"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="max-w-md">
            <span className="font-bold">{author?.name}</span>
            {renderRichText(author?.bio, options)}
          </div>

          {date && <time>{date}</time>}
        </div>
      </div>
    </div>
  )
}

Author.defaultProps = {
  date: false,
}

export default Author

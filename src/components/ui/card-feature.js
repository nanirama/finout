import * as React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <p className="mt-4 pt-6 font-medium text-gray border-t border-green-light">
          {children}
        </p>
      )
    },
  },
}

const CardFeature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-full h-full p-12 text-center bg-white rounded-xl shadow-xl lg:p-11 xl:p-12">
      <img
        src={icon}
        alt={title}
        className="my-8 mx-auto"
        width="94"
        height="94"
      />

      <h3 className="mb-6 text-2xl xl:text-3xl">{title}</h3>

      {description && renderRichText(description, options)}
    </div>
  )
}

export default CardFeature

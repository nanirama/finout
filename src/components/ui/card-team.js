import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="mt-4">{children}</p>
    },
  },
}

const TeamItem = ({ img, name, title, description }) => {
  return (
    <div className="px-12 pt-8 pb-12 bg-white rounded-xl shadow-xl">
      <GatsbyImage image={img} alt={name} className="mb-8 mx-auto" />
      <div className="font-bold leading-none text-lg">{name}</div>
      <div className="font-medium text-lg">{title}</div>
      {description && (
        <div className="mt-6 text-sm text-gray">
          {renderRichText(description, options)}
        </div>
      )}
    </div>
  )
}

export default TeamItem

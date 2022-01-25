import * as React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"



const RichTextContent = ({ description, classes }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <p className={classes}>
            {children}
          </p>
        )
      },
    },
  }
  return (
    <>
    {description && renderRichText(description, options)}
    </>    
  )
}

export default RichTextContent

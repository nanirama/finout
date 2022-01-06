import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import * as SIZES from "../../shared/sizes"

// Components
import Social from "./social"
import Button from "./button"

const Location = ({ address, image }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <div className="relative px-4 max-w-xs mx-auto lg:max-w-none lg:px-0 lg:h-full">
          <GatsbyImage
            image={image?.gatsbyImageData}
            alt={image?.title}
            className="aspect-w-1 aspect-h-1 rounded-full safari-overflow-fix lg:rounded-none lg:aspect-w-16 lg:aspect-h-9 lg:!h-full"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center lg:bg-green-light">
        <div className="py-8 px-4 w-full max-w-xs mx-auto text-center lg:p-24 lg:max-w-none lg:text-left">
          {address && <div>{renderRichText(address)}</div>}

          <Social
            size={SIZES.sm}
            className="my-8 justify-center lg:justify-start"
          />

          <Button to="/contact" title="Contact us" />
        </div>
      </div>
    </div>
  )
}

export default Location

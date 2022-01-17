import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Location from "./ui/location"

const Contact = () => {
  const { data } = useStaticQuery(
    graphql`
      query {
        data: contentfulSettings {
          addressImage {
            title
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 80
            )
          }
          address {
            raw
          }
        }
      }
    `
  )
  const address = data?.address || ""
  const image = data?.addressImage || ""
  return (
    <div id="contact" className="mt-8 pb-24 lg:mt-20 lg:pb-0">
      <Location address={address} image={image} />
    </div>
  )
}
export default Contact
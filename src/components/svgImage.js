import React from 'react'
import propTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
// Render inline SVG with fallback non-svg images
function SvgImage({ id, className }) {
    //console.log('ID', id)
    const { AllAssets } = useStaticQuery(
        graphql`
          query {
            AllAssets : allContentfulAsset {
                edges {
                  node {
                    id
                    svg {
                      content
                      originalContent
                      dataURI
                      absolutePath
                      relativePath
                    }
                    file {
                      contentType
                      url
                      fileName
                      details {
                        image {
                          width
                          height
                        }
                      }
                    }
                  }
                }
              }
          }
        `
      )
    //console.log('AllAssets',AllAssets)
    const SvgImg = AllAssets.edges.find(({node})=>{
        return node.id===id
    })
    const { svg, file } = SvgImg.node
    if (file.contentType === 'image/svg+xml' && svg) {
        if (svg && svg.content) {
        return <div className={className ? className : `w-full flex justify-items-stretch`} dangerouslySetInnerHTML={{ __html: svg.content }} />
        }
        return <img src={file.url} />
    }


}
export default SvgImage;
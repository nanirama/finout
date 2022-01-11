import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"
import AOS from 'aos';

const Integration = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
        delay: 50,
        once: true
    });
    AOS.refresh();
}, [])
const { Integration1, Integration2, Integration3, Integration4, Integration5, Integration6, Integration7, Integration8, Integration9, Integration10, Integration11 , Integration12, Integration13} = useStaticQuery(
  graphql`
    query {
      Integration1: file(relativePath: {eq: "int-icon1.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration2: file(relativePath: {eq: "int-icon2.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration3: file(relativePath: {eq: "int-icon3.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration4: file(relativePath: {eq: "int-icon4.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration5: file(relativePath: {eq: "int-icon5.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration6: file(relativePath: {eq: "int-icon6.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration7: file(relativePath: {eq: "int-icon7.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration8: file(relativePath: {eq: "int-icon8.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration9: file(relativePath: {eq: "int-icon9.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration10: file(relativePath: {eq: "int-icon10.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration11: file(relativePath: {eq: "int-icon11.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration12: file(relativePath: {eq: "int-icon12.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }
      Integration13: file(relativePath: {eq: "int-icon13.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, quality: 100)
        }
      }

    }
  `
)
    return (


      <Section className="group relative pt-24 pb-20 text-center">      
           <div class="container lg:max-w-3xl w-full mt-10">
      <div className="w-full"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
           <svg className="w-full" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8816 0C18.9209 0.624189 13.7798 3.52509 11.4663 8.10996C10.3253 10.3552 10.0186 13.3011 11.9804 15.223C13.5723 16.7857 16.3548 17.2977 17.9738 15.479C19.7552 13.4762 19.0246 10.5394 17.2432 8.81948C15.5288 7.26997 13.32 6.37302 11.0063 6.28679C6.6183 6.02185 2.1762 8.4692 0.597791 12.6409C-1.0663 17.0462 0.845828 22.6369 5.06695 24.8598C6.34771 25.5334 7.48867 23.5979 6.2034 22.9199C3.35324 21.4155 1.91463 18.0521 2.32953 14.9356C2.7805 11.6845 5.44576 9.33588 8.64317 8.68026C10.2427 8.35563 11.9019 8.48955 13.428 9.06645C14.8756 9.62777 16.6525 10.8627 16.7382 12.5511C16.7813 12.9097 16.7148 13.2729 16.5475 13.5934C16.3802 13.9138 16.1197 14.1766 15.8001 14.3474C15.58 14.4293 15.3437 14.4586 15.1101 14.4327C14.7815 14.3864 14.4647 14.2781 14.1766 14.1138C12.5576 13.2157 12.5351 11.2758 13.207 9.67268C14.0549 7.65642 15.7686 5.92755 17.5589 4.73306C19.4403 3.43397 21.6039 2.59685 23.8726 2.29019C24.1687 2.28118 24.4503 2.16001 24.6598 1.9514C24.8693 1.74278 24.991 1.46244 25 1.16755C24.9988 0.870171 24.8796 0.585307 24.6685 0.375027C24.4573 0.164747 24.1712 0.0460908 23.8726 0.0449084L23.8816 0Z" fill="#1B1F1D"/>
</svg>          
        <h2 className="font-bold mb-5 lg:mb-18 text-5xl">Integrations</h2>       
            <div className="flex justify-center">
            <Grid.Col size="lg:w-2/5">
              <div className="flex">
            <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
           
   <GatsbyImage image={getImage(Integration1)} />
  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <GatsbyImage image={getImage(Integration2)} />

  </div>
  </div>
  <div className="flex lg:-ml-16 -ml-10">
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <GatsbyImage image={getImage(Integration3)} />

  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <GatsbyImage image={getImage(Integration4)} />
  </div>
  </div>
  <div className="flex">
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <GatsbyImage image={getImage(Integration5)} />
  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <GatsbyImage image={getImage(Integration6)} />
  </div>
  </div>

            </Grid.Col>
            <Grid.Col size="lg:w-1/5 flex items-center">
            
            <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
            <GatsbyImage image={getImage(Integration7)} />
  </div>

            </Grid.Col>
            <Grid.Col size="lg:w-2/5 flex flex-col items-end">
              <div className="flex">
            <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
            <GatsbyImage image={getImage(Integration8)} />

  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <GatsbyImage image={getImage(Integration9)} />
  </div>
  </div>
  <div className="flex lg:-mr-16 -mr-10">
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <GatsbyImage image={getImage(Integration10)} />

  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <GatsbyImage image={getImage(Integration11)} />
  </div>
  </div>
  <div className="flex">
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <GatsbyImage image={getImage(Integration12)} />
  </div>
  <div className="shape scale-100 hover:scale-125 ease-in-out transition duration-500 flex justify-center items-center">
  <GatsbyImage image={getImage(Integration13)} />


  </div>
  </div>

            </Grid.Col>
         
            </div>
</div>
</div>

      </Section>


        )
    }
    
    export default Integration
    
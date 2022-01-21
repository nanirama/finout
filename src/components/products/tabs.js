import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Section from "../../components/ui/section"

const Tabs = ({ color }) => {
  
const { DashboardImg2 } = useStaticQuery(
  graphql`
    query {
      DashboardImg2: file(relativePath: {eq: "dashboard2.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  `
)
  const [openTab, setOpenTab] = React.useState(1);
  return (
    

 <Section className="pt-20 tabs_blk">    
     <div className="container max-w-4xl px-3">
     <div className="w-full">
<svg className="w-full" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8816 0C18.9209 0.624189 13.7798 3.52509 11.4663 8.10996C10.3253 10.3552 10.0186 13.3011 11.9804 15.223C13.5723 16.7857 16.3548 17.2977 17.9738 15.479C19.7552 13.4762 19.0246 10.5394 17.2432 8.81948C15.5288 7.26997 13.32 6.37302 11.0063 6.28679C6.6183 6.02185 2.1762 8.4692 0.597791 12.6409C-1.0663 17.0462 0.845828 22.6369 5.06695 24.8598C6.34771 25.5334 7.48867 23.5979 6.2034 22.9199C3.35324 21.4155 1.91463 18.0521 2.32953 14.9356C2.7805 11.6845 5.44576 9.33588 8.64317 8.68026C10.2427 8.35563 11.9019 8.48955 13.428 9.06645C14.8756 9.62777 16.6525 10.8627 16.7382 12.5511C16.7813 12.9097 16.7148 13.2729 16.5475 13.5934C16.3802 13.9138 16.1197 14.1766 15.8001 14.3474C15.58 14.4293 15.3437 14.4586 15.1101 14.4327C14.7815 14.3864 14.4647 14.2781 14.1766 14.1138C12.5576 13.2157 12.5351 11.2758 13.207 9.67268C14.0549 7.65642 15.7686 5.92755 17.5589 4.73306C19.4403 3.43397 21.6039 2.59685 23.8726 2.29019C24.1687 2.28118 24.4503 2.16001 24.6598 1.9514C24.8693 1.74278 24.991 1.46244 25 1.16755C24.9988 0.870171 24.8796 0.585307 24.6685 0.375027C24.4573 0.164747 24.1712 0.0460908 23.8726 0.0449084L23.8816 0Z" fill="#1B1F1D"/>
</svg>
   <h2 className="text-center font-bold mb-10 2xl:mb-14 text-40xl">How does it work?</h2>
      <div className="flex flex-wrap text-center">
        <div className="w-full">
          <ul
            className="max-w-xl mx-auto flex mb-7 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px flex-auto text-center">
              <a
                className={
                  "text-xl font-bold px-3 py-3 border-b-2 border-gray-200 hover:border-coral block leading-normal " +
                  (openTab === 1
                    ? "text-coral border-coral" 
                    : "text-gray-300")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Feature A
              </a>
            </li>
            <li className="-mb-px flex-auto text-center">
              <a
                className={
                  "text-xl font-bold px-3 py-3 border-b-2 border-gray-200 hover:border-coral block leading-normal " +
                  (openTab === 2
                    ? "text-coral border-coral" 
                    : "text-gray-300")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Feature B
              </a>
            </li>
            <li className="-mb-px flex-auto text-center">
              <a
                className={
                  "text-xl font-bold px-3 py-3 border-b-2 border-gray-200 hover:border-coral block leading-normal " +
                  (openTab === 3
                    ? "text-coral border-coral" 
                    : "text-gray-300")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Feature C
              </a>
            </li>
            <li className="-mb-px flex-auto text-center">
              <a
                className={
                  "text-xl font-bold px-3 py-3 border-b-2 border-gray-200 hover:border-coral block leading-normal " +
                  (openTab === 4
                    ? "text-coral border-coral" 
                    : "text-gray-300")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                 Feature D
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full">
            <div className="pt-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="mb-10 max-w-3xl mx-auto px-3 text-lg">
                  Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride  in the solutions we deliver
                  </p>
                  <div className="-mb-9 mt-16">
                  <GatsbyImage image={getImage(DashboardImg2)} />
                  </div>
                </div>
                <div className={openTab === 2 ? "block mb-10" : "hidden"} id="link2">
                <p className="mb-10 max-w-3xl mx-auto px-3 text-lg">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block mb-10" : "hidden"} id="link3">
                <p className="mb-10 max-w-3xl mx-auto px-3 text-lg">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
                <div className={openTab === 4 ? "block mb-10" : "hidden"} id="link4">
                <p className="mb-10 max-w-3xl mx-auto px-3 text-lg">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </Section>
  );
};

export default Tabs
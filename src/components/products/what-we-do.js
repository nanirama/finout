import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as Grid from "../../components/ui/grid"
import Section from "../../components/ui/section"


const WhatweDo = () => {
    return (


      <Section className="group relative pt-24 pb-10 text-center">        
      <Grid.Container xs className="text-center">
      <svg className="w-full" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.8816 0C18.9209 0.624189 13.7798 3.52509 11.4663 8.10996C10.3253 10.3552 10.0186 13.3011 11.9804 15.223C13.5723 16.7857 16.3548 17.2977 17.9738 15.479C19.7552 13.4762 19.0246 10.5394 17.2432 8.81948C15.5288 7.26997 13.32 6.37302 11.0063 6.28679C6.6183 6.02185 2.1762 8.4692 0.597791 12.6409C-1.0663 17.0462 0.845828 22.6369 5.06695 24.8598C6.34771 25.5334 7.48867 23.5979 6.2034 22.9199C3.35324 21.4155 1.91463 18.0521 2.32953 14.9356C2.7805 11.6845 5.44576 9.33588 8.64317 8.68026C10.2427 8.35563 11.9019 8.48955 13.428 9.06645C14.8756 9.62777 16.6525 10.8627 16.7382 12.5511C16.7813 12.9097 16.7148 13.2729 16.5475 13.5934C16.3802 13.9138 16.1197 14.1766 15.8001 14.3474C15.58 14.4293 15.3437 14.4586 15.1101 14.4327C14.7815 14.3864 14.4647 14.2781 14.1766 14.1138C12.5576 13.2157 12.5351 11.2758 13.207 9.67268C14.0549 7.65642 15.7686 5.92755 17.5589 4.73306C19.4403 3.43397 21.6039 2.59685 23.8726 2.29019C24.1687 2.28118 24.4503 2.16001 24.6598 1.9514C24.8693 1.74278 24.991 1.46244 25 1.16755C24.9988 0.870171 24.8796 0.585307 24.6685 0.375027C24.4573 0.164747 24.1712 0.0460908 23.8726 0.0449084L23.8816 0Z" fill="#1B1F1D"/>
</svg>
        
        <h2 className="font-medium mb-10 2xl:mb-14">What we do</h2>
        <div className="lg:w-3/4 m-auto">
            <StaticImage src="../assets/images/fac.png" alt="" />
            </div>
        <p>We Integrate with cloud providers, data warehouses and observability platforms to correlate and analyze cost into business KPIs , wrapped up as a modern-day ERP system.</p>
     

       
      </Grid.Container>
      </Section>


        )
    }
    
    export default WhatweDo
    
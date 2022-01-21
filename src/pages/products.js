import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import TopSection from "../components/products/top-section"
import WhatweDo from "../components/products/what-we-do"
import Clients from "../components/products/clients"
import Features from "../components/products/features"
import Finops from '../components/products/finops'
import Integration from "../components/products/integration"
import Monitoring from "../components/products/monitoring"
import Tabs from "../components/products/tabs"
import CtaWithPosts from "../components/cta-with-posts"

const Products = ({ location }) => {
  return (
    <Layout
      location={location}
      >
      <Seo
        title="Products page"
        description="Products desc"
         url={location.href}
      />

<TopSection/>
<WhatweDo/>
<Clients/>
<Features/>
<Integration/>
<Monitoring/>
<Finops/>
<Tabs/>
<CtaWithPosts/>

    </Layout>
  )
}

export default Products
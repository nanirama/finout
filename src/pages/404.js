import * as React from "react"

// Components
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container } from "../components/ui/grid"
import Button from "../components/ui/button"

// Assets
import thumbnail from "../images/thumbnail-finout.png"

const NotFoundPage = ({ location }) => {
  return (
    <Layout
      location={location}
      hideFooter
      className="min-h-screen bg-green-light">
      <Seo
        title="404"
        description="Page not found."
        url={location.href}
        image={thumbnail}
      />

      <Container className="pt-28 md:pt-32">
        <title>Not found</title>

        <h1 className="mb-6">
          Page <span className="text-green">not found</span>
        </h1>

        <p>Sorry, we couldn’t find what you were looking for.</p>

        <Button to="/" title="Go home" className="mt-6" />
      </Container>
    </Layout>
  )
}

export default NotFoundPage

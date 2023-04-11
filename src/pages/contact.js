import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Contact from "../components/Contact/Contact"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

import styled from "styled-components"

export const ContactPageStyles = styled.section`
  section {
    height: 35vh;
  }
`

const contact = () => {
  return (
    <ContactPageStyles>
      <Seo title="Contact" />
      <Layout>
        <SimpleBanner title="Lets get started">
          <h2>Receive a human response in less than 24 hours.</h2>
          <StaticImage
            className="banner__image"
            src="../../static/images/ai-contact-high-country-digital.png"
            alt="AI Image contact high country digital"
          />
        </SimpleBanner>
        <Contact />
      </Layout>
    </ContactPageStyles>
  )
}

export default contact

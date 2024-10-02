import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Contact from "../components/Contact/Contact"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import { Link } from "gatsby"
import Button from "../components/Button/Button"

import styled from "styled-components"

export const PageStyles = styled.section`
  section {
    height: 35vh;
  }
`

// Fix my performance issues

// Teach me how to fix

const contact = () => {
  return (
    <>
      <Seo title="Fix my slow website" />
      <Layout>
        {/* <SimpleBanner title="Boost your conversions now">
          <StaticImage
            className="banner__image"
            src="../../static/images/ai-contact-high-country-digital.png"
            alt="AI Image contact high country digital"
          />
        </SimpleBanner> */}
        <h1>So you need some help with your slow website?</h1>
        <h2>We're here to help</h2>

        <Button text={"Fix my slow website"} as={Link} to={"/"} />

        <Button text={"Teach me how to fix my website"} as={Link} to={"/"} />
      </Layout>
    </>
  )
}

export default contact

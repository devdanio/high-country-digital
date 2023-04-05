import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"
import ClientLogos from "../components/ClientLogos/ClientLogos"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Performance based conversion rate optimiztion"
          subTitle="You only pay when we deliver results"
        />
        <ClientLogos />
        <BasicTextModule
          title="Business minded developers that leave their tech jargon at home."
          content="High Country Digital is proud to have a team of expert engineers who not only possess decades of technical experience, but also have the people and business skills to match. We believe in delivering exceptional service, and our team's diverse skill set enables us to do just that."
          link="/products"
          linkText="Learn More"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Featured Products from Barcadia."
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        <LatestPosts
          title="The Latest from Barcadia"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
      </Layout>
    </>
  )
}

export default Index

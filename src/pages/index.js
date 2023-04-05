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
          title="Speed matters."
          content={
            <div>
              A site that loads in 1 second has an e-commerce conversion rate
              <br />
              <strong>250% higher</strong> than a site that loads in 5 seconds.
              <a
                href="https://www.portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm"
                rel="nofollow"
                target={"_blank"}
                className="external-link"
              >
                (source)
              </a>
            </div>
          }
          link="/what-is-my-website-load-speed"
          linkText="How fast is your site?"
        />
        <div>
          {/* "How much are you loosing" ? Link to see how much they're losing in
          reveneu -> Fill out the form -> we will then ask them if they want a
          free consultation */}
        </div>
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        {/* <BasicTextModule
          title="Not your typical agency."
          content="High Country Digital is proud to have a team of expert engineers who not only possess decades of technical experience, but also have the people and business skills to match. We believe in delivering exceptional service, and our team's diverse skill set enables us to do just that."
          link="/products"
          linkText="Learn More"
        /> */}
        {/* Website performance optimization is our specialty but we don't stop there.  Our talented team has decades of experience, and the people skills to match.  We know when to check our technical jargon at the door and put on our business hats, because at the end of the day all that matters is sales.  */}
        <Features
          title="Not your typical agency."
          // introduction="High Country Digital is proud to have a team of expert engineers who not only possess decades of technical experience, but also have the people and business skills to match. We believe in delivering exceptional service, and our team's diverse skill set enables us to do just that."
          introduction={
            "Website performance optimization is our specialty but we don't stop there.  Our talented team has decades of experience and the people skills to match.  We know when to check our technical jargon at the door and put on our business hats, because at the end of the day all that matters is boosting your sales."
          }
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

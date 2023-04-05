import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="Built For Speed"
          content="Your customers have options, don't let your slow site be the reason they buy from someone else."
        >
          <StaticImage
            src="../../../static/images/speedometer.png"
            alt="Perk Image"
            layout="fixed"
            placeholder="tracedSVG"
          />
        </Perk>
        <span className="perks__divider">
          <Cross />
        </span>
        <Perk
          title="Built For Results"
          content="Boost your conversion rates, increase your SEO and get the results you deserve."
        >
          <StaticImage
            src="../../../static/images/sales-results.png"
            alt="Perk Image"
            layout="fixed"
            placeholder="tracedSVG"
          />
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule

import * as React from "react"
import { ClientLogosStyles } from "./ClientLogosStyles"
import { StaticImage } from "gatsby-plugin-image"
const logos = [
  "add-this-logo.png",
  "cnn-business-logo.png",
  "dow-jones-logo.png",
  "higher-grounds-logo.png",
  "johnson-and-johnson-logo.png",
  "swim-outlet-logo.png",
  "wolters-kluwer-logo.png",
]

const CompanyLogos = () => {
  return (
    <ClientLogosStyles className="section">
      <h2>Featured Clients</h2>
      <div>
        <StaticImage
          src={`../../../static/images/add-this-logo.png`}
          alt={"AddThis logo"}
          placeholder="tracedSVG"
          objectFit="contain"
        />
        <StaticImage
          src={`../../../static/images/cnn-business-logo.png`}
          alt={"CNN Business logo"}
          placeholder="tracedSVG"
          objectFit="contain"
        />
        <StaticImage
          src={`../../../static/images/dow-jones-logo.png`}
          alt={"Dow Jones logo"}
          placeholder="tracedSVG"
          objectFit="contain"
        />
        <StaticImage
          src={`../../../static/images/higher-grounds-logo.png`}
          alt={"Higher Grounds logo"}
          placeholder="tracedSVG"
          objectFit="contain"
        />
        <StaticImage
          src={`../../../static/images/johnson-and-johnson-logo.png`}
          alt={"Johnson & Johnson logo"}
          placeholder="tracedSVG"
          objectFit="contain"
        />
        <StaticImage
          src={`../../../static/images/swim-outlet-logo.png`}
          alt={"Swim Outlet logo"}
          placeholder="tracedSVG"
          objectFit="contain"
        />
        <StaticImage
          src={`../../../static/images/wolters-kluwer-logo.png`}
          alt={"Wolters Kluwer Logo"}
          placeholder="tracedSVG"
          objectFit="contain"
        />
      </div>
    </ClientLogosStyles>
  )
}

export default CompanyLogos

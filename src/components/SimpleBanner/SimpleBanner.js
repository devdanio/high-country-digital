import * as React from "react"
import { SimpleBannerStyles } from "./SimpleBannerStyles"

const SimpleBanner = ({ children, title, subTitle }) => {
  return (
    <SimpleBannerStyles>
      {children}

      {title && (
        <div className="container">
          <div className="banner__content">
            <h1>
              {title}
              <span style={{ color: "var(--primary)" }}>.</span>
            </h1>
            <h2>{subTitle ?? null}</h2>
          </div>
        </div>
      )}
      <div className="gradient"></div>
    </SimpleBannerStyles>
  )
}

export default SimpleBanner

/*global dataLayer, a*/

import * as React from "react"
import NavModule from "./NavModule/NavModule"
import AnimMain from "./AnimMain/AnimMain"
import Footer from "./Footer/Footer"
import { motion } from "framer-motion"
import { GlobalStyle } from "../styles/GlobalStyles"
import { Script } from "gatsby"
import LogRocket from "logrocket"

const Layout = ({ children }) => {
  React.useEffect(() => {
    LogRocket.init("high-country-digital/high-country-digital")
  }, [])

  const handleScriptOnLoad = () => {
    try {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag("js", new Date())

      gtag("config", "G-LCM4ZRTXLH")
    } catch (e) {
      console.warn(`Error loading Google Analytics`, e)
    }
  }
  return (
    <>
      <GlobalStyle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <NavModule />
        <AnimMain>
          {children}
          <Footer />
        </AnimMain>
      </motion.div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-LCM4ZRTXLH"
        onLoad={handleScriptOnLoad}
      />
    </>
  )
}

export default Layout

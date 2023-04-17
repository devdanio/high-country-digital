import * as React from "react"
import NavModule from "./NavModule/NavModule"
import AnimMain from "./AnimMain/AnimMain"
import Footer from "./Footer/Footer"
import { motion } from "framer-motion"
import { GlobalStyle } from "../styles/GlobalStyles"

import LogRocket from "logrocket"

const Layout = ({ children }) => {
  React.useEffect(() => {
    LogRocket.init("high-country-digital/high-country-digital")
  }, [])
  return (
    <>
      <GlobalStyle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <NavModule />
        <AnimMain>
          {children}
          <Footer />
        </AnimMain>
      </motion.div>
    </>
  )
}

export default Layout

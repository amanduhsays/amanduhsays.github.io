import React from "react"

import SEO from "../components/seo"
import WelcomeScreen from "../components/welcome-screen"
import logo from "../images/logo.svg"

import styles from "./index.module.css"

const IndexPage = () => (
  <div className={styles.page}>
    <SEO title="Home" />
    <WelcomeScreen />
    <div className={styles.hero}>
      <img src={logo} className={styles.logo} />
      <p className={styles.text}>Site coming soon...</p>
    </div>
  </div>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import Team from "../components/About/Team"
import { graphql } from 'gatsby'

const AboutPage = ({data}) => (
  <Layout>

    <SEO title="Home" />
    <HeroSection

    />
    <DualInfoBlock heading="A message from our CEO"/>
    <Team/>
    <Infoblock heading="About Us"/>

  </Layout>
)



export default AboutPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import DualInfoBlock from "../components/Reusable/DualInfoBlock"
import { graphql } from 'gatsby'
import Cart from "../components/Cart/Cart"

const IndexPage = ({data}) => (
  <Layout>

    <SEO title="Home" />
    <HeroSection
    img={data.img.childImageSharp.fluid}
      title="Some title"
      subtitle="Ecommerce"
      heroclass="hero-background"
    />
  <Infoblock heading="About Us"/>
  <Cart products = {data.products} />
  <DualInfoBlock heading="Our Team"/>
  </Layout>
)

export const query = graphql`{

  img: file(relativePath:{eq: "heromain.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  products:allContentfulProductimg{
    edges{
      node{
        id
        title
        category
        price
        description {
          description
        }
        media{
          fixed(width:200,height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}`

export default IndexPage

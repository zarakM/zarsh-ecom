import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'

const TshirtsPage = ({location}) => {
  const data = useStaticQuery(graphql`
    query TshirtsQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMoltinProduct {
        edges {
          node {
            id
            name
            description
            mainImageHref
            meta {
              display_price {
                with_tax {
                  amount
                  currency
                  formatted
                }
              }
            }
            mainImage {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  `)

  const products = get(data, 'allMoltinProduct.edges')
  const filterProductsWithoutImages = products.filter(v => v.node.mainImageHref)

  return (
    <Layout location={location}>
      <SEO title="tshirts" />
      <h1>Tshirts</h1>
      <ProductList products={filterProductsWithoutImages} />
    </Layout>
  )
}

export default TshirtsPage

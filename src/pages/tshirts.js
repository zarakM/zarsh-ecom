import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

const TshirtsPage = ({location}) => {
  const data = useStaticQuery(graphql`
    query TshirtsQuery {
      site {
        siteMetadata {
          title
        }
      }
      allWcProducts(filter: {categories: {elemMatch: {name: {eq: "Tshirt"}}}}) {
        edges {
          node {
            id
            description
            name
            price
            slug
            images {
              name
              src
            }
          }
        }
      }
    }
  `)

  const tshirtProducts = get(data, 'allWcProducts.edges')
  const obj1 = Object.keys(tshirtProducts).map(key => {
    return {
      id: tshirtProducts[key].node.id,
      name: tshirtProducts[key].node.name,
      price: tshirtProducts[key].node.price,
      images: tshirtProducts[key].node.images,
    }
  })
  return (
    <Layout location={location}>
      <SEO title="Tshirt" />
      <h1>Tshirt</h1>
      <ProductList products={obj1} />
    </Layout>
  )
}

export default TshirtsPage

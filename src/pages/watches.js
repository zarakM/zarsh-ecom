import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

const WatchesPage = ({location}) => {
  const data = useStaticQuery(graphql`
    query WatchesQuery {
      site {
        siteMetadata {
          title
        }
      }
      allWcProducts(
        filter: {categories: {elemMatch: {name: {eq: "watches"}}}}
      ) {
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

  const watchesProducts = get(data, 'allWcProducts.edges')
  const obj1 = Object.keys(watchesProducts).map(key => {
    return {
      id: watchesProducts[key].node.id,
      name: watchesProducts[key].node.name,
      price: watchesProducts[key].node.price,
      images: watchesProducts[key].node.images,
    }
  })
  return (
    <Layout location={location}>
      <SEO title="Watches" />
      <h1>Watches</h1>
      <ProductList products={obj1} />
    </Layout>
  )
}

export default WatchesPage

import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

const ShoesPage = ({location}) => {
  const data = useStaticQuery(graphql`
    query ShoesQuery {
      site {
        siteMetadata {
          title
        }
      }
      allWcProducts(filter: {categories: {elemMatch: {name: {eq: "Shoes"}}}}) {
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

  const shoesProducts = get(data, 'allWcProducts.edges')
  const obj1 = Object.keys(shoesProducts).map(key => {
    return {
      id: shoesProducts[key].node.id,
      name: shoesProducts[key].node.name,
      price: shoesProducts[key].node.price,
      images: shoesProducts[key].node.images,
    }
  })
  return (
    <Layout location={location}>
      <SEO title="Shoes" />
      <h1>Shoes</h1>
      <ProductList products={obj1} />
    </Layout>
  )
}

export default ShoesPage

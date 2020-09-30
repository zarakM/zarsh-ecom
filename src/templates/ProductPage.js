/* eslint-disable */
import React from 'react'
import {graphql} from 'gatsby'
import SEO from '../components/SEO'
import get from 'lodash/get'
import ProductSummary from '../components/ProductSummary'

import ProductAttributes from '../components/ProductAttributes'
import Layout from '../components/Layout'

class ProductPageTemplate extends React.PureComponent {
  render() {
    const productInfo = get(this, 'props.data.allWcProducts')
    const data = productInfo.edges[0].node
    const slug = data.slug
    const attributes = data.attributes
    const description = data.description

    // console.log('this is attributes .....>>>>>', attributes)

    const product = {
      ...data,
      id: data.id,
      image: data.images[0].src,
      header: data.name,
      price: data.price,
      sku: data.sku,
    }

    // if (!sizes) return null

    return (
      <Layout location={this.props.location}>
        <SEO title={slug} />
        <ProductSummary {...product} />
        <ProductAttributes {...attributes} description={description} />
      </Layout>
    )
  }
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductsQuery($id: String!) {
    allWcProducts(filter: {id: {eq: $id}}) {
      edges {
        node {
          id
          name
          price
          slug
          sku
          description
          images {
            src
            name
          }
          attributes {
            options
            name
          }
        }
      }
    }
  }
`

// allMoltinProduct(filter: {id: {eq: $id}}) {
//   edges {
//     node {
//       id
//       name
//       description
//       meta {
//         display_price {
//           with_tax {
//             amount
//             currency
//             formatted
//           }
//         }
//       }
//       slug
//       sku
//     }
//   }
// }

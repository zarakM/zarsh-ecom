import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
// import {Image, Header} from 'semantic-ui-react'
import ProductList from '../components/ProductList'
import SEO from '../components/SEO'

import Layout from '../components/Layout'

const StoreIndex = ({location}) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      allWcProductsCategories {
        edges {
          node {
            name
            products {
              id
              price
              name
              images {
                name
                src
              }
            }
          }
        }
      }
    }
  `)

  // const {id, description, name, price, slug, images} = useAllWcShoesProducts()

  // console.log(description, name, price, slug)

  const siteTitle = get(data, 'site.siteMetadata.title')
  const categoriesName = get(data, 'allWcProductsCategories.edges')

  console.log(categoriesName)

  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      {/* <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}
        >
          <Image src={logo} alt="logo" />
        </Header.Content>
      </Header> */}

      {categoriesName.map(item => (
        <div key={item.node.id}>
          <h1>{item.node.name}</h1>
          <ProductList products={item.node.products} />
        </div>
      ))}
    </Layout>
  )
}

export default StoreIndex

// allWcProducts(filter: {categories: {elemMatch: {name: {eq: "Shoes"}}}}) {
//   edges {
//     node {
//       id
//       description
//       name
//       price
//       slug
//       images {
//         src
//       }
//     }
//   }
// }

// allWcProductsCategories {
//   edges {
//     node {
//       name
//       products {
//         id
//         price
//         images {
//           name
//           src
//         }
//       }
//     }
//   }
// }

// allWcProducts(
//   filter: {
//     categories: {elemMatch: {name: {in: ["Shoes", "Tshirt", "watches"]}}}
//   }
// ) {
//   edges {
//     node {
//       id
//       description
//       name
//       price
//       slug
//       images {
//         src
//       }
//     }
//   }
// }

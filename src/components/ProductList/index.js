/* eslint-disable camelcase */
import React from 'react'
import {Card, Image} from 'semantic-ui-react'
// import Img from 'gatsby-image'
import {Link} from 'gatsby'

const mapProductsToItems = products =>
  products.map(({id, name, price, images}) => {
    // const price = price || null
    return {
      as: Link,
      to: `/product/${id}/`,
      childKey: id,
      image: <Image src={images[0].src} size="big" />,
      header: name,
      meta: <Card.Meta style={{color: 'dimgray'}}>{price}</Card.Meta>,
    }
  })

export default ({products}) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={4} stackable />
)

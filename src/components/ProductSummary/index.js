import React from 'react'
// import Img from 'gatsby-image'

import {Item, Label, Image} from 'semantic-ui-react'

import AddToCart from '../AddToCart'

export default ({id, name, price, sku, image}) => (
  <Item.Group>
    <Item style={{alignItems: 'center'}}>
      <Item.Image size="medium">
        <Image style={{width: '250px'}} src={image} alt={name} />
      </Item.Image>
      <Item.Content>
        <Item.Header>{name}</Item.Header>
        <Item.Description>
          <p>${price}</p>
          <Label>{`SKU: ${sku}`}</Label>
        </Item.Description>
        <Item.Extra>
          <AddToCart productId={id} />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

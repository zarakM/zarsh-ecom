/* eslint-disable camelcase */
import React from 'react'
import {Header, Divider, Table} from 'semantic-ui-react'

const ProductAttributes = (attributes, {description}) => {
  const prodAttrb = Object.keys(attributes).map(key => (
    <>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{attributes[key].name}</Table.Cell>
          <Table.Cell>{attributes[key].options}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </>
  ))

  return (
    <div>
      <Header as="h3">About this product</Header>
      <p>{description}</p>
      <Divider />
      <Table celled>
        <Table.Header style={{background: '#f9fafb'}}>
          <Table.Row>
            <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {prodAttrb}
      </Table>
    </div>
  )
}

export default ProductAttributes

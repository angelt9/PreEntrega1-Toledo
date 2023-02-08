import React from 'react'
import Container from 'react-bootstrap'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <Container>
        <h4>{greeting}</h4>
      </Container>
    </>
  )
}

export default ItemListContainer
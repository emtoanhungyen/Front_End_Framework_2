import React from 'react'
import styled from 'styled-components'

const Square = ({ value, handleClick }) => {
   return (
      <Item onClick={handleClick}>{value}</Item>
   )
}

const Item = styled.button`
  border: 3px solid gray;
  font-size: 40px;
  background-color: gray;
  color: #56354d;
  border-radius: 4px;
  cursor: pointer;
`

export default Square
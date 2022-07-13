import React from 'react'
import styled from 'styled-components'
import Square from './square'

const Board = ({ value, onClick }) => {
   return (
      <ListSquare>
         {value.map((item, index) => (
            <Square key={index} value={item} handleClick={() => onClick(index)} />
         ))}
      </ListSquare>
   )
}
const ListSquare = styled.div`
   width : 350px;
   height: 350px;
   display: grid;
   grid-template: repeat(3,1fr) / repeat(3,1fr);
   gap : 2px;
   margin : 0 auto;
`

export default Board
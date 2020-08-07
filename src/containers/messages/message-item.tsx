import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  padding: 1rem;
  display: flex;
`

const PhotoColumn = styled.div`
  width: 60px;
` 
const InfoColumn = styled.div`
  flex: 1;
` 
const DetailsColumn = styled.div`
  width: 100px;
` 

export default function MessageItem() {
  return (
    <Item>
      <PhotoColumn>...</PhotoColumn>
      <InfoColumn>
        <h2>José Ronaldo</h2>
        <p>Boa tarde, como vai você?</p>
        <p>Caixa de entrada</p>
      </InfoColumn>
      <DetailsColumn>
        <time>Hoje, 11:42</time>
        <p>-2 horas</p>
        A, B, C
      </DetailsColumn>
    </Item>
  )
}

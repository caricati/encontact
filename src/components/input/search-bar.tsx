import React from 'react'
import styled from 'styled-components'

const InputSearch = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
`

export default function SearchBar() {
  return <InputSearch type="text" placeholder="Pesquisar" />
}

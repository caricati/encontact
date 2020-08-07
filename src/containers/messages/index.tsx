import React from 'react'
import styled from 'styled-components'
import Photo from '../../components/photo'
import InputSearch from '../../components/input/search-bar'
import MenuCollapse, { MenuItem } from '../../components/menu/collapse'
import MessageItem from './message-item'
import { Link } from 'react-router-dom'

const Container = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  align-items: stretch;
`

const Aside = styled.aside`
  background-color: #f9f9f9;

  & > header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #ccc;
  }
`

const Wrapper = styled.section``

const HeaderSearch = styled.section``

const Options = styled.div``

const MessageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

function App() {
  return (
    <Container>
      <Aside>
        <header>
          <Photo />
          <p>dropdown</p>
        </header>
        <MenuCollapse defaultActived={0}>
          <MenuItem title="Conta 1">
            <Link to="/">Caixa de entrada</Link>
            <Link to="/">Caixa de saída</Link>
          </MenuItem>
          <MenuItem title="Conta 2">
            <Link to="/">Caixa de entrada</Link>
            <Link to="/">Caixa de saída</Link>
          </MenuItem>
        </MenuCollapse>
      </Aside>
      <Wrapper>
        <HeaderSearch>
          <InputSearch />
        </HeaderSearch>
        <Options>
          <button type="button">Atribuir</button>
          <button type="button">Arquivar</button>
          <button type="button">Agendar</button>
        </Options>
        <MessageList>
          <MessageItem />
          <MessageItem />
          <MessageItem />
          <MessageItem />
        </MessageList>
      </Wrapper>
    </Container>
  )
}

export default App

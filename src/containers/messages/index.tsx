import React from 'react'
import styled from 'styled-components'

import Button from '../../components/button'
import Photo from '../../components/photo'
import InputSearch from '../../components/input/search-bar'
import MenuCollapse, { MenuItems, Item } from '../../components/menu/collapse'
import MessageItem from './message-item'

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

const Options = styled.div`
  padding: 1rem;

  & > *:not(:first-child) {
    margin-left: 0.75rem;
  }
`

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
          <Photo size={40} user={{ initials: 'OA' }} onClick={() => console.log('enter here')} />
          <p>dropdown</p>
        </header>
        <MenuCollapse>
          <MenuItems title="Conta 1">
            <Item title="Caixa de entrada" icon="inbox" />
            <Item title="Caixa de saída" icon="outbox" />
          </MenuItems>
          <MenuItems title="Conta 2">
            <Item title="Caixa de entrada" icon="inbox" />
            <Item title="Caixa de saída" icon="outbox" />
          </MenuItems>
        </MenuCollapse>
      </Aside>
      <Wrapper>
        <HeaderSearch>
          <InputSearch />
        </HeaderSearch>
        <Options>
          <Button>Atribuir</Button>
          <Button>Arquivar</Button>
          <Button>Agendar</Button>
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

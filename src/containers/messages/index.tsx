import React from 'react'
import styled from 'styled-components'

import Button from '../../components/button'
import InputSearch from '../../components/input/search-bar'
import MessageItem from './message-item'
import ProfileOptions from './profile-options'
import AsideMenu from './aside-menu'

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
          <ProfileOptions />
          <p>dropdown</p>
        </header>
        <AsideMenu />
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

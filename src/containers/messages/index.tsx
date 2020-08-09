import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import AsideMenu from './aside-menu'
import MessagesList from './messages-list'
import Button from '../../components/button'
import useStore from '../../store/use-store'
import ProfileOptions from './profile-options'
import InputSearch from '../../components/input/search-bar'
import { useArchiveMessages } from '../../actions/message'

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

function App() {
  const { store: { message } } = useStore()
  const archiveMessages = useArchiveMessages()
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
        {message && (
          <Options>
            <Button>Atribuir</Button>
            <Button onClick={() => {
              console.log(message.archiveByIds)
              console.log(archiveMessages)
              archiveMessages(message.archiveByIds)
            }}>Arquivar</Button>
            <Button>Agendar</Button>
          </Options>
        )}
        <Switch>
          <Route path="/messages/:id" component={MessagesList} />
          <Route render={() => <p>Select a item from menu</p>} />
        </Switch>
      </Wrapper>
    </Container>
  )
}

export default App

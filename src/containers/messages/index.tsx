import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import AsideMenu from './aside-menu'
import MessagesList from './messages-list'
import Button from '../../components/button'
import useStore from '../../store/use-store'
import ProfileOptions from './profile-options'
import InputSearch from '../../components/input/search-bar'
import SwitchLanguage from '../../components/switch-language'
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
  const { t } = useTranslation()
  const archiveMessages = useArchiveMessages()
  const {
    store: { message },
  } = useStore()
  
  return (
    <Container>
      <Aside>
        <header>
          <ProfileOptions />
          <SwitchLanguage />
        </header>
        <AsideMenu />
      </Aside>
      <Wrapper>
        <HeaderSearch>
          <InputSearch />
        </HeaderSearch>
        {message && (
          <Options>
            <Button>{t('toAssign')}</Button>
            <Button onClick={() => archiveMessages(message.archiveByIds)}>
              {t('archive')}
            </Button>
            <Button>{t('schedule')}</Button>
          </Options>
        )}
        <Switch>
          <Route path="/messages/:id" component={MessagesList} />
          <Route render={() => <p>{t('selectTheMenuItem')}</p>} />
        </Switch>
      </Wrapper>
    </Container>
  )
}

export default App

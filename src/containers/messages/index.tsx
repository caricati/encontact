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
import SwitchThemeMode from '../../components/switch-theme-mode'
import { useArchiveMessages } from '../../actions/message'

const Container = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  align-items: stretch;
`

const Aside = styled.aside`
  background-color: rgba(0, 0, 0, 0.05);
  border-right: 1px solid ${props => props.theme.color.gray};

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid ${props => props.theme.color.gray};
  }
`

const Wrapper = styled.section``

const HeaderSearch = styled.section`
  padding: 1.25rem;
`

const Options = styled.div`
  padding: 1.25rem;

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
          <div>
            <SwitchThemeMode />
            <SwitchLanguage />
          </div>
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

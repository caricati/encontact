import React, { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Input from '../../components/input/text'
import Button from '../../components/button'
import useStore from '../../store/use-store'
import { useMakeLogin } from '../../actions/auth'

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.gray};
`

const Box = styled.form`
  width: 350px;
  padding: 3rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.color.modalBox};
`

const InputText = styled(Input)`
  margin-top: 1rem;
`

const SubmitButton = styled(Button)`
  margin-top: 2rem;
`

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.color.white};
  padding: 1rem;
  background-color: ${(props) => props.theme.color.red};
  border-radius: .25rem;
  margin-top: 1rem;
`

const Heading = styled.h1`
  margin-bottom: 2rem;
`

export default function Login() {
  const { t } = useTranslation()
  const { store } = useStore()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const action = useMakeLogin()
  return (
    <Wrapper>
      <Box
        onSubmit={(e) => {
          e.preventDefault()
          action(username, password)
        }}
      >
        <Heading>{t('login')}</Heading>
        {store.auth.hasError && (
          <ErrorMessage>{t('invalidAccountMessage')}</ErrorMessage>
        )}
        <InputText
          title={t('username')}
          name="username"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <InputText
          type="password"
          title={t('password')}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <SubmitButton submit block primary>
          Login
        </SubmitButton>
      </Box>
    </Wrapper>
  )
}

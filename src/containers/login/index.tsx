import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../components/input/text'
import Button from '../../components/button'
import { useMakeLogin } from '../../actions/auth'
import useStore from '../../store/use-store'

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.gray};
`

const Box = styled.form`
  width: 380px;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.color.white};
`

const InputText = styled(Input)`
  margin-top: 1rem;
`

const SubmitButton = styled(Button)`
  margin-top: 1.2rem;
`

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.color.white};
  padding: 1rem;
  background-color: ${(props) => props.theme.color.red};
  border-radius: .25rem;
  margin-top: 1rem;
`

export default function Login() {
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
        <h1>Login</h1>
        {store.auth.hasError && (
          <ErrorMessage>Invalid username or password</ErrorMessage>
        )}
        <InputText
          title="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <InputText
          type="password"
          title="Password"
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

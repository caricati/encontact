import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const InputSearch = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  color: ${props => props.theme.color.font};
  background-color: ${props => props.theme.color.body};
  border: 1px solid ${(props) => props.theme.color.inputBorder};
  border-radius: 0.25rem;
`

export default function SearchBar() {
  const { t } = useTranslation()
  return <InputSearch type="text" placeholder={t('search')} />
}

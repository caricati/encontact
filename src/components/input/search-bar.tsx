import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const InputSearch = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
`

export default function SearchBar() {
  const { t } = useTranslation()
  return <InputSearch type="text" placeholder={t('search')} />
}

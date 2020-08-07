import React from 'react'
import styled from 'styled-components'

type ButtonType = { children: string }

const Btn = styled.button``

export default function Button({ children }: ButtonType) {
  return <Btn type="button">{children}</Btn>
}

import React from 'react'
import styled from 'styled-components'

const Selc = styled.select`
  box-sizing: border-box;
  padding: 3px 0;
  color: ${props => props.theme.color.font};
  background-color: ${props => props.theme.color.body};
  border: 1px solid ${(props) => props.theme.color.inputBorder};
  border-radius: 0.25rem;
  outline: none;
`

type Props = {
  value: string
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void
  options: {
    label: string
    value: string
  }[]
}

export default function Select({ value, options, onChange }: Props) {
  return (
    <Selc value={value} onChange={onChange}>
      {options.map(option => <option value={option.value}>{option.label}</option>)}
    </Selc>
  )
}

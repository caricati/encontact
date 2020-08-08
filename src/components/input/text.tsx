import React from 'react'
import styled from 'styled-components'

const Row = styled.div``

const Title = styled.h4`
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-bottom: 0.3125rem;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid ${(props) => props.theme.color.inputBorder};
  box-sizing: border-box;
  border-radius: 0.25rem;
`

type Props = {
  type?: string
  title?: string
  placeholder?: string
  className?: string
  name?: string
  value?: string
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

export default function InputText({
  title,
  type,
  name,
  placeholder,
  className,
  value,
  onChange,
}: Props) {
  return (
    <Row className={className}>
      {title && <Title>{title}</Title>}
      <Input
        type={type || 'text'}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Row>
  )
}

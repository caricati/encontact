import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button<{ isBlock: boolean; isPrimary: boolean }>`
  color: ${(props) => props.theme.color.font};
  padding: 0.625rem 1rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.gray};
  border: none;
  box-sizing: border-box;
  border-radius: 4px;

  ${(props) =>
    props.isPrimary &&
    css`
      color: ${(props) => props.theme.color.white};
      background-color: ${(props) => props.theme.color.primary};
    `}

  ${(props) =>
    props.isBlock &&
    css`
      width: 100%;
      display: block;
    `}
`

type Props = {
  submit?: boolean
  children: string
  className?: string
  block?: boolean
  primary?: boolean
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

export default function Btn({
  children,
  submit,
  className,
  block,
  primary,
  onClick,
}: Props) {
  return (
    <Button
      type={submit ? 'submit' : 'button'}
      isBlock={block || false}
      isPrimary={primary || false}
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

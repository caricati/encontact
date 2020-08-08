import React from 'react'
import styled from 'styled-components'

const colors = [
  '#1abc9c',
  '#3498db',
  '#9b59b6',
  '#e74c3c',
  '#e67e22',
  '#f1c40f',
]

const Container = styled.div<{ customSize: number }>`
  width: ${(props) => props.customSize}px;
  height: ${(props) => props.customSize}px;
  background-color: ${colors[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

const Button = styled.button`
  background: transparent;
  margin: 0;
  padding: 0;
  border: none;
  appearance: none;
  cursor: pointer;
`

export type Props = {
  size?: number
  className?: string
  user: { initials: string }
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

function Photo({ size = 32, user, onClick, className }: Props) {
  const Element = () => <Container customSize={size} className={className}>{user.initials}</Container>

  if (onClick) {
    return (
      <Button type="button" onClick={onClick}>
        <Element />
      </Button>
    )
  }

  return <Element />
}

export default Photo

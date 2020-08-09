import React from 'react'
import styled from 'styled-components'

const getColorByInitials = (initials: string): string => {
  const letter = initials.charAt(0).toUpperCase()
  if (letter < 'F') {
    return '#706fd3'
  }
  if (letter < 'K') {
    return '#33d9b2'
  }
  if (letter < 'P') {
    return '#ff793f'
  }
  if (letter < 'U') {
    return '#ff5252'
  }
  return '#ffb142'
}

const Container = styled.div<{ customSize: number; customColor: string }>`
  width: ${(props) => props.customSize}px;
  height: ${(props) => props.customSize}px;
  font-size: ${(props) => (props.customSize < 21 ? 7 : 16)}px;
  background-color: ${(props) => props.customColor};
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
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
  const Element = () => (
    <Container
      customSize={size}
      customColor={getColorByInitials(user.initials)}
      className={className}
    >
      {user.initials}
    </Container>
  )

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

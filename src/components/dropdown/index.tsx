import React, { ReactNode, useRef, useState, useContext } from 'react'
import styled from 'styled-components'
import Context, { Provider } from './dropdown-context'

const Container = styled.div`
  position: relative;
`

const ItemButton = styled.button`
  width: 100%;
  appearance: none;
  padding: 0.5rem 0.75rem;
  border: none;
  text-align: left;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const OptionsContainer = styled.div<{ topWrapper: number }>`
  position: absolute;
  width: 200px;
  padding: 0.3125rem 0;
  z-index: 50;
  background-color: ${(props) => props.theme.color.white};
  top: ${({ topWrapper }) => (topWrapper ? `${topWrapper + 8}px` : 0)};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
`

type OptionProps = {
  title: string
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

export function Option({ title, onClick }: OptionProps) {
  const { handleToggle } = useContext(Context)
  return (
    <ItemButton
      type="button"
      onClick={(evt) => {
        handleToggle()
        onClick && onClick(evt)
      }}
    >
      {title}
    </ItemButton>
  )
}

type typeChildrenArgs = {
  handleToggle(): void
}

type Props = {
  children(args: typeChildrenArgs): ReactNode
  options: [ReactNode]
}

export default function Dropdown({ children, options }: Props) {
  const [isOpen, setOpen] = useState(false)
  const ref: { current: any } = useRef(null)
  const handleToggle = () => setOpen(!isOpen)

  return (
    <Provider value={{ handleToggle }}>
      <Container ref={ref}>
        {children({ handleToggle })}
        {isOpen && (
          <OptionsContainer topWrapper={ref.current?.offsetHeight}>
            {options}
          </OptionsContainer>
        )}
      </Container>
    </Provider>
  )
}

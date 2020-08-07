import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'

const ItemsContainer = styled.div`
  display: block;

  & > a {
    display: block;
  }
`

const MenuContainer = styled.div`
  padding: 10px;
`

type MenuItemProps = { children: ReactNode, title: string }

export function MenuItem({ children, title }: MenuItemProps) {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <button type="button" onClick={() => setOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && (
        <ItemsContainer>
          {children}
        </ItemsContainer>
      )}
    </div>
  )
}

type MenuCollapseProps = { children: ReactNode[], defaultActived: number }

export default function MenuCollapse({ children, defaultActived }: MenuCollapseProps) {
  return (
    <MenuContainer>{ children }</MenuContainer>
  )
}

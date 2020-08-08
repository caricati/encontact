import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import ArrowIcon from './down-arrow.svg'
import inbox from './inbox.svg'
import star from './star.svg'
import trash from './trash.svg'
import outbox from './outbox.svg'

type typeIconMap = {
  [key: string]: string
}

const iconMap: typeIconMap = {
  'Caixa de entrada': inbox,
  Inbox: inbox,
  Entrada: inbox,
  'Caixa de saída': outbox,
  Vip: star,
  Lixo: trash,
}

const ItemsContainer = styled.div`
  display: block;
  margin-left: 24px;
  margin-bottom: 1rem;
`

const CollapseButton = styled.button<{ isOpen: boolean }>`
  width: 100%;
  color: ${(props) => props.theme.color.font};
  text-align: left;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.625rem 0.3125rem;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: transparent;

  img {
    fill: red;
    width: 10px;
    margin-right: 10px;
    transform: rotate(${(props) => (props.isOpen ? '0' : '-90deg')});
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`

const MenuContainer = styled.div`
  padding: 10px;
`

const CollapseItem = styled.div`
  margin-top: 0.625rem;

  img {
    width: 1rem;
    margin-right: 0.75rem;
  }

  a {
    color: ${(props) => props.theme.color.font};
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }
`

type MenuItemsProps = { children: ReactNode; title: string }

export function MenuItems({ children, title }: MenuItemsProps) {
  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <CollapseButton
        isOpen={isOpen}
        type="button"
        onClick={() => setOpen(!isOpen)}
      >
        <img src={ArrowIcon} alt="arrow" />
        {title}
      </CollapseButton>
      {isOpen && <ItemsContainer>{children}</ItemsContainer>}
    </div>
  )
}

export function Item({ title, icon }: { title: string; icon: string }) {
  return (
    <CollapseItem>
      <Link to="/">
        {icon && iconMap[icon] && (
          <img src={iconMap[icon]} alt={iconMap[icon]} />
        )}
        {title}
      </Link>
    </CollapseItem>
  )
}

type MenuCollapseProps = { children: ReactNode[] }

export default function MenuCollapse({ children }: MenuCollapseProps) {
  return <MenuContainer>{children}</MenuContainer>
}

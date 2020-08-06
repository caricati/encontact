import React from 'react'

type MenuItemProps = { children: Element }

export function MenuItem({ children }: MenuItemProps) {
  return <li>{ children }</li>
}

type MenuCollapseProps = { children: Element }

export default function MenuCollapse({ children }: MenuCollapseProps) {
  return <div>{ children }</div>
}

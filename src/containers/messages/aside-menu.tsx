import React, { useEffect } from 'react'
import useStore from '../../store/use-store'
import { useFetchMenuMessage } from '../../actions/message'
import MenuCollapse, { MenuItems, Item } from '../../components/menu/collapse'

export default function AsideMenu() {
  const {
    store: { message },
  } = useStore()
  const fetchMenu = useFetchMenuMessage()

  useEffect(() => {
    fetchMenu()
  }, [fetchMenu])

  return (
    <MenuCollapse>
      {message.menu.map((item: any) => (
        <MenuItems title={item.name} key={item.id}>
          {item.subMenus.map((sub: any) => (
            <Item key={sub.id} title={sub.name} icon={sub.name} />
          ))}
        </MenuItems>
      ))}
    </MenuCollapse>
  )
}

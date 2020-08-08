import React from 'react'

import { useLogout } from '../../actions/auth'
import Photo from '../../components/photo'
import Dropdown, { Option } from '../../components/dropdown'

export default function ProfileOptions() {
  const logout = useLogout()
  return (
    <Dropdown options={[<Option key={1} title="Logout" onClick={logout} />]}>
      {({ handleToggle }) => (
        <Photo size={40} user={{ initials: 'OA' }} onClick={handleToggle} />
      )}
    </Dropdown>
  )
}

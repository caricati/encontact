import React from 'react'
import { useTranslation } from 'react-i18next'

import { useLogout } from '../../actions/auth'
import Photo from '../../components/photo'
import Dropdown, { Option } from '../../components/dropdown'

export default function ProfileOptions() {
  const { t } = useTranslation()
  const logout = useLogout()
  return (
    <Dropdown options={[<Option key={1} title={t('logout')} onClick={logout} />]}>
      {({ handleToggle }) => (
        <Photo size={40} user={{ initials: 'OA' }} onClick={handleToggle} />
      )}
    </Dropdown>
  )
}

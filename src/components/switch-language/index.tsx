import React, { useState } from 'react'
import Select from '../../components/select'
import i18n from '../../i18n'

export default function SwitchLanguage() {
  const [language, setLanguage] = useState(i18n.language)
  return (
    <Select
      value={language}
      onChange={(e) => {
        const { value } = e.currentTarget
        i18n.changeLanguage(value)
        setLanguage(value)
      }}
      options={[
        {value: 'pt', label: 'Português' },
        {value: 'en', label: 'English' },
      ]}
    />
  )
}

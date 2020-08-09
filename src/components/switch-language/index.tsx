import React, { useState } from 'react'

import i18n from '../../i18n'

export default function SwitchLanguage() {
  const [language, setLanguage] = useState(i18n.language)
  return (
    <select
      value={language}
      onChange={(e) => {
        const { value } = e.currentTarget
        i18n.changeLanguage(value)
        setLanguage(value)
      }}
    >
      <option value="pt">Português</option>
      <option value="en">English</option>
    </select>
  )
}

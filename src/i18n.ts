import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './language'

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

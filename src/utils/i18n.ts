import { createI18n } from 'vue-i18n'
import en from '../../locales/en.json'
import fr from '../../locales/fr.json'

export const i18n = createI18n({
  locale: 'fr',
  legacy: false,
  messages: {
    en,
    fr
  }
})

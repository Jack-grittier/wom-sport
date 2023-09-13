export type LOCALE_TYPE = 'bg' | 'el' | 'en' | 'es' | 'it'

// https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
export const LANGUAGES: Record<LOCALE_TYPE, string> = {
  bg: 'Български',
  el: 'Ελληνικά',
  en: 'English',
  es: 'Español (Castellano)',
  it: 'Italiano',
}

export type PARTNER_NAME_TYPE =
  | 'Asociación Amigos de Europa'
  | 'Asociación Guaraní'
  | 'ΑμΚΕ ΙΑΣΙΣ'
  | 'Per Esempio ONLUS'
  | 'Фондация "ДА"'

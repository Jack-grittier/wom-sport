import { LanguageCodeEnum, LanguageCodeFilterEnum } from './gql/graphql'

export function localeToFilterCode(locale: string): LanguageCodeFilterEnum {
  return locale.toUpperCase() as LanguageCodeFilterEnum
}
export function localeToCode(locale: string): LanguageCodeEnum {
  return locale.toUpperCase() as LanguageCodeEnum
}
export function codeToLocale(code: LanguageCodeEnum): string {
  return code.toLowerCase()
}

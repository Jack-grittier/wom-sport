import { Box, BoxProps } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'
import { enGB, es, el, it, bg, Locale } from 'date-fns/locale'

function nextJsLocaleToDateFnsLocale(locale: string): Locale {
  switch (locale) {
    case 'en':
      return enGB
    case 'es':
      return es
    case 'el':
      return el
    case 'it':
      return it
    case 'bg':
      return bg
  }
}

interface DateProps extends BoxProps {
  locale: string
  dateString: string
}

export default function Date({ dateString, locale, ...props }: DateProps) {
  const date = parseISO(dateString)
  return (
    <Box as='time' dateTime={dateString} {...props}>
      {format(date, 'PPP', { locale: nextJsLocaleToDateFnsLocale(locale) })}
    </Box>
  )
}

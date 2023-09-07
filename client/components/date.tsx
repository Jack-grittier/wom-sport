import { Box, BoxProps } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'

interface DateProps extends BoxProps {
  dateString: string
}

export default function Date({ dateString, ...props }: DateProps) {
  const date = parseISO(dateString)
  return (
    <Box as='time' dateTime={dateString} {...props}>
      {format(date, 'LLLL	d, yyyy')}
    </Box>
  )
}

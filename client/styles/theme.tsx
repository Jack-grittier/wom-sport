import { extendTheme, defineStyleConfig } from '@chakra-ui/react'

// TODO: submit PR to update Chakra docs on how to apply global fonts
// TODO: submit issue about chakra-cli not working
// TODO: submit PR/issue about textshadow not working with shadow keys

import { Comfortaa, Inter } from 'next/font/google'

const comfortaaFont = Comfortaa({
  subsets: ['cyrillic', 'greek', 'latin'],
  display: 'swap',
})
const interFont = Inter({
  subsets: ['cyrillic', 'greek', 'latin'],
  display: 'swap',
})

const fonts = {
  heading: comfortaaFont.style.fontFamily,
  body: interFont.style.fontFamily,
}

const colors = {
  primary: {
    50: '#F0F0F8',
    100: '#E2E1F0',
    200: '#C5C4E2',
    300: '#A8A8D3',
    400: '#8B8CC4',
    500: '#6C72B6',
    // 600 is brand color
    600: '#4C59A7',
    brand: '#4C59A7',
    700: '#3B437A',
    800: '#2A2E50',
    900: '#191A2A',
  },
  secondary: {
    50: '#FBEEF5',
    100: '#F7DDEB',
    200: '#EDBBD7',
    300: '#E299C4',
    400: '#D576B1',
    // 500 is brand color
    500: '#C8519E',
    brand: '#C8519E',
    600: '#9C427C',
    700: '#73335B',
    800: '#4B253D',
    900: '#271620',
  },
  tertiary: {
    50: '#EBF5FC',
    100: '#D7ECFA',
    // 200 is brand color
    200: '#ADD9F4',
    brand: '#ADD9F4',
    300: '#95BBD2',
    400: '#7F9DB0',
    500: '#688190',
    600: '#536671',
    700: '#3E4C54',
    800: '#2B3338',
    900: '#191C1E',
  },
  black: '#0c1015',
  gray: {
    50: '#f9fafa',
    100: '#f1f1f2',
    200: '#e6e7e9',
    300: '#d2d4d7',
    400: '#a9adb2',
    500: '#797f88',
    600: '#4d5560',
    700: '#2e3744',
    800: '#19202b',
    900: '#141a23',
  },
  purple: {
    50: '#f8f6fb',
    100: '#e2dcee',
    200: '#cdc2e1',
    300: '#af9dcf',
    400: '#9a84c2',
    500: '#7f63b2',
    600: '#6d4da7',
    700: '#593f8a',
    800: '#493371',
    900: '#362653',
  },
  pink: {
    50: '#fbf6f8',
    100: '#eedce5',
    200: '#e0c1d0',
    300: '#ce9cb4',
    400: '#c182a1',
    500: '#b16188',
    600: '#a34a75',
    700: '#853c5f',
    800: '#672f4a',
    900: '#4c2236',
  },
  red: {
    50: '#fbf6f6',
    100: '#eedcdc',
    200: '#dfbebd',
    300: '#cc9998',
    400: '#c28483',
    500: '#b46866',
    600: '#a74e4c',
    700: '#863f3d',
    800: '#723534',
    900: '#522625',
  },
  orange: {
    50: '#fcfaf8',
    100: '#f2ece5',
    200: '#e4d7c8',
    300: '#d0b89f',
    400: '#bd9c79',
    500: '#ad8458',
    600: '#956e44',
    700: '#775836',
    800: '#5d452b',
    900: '#4d3923',
  },
  yellow: {
    50: '#fefefd',
    100: '#faf9f4',
    200: '#f0ede0',
    300: '#e4e0c8',
    400: '#d3cda6',
    500: '#b4a967',
    600: '#938743',
    700: '#736934',
    800: '#564f27',
    900: '#474120',
  },
  green: {
    50: '#f9fcfa',
    100: '#deefe6',
    200: '#baddcc',
    300: '#93caaf',
    400: '#69b591',
    500: '#489f75',
    600: '#3c8361',
    700: '#2e664b',
    800: '#26533d',
    900: '#1f4533',
  },
  teal: {
    50: '#f6fbfb',
    100: '#d9ecec',
    200: '#b8dbdc',
    300: '#91c8c9',
    400: '#5daeb0',
    500: '#459597',
    600: '#38797a',
    700: '#2b5e5f',
    800: '#244e4f',
    900: '#1e4041',
  },
  cyan: {
    50: '#f7fafb',
    100: '#deecef',
    200: '#cfe3e7',
    300: '#bed9df',
    400: '#8dbcc7',
    500: '#76afbc',
    600: '#5c9faf',
    700: '#438493',
    800: '#376d79',
    900: '#2b545e',
  },
  blue: {
    50: '#f3f6f9',
    100: '#d4dfea',
    200: '#b6c8db',
    300: '#94aeca',
    400: '#7597bb',
    500: '#5982ad',
    600: '#456d97',
    700: '#355374',
    800: '#2b445e',
    900: '#23374d',
  },
}

const components = {
  Text: defineStyleConfig({
    baseStyle: {
      fontSize: ['md', 'lg', 'xl'],
      lineHeight: 'tall',
      pb: 2,
      // whiteSpace: 'pre-line',
    },
  }),
  Heading: defineStyleConfig({
    sizes: {
      xl: {
        fontSize: ['3xl', '4xl', '5xl'],
        color: 'primary.700',
        textShadow: [
          'var(--chakra-colors-primary-300) 0.6px 1.2px 1.8px',
          null,
          'var(--chakra-colors-primary-300) 1px 2px 3px',
        ],
        pb: [1, 2, 3],
      },
    },
  }),
}

const styles = {
  global: {
    '*': {
      transitionProperty: 'var(--chakra-transition-property-common)',
      transitionDuration: 'var(--chakra-transition-duration-normal)',
      lineHeight: 'tall',
    },
    'p, li': {
      fontSize: ['md', 'lg', 'xl'],
    },
    'h2, h3, h4': {
      fontFamily: comfortaaFont.style.fontFamily,
    },
    h2: {
      fontSize: ['2xl', '3xl', '4xl'],
      pb: [0.5, 1, 2],
    },
    h3: {
      fontSize: ['xl', '2xl', '3xl'],
      pb: [null, 0.5, 1],
    },
    h4: {
      fontSize: ['lg', 'xl', '2xl'],
      pb: [null, null, 0.5],
    },
    p: {
      pb: 2,
    },
    blockquote: {
      ml: 5,
      pl: 2,
      borderLeft: 'solid 2px',
      borderColor: 'gray.300',
      mb: 2,
    },
    'blockquote p': {
      pb: 0,
    },
    cite: {
      fontSize: ['sm', 'md', 'lg'],
    },
    'a.wp-element-button': {
      bg: 'primary.700',
      color: 'white',
      _hover: { bg: 'secondary.600' },
      _active: { bg: 'secondary.500' },
      px: 4,
      py: 2,
      fontSize: ['md', 'lg', 'xl'],
      borderRadius: 'md',
      w: 'fit-content',
      my: 2,
    },
    // select divs with a class attributes starting with 'wp-'
    // this helps keep a margin around divs with a button or media
    'div[class^="wp-"], div[class*=" wp-"]': {
      my: 5,
    },
    'object[type="application/pdf"]': {
      my: 5,
    },
    'ul, ol': {
      pl: 5,
    },
    // select outermost list items (there can be mixed lists)
    'ul:not(ul > li > ul, ol > li > ul), ol:not(ul > li > ul, ol > li > ul)': {
      pb: 2,
    },
    figure: {
      w: 'fit-content',
      bg: 'primary.900',
    },
    figcaption: {
      fontSize: ['xs', 'sm', 'md'],
      color: 'gray.300',
      pl: 2,
      p: 1,
      textAlign: 'center',
    },
    'div.wp-block-media-text': {
      display: 'flex',
      flexDirection: ['column', null, 'row'],
      alignItems: 'center',
    },
    'figure.wp-block-media-text__media, div.wp-block-media-text__content': {
      w: [null, null, '50%'],
    },
    'div.wp-block-media-text__content': {
      m: 5,
    },
  },
}

const theme = extendTheme({ fonts, colors, components, styles })

export default theme

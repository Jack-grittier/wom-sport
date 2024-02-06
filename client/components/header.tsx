import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Collapse,
  Icon,
  VStack,
  Image,
  AbsoluteCenter,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@chakra-ui/next-js'
import NextImage from 'next/image'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import {
  BsGlobe2 as GlobeIcon,
  BsFacebook as FacebookIcon,
  BsYoutube as YoutubeIcon,
} from 'react-icons/bs'

import wesLogoFull from '../public/images/wes-logo-full.svg'
import wesLogoEmpty from '../public/images/wes-logo-empty.svg'
import { useRouter } from 'next/router'
import { LocalizedTitles, languages, titles } from '../lib/localized-strings'
import { codeToLocale, localeToCode } from '../lib/util'
import { LanguageCodeEnum } from '../lib/gql/graphql'

// TODO: Submit issue about href warning when using Chakra UI Link and localization
// TODO: Fix button color for _active socials
// TODO: Fix flicker during first load

const paths: Record<keyof LocalizedTitles, string> = {
  home: '/',
  news: '/news',
  resources: '/resources',
}

const NavLink = ({ title, href, ...props }: LinkProps) => {
  return (
    <Link
      px={2}
      py={1}
      rounded='md'
      href={href}
      fontFamily='heading'
      fontWeight={700}
      fontSize={'xl'}
      {...props}
    >
      {title}
    </Link>
  )
}

export default function Header() {
  const { locale, asPath } = useRouter()
  const languageCode = localeToCode(locale)
  const {
    isOpen: isMobileNavOpen,
    onOpen: onMobileNavOpen,
    onClose: onMobileNavClose,
  } = useDisclosure()
  const {
    isOpen: isLangMenuOpen,
    onOpen: onLangMenuOpen,
    onClose: onLangMenuClose,
  } = useDisclosure()
  const buttonColor = isMobileNavOpen ? 'white' : 'primary.700'
  const buttonActive = {
    bg: isMobileNavOpen ? 'secondary.brand' : 'secondary.400',
  }
  const shouldCenter = useBreakpointValue({ base: true, md: false })
  const Logo = () => (
    <Link href='/' display={['none', 'unset']}>
      <Image
        src={
          isMobileNavOpen ? (wesLogoEmpty as string) : (wesLogoFull as string)
        }
        alt='WomEmpSports Logo'
        w={16}
        as={NextImage}
      />
    </Link>
  )
  return (
    <Flex
      bg={isMobileNavOpen ? 'primary.brand' : 'white'}
      boxShadow='var(--chakra-colors-primary-700) 0px 1px 5px 0px'
      direction='column'
      align='center'
      position='sticky'
      top={0}
      zIndex={9999}
      as='header'
    >
      <Flex
        h={20}
        align='center'
        justify='space-between'
        px={6}
        maxW='80rem'
        w='full'
      >
        {/* Mobile button */}
        <IconButton
          size='md'
          icon={
            isMobileNavOpen ? (
              <CloseIcon w={5} h={5} color={buttonColor} />
            ) : (
              <HamburgerIcon w={7} h={7} color={buttonColor} />
            )
          }
          aria-label='Menu Toggle'
          display={{ md: 'none' }}
          onClick={isMobileNavOpen ? onMobileNavClose : onMobileNavOpen}
          variant='ghost'
          _hover={buttonActive}
          _active={buttonActive}
        />

        {/* Logo */}
        {shouldCenter ? (
          <AbsoluteCenter axis='horizontal'>
            <Logo />
          </AbsoluteCenter>
        ) : (
          <Logo />
        )}

        <Flex alignItems='center'>
          {/* Desktop nav */}
          <HStack
            as='nav'
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            pr={7}
            aria-label='Desktop Navigation'
          >
            {Object.entries(paths).map(([titleKey, path]) => (
              <NavLink
                key={titleKey}
                color='primary.700'
                _hover={{ color: 'secondary.500' }}
                _active={{ bg: 'primary.100' }}
                {...(path === asPath && {
                  textDecoration: 'underline 2px',
                  textDecorationColor: 'secondary.500',
                })}
                title={titles[titleKey as keyof LocalizedTitles][languageCode]}
                href={path}
              />
            ))}
          </HStack>

          {/* Socials */}
          <HStack pr={5} spacing={3}>
            <IconButton
              size='md'
              variant='ghost'
              as={Link}
              href='https://www.facebook.com/profile.php?id=100091980933607'
              icon={
                <Icon
                  as={FacebookIcon}
                  color={isMobileNavOpen ? 'white' : 'primary.700'}
                  _active={{ color: 'white' }}
                  w={7}
                  h={7}
                />
              }
              _hover={buttonActive}
              _active={{ bg: 'secondary.brand' }}
              aria-label='Facebook Project Page'
              isExternal
            />
            <IconButton
              size='md'
              variant='ghost'
              as={Link}
              //TODO: Add youtube link
              href='https://www.youtube.com'
              icon={
                <Icon
                  as={YoutubeIcon}
                  color={isMobileNavOpen ? 'white' : 'primary.700'}
                  _active={{ color: 'white' }}
                  w={7}
                  h={7}
                />
              }
              _hover={buttonActive}
              _active={{ bg: 'secondary.brand' }}
              aria-label='YouTube Project Page'
              isExternal
            />
          </HStack>
          {/* Language Switcher */}
          <Menu
            gutter={20}
            onOpen={onLangMenuOpen}
            onClose={onLangMenuClose}
            placement='bottom-end'
          >
            <MenuButton
              as={IconButton}
              size='md'
              variant='ghost'
              icon={
                <Icon
                  as={GlobeIcon}
                  color={
                    isLangMenuOpen || isMobileNavOpen ? 'white' : 'primary.700'
                  }
                  w={7}
                  h={7}
                />
              }
              _hover={buttonActive}
              _active={{ bg: 'secondary.brand' }}
              aria-label='Language Switcher'
            />
            <MenuList w={100} aria-label='Language Menu'>
              {Object.entries(languages).map(([languageCode, language]) => (
                <Link
                  key={languageCode}
                  locale={codeToLocale(languageCode as LanguageCodeEnum)}
                  _hover={{ textDecoration: 'none' }}
                  href={asPath}
                >
                  <MenuItem
                    _focus={{ bg: 'secondary.200' }}
                    _active={{ bg: 'secondary.300' }}
                  >
                    {language}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {/* Mobile nav */}
      <Box w='full'>
        <Collapse in={isMobileNavOpen} animateOpacity>
          <Box
            py={4}
            pl={1.5}
            display={{ md: 'none' }}
            px={6}
            borderTop='1px solid'
            borderColor='primary.400'
          >
            <VStack as='nav' spacing={4} w='min' align='left'>
              {Object.entries(paths).map(([titleKey, path]) => (
                <NavLink
                  key={titleKey}
                  color='white'
                  _hover={{ color: 'black', bg: 'secondary.500' }}
                  {...(path === asPath
                    ? {
                        textDecoration: 'underline 2px',
                        textDecorationColor: 'secondary.500',
                      }
                    : null)}
                  href={path}
                  title={
                    titles[titleKey as keyof LocalizedTitles][languageCode]
                  }
                />
              ))}
            </VStack>
          </Box>
        </Collapse>
      </Box>
    </Flex>
  )
}

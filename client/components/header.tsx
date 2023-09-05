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
} from '@chakra-ui/react'
import { Link, LinkProps } from '@chakra-ui/next-js'
import NextImage from 'next/image'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { BsGlobe2 as GlobeIcon } from 'react-icons/bs'

import wesLogoFull from '../public/images/wes-logo-full.svg'
import wesLogoEmpty from '../public/images/wes-logo-empty.svg'

interface NavLinkProps {
  title: string
  href: string
}

const pages: NavLinkProps[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'News',
    href: '/news',
  },
  {
    title: 'Resources',
    href: '/resources',
  },
]

interface LanguageProps {
  name: string
  abbreviation: string
}

const languages: LanguageProps[] = [
  {
    name: 'Bulgarian',
    abbreviation: 'bul',
  },
  {
    name: 'English',
    abbreviation: 'eng',
  },
  {
    name: 'Greek',
    abbreviation: 'ell',
  },
  {
    name: 'Italian',
    abbreviation: 'ita',
  },
  {
    name: 'Spanish',
    abbreviation: 'spa',
  },
]

const NavLink = ({ title, href, ...props }: NavLinkProps & LinkProps) => {
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

  return (
    <Flex
      bg={isMobileNavOpen ? 'primary.brand' : 'white'}
      borderBottom='1px solid'
      borderColor='primary.100'
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
        <Link href='/'>
          <Image
            src={
              isMobileNavOpen
                ? (wesLogoEmpty as string)
                : (wesLogoFull as string)
            }
            alt='WomEmpSports Logo'
            w={16}
            as={NextImage}
          />
        </Link>

        <Flex alignItems='center'>
          {/* Desktop nav */}
          <HStack
            as='nav'
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            pr={9}
            aria-label='Desktop Navigation'
          >
            {pages.map((page) => (
              <NavLink
                key={page.title}
                color='primary.700'
                _hover={{ color: 'secondary.500' }}
                _active={{ bg: 'primary.100' }}
                {...page}
              />
            ))}
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
              // rounded='full'
              variant='ghost'
              // cursor='pointer'
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
              _active={{ bg: 'secondary.brand', colorScheme: 'white' }}
              aria-label='Language Switcher Button'
            ></MenuButton>
            <MenuList w={100} aria-label='Language Menu'>
              {languages.map((lang) => (
                <MenuItem
                  key={lang.abbreviation}
                  _focus={{ bg: 'secondary.200' }}
                  _active={{ bg: 'secondary.300' }}
                >
                  <Link
                    // rounded='md'
                    href={`/${lang.abbreviation}${pathname}`}
                    _hover={{ textDecoration: 'none' }}
                  >
                    {lang.name}
                  </Link>
                </MenuItem>
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
              {pages.map((page) => (
                <NavLink key={page.title} color='white' {...page} />
              ))}
            </VStack>
          </Box>
        </Collapse>
      </Box>
    </Flex>
  )
}

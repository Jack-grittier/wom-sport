import NextImage from 'next/image'
import { Image } from '@chakra-ui/next-js'

import { Flex, HStack, Icon, IconButton, Text } from '@chakra-ui/react'

import {
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs'

import erasmusLogo from '../public/images/erasmus-logo.png'
import FixedWidthContainer from './fixed-width-container'
import Link from './link-as-next-link'
import { IconType } from 'react-icons'
import { FiMail as EmailIcon } from 'react-icons/fi'

export default function Footer() {
  const FooterIcon = ({
    href,
    icon,
    label,
  }: {
    href: string
    icon: IconType
    label: string
  }) => (
    <IconButton
      size='2xs'
      as={Link}
      href={href}
      icon={
        <Icon
          as={icon}
          color={'primary.700'}
          _active={{ color: 'secondary.brand' }}
          w={2.5}
          h={2.5}
        />
      }
      aria-label={label}
      _active={{}}
      bg={{}}
      _hover={{}}
    />
  )

  return (
    <Flex
      as='footer'
      shadow='inset var(--chakra-colors-primary-700) 0px 1px 5px 0px'
      direction='column'
      align='center'
    >
      <FixedWidthContainer pb={1}>
        <Flex direction={['column', 'row']} align='center'>
          <Flex>
            <Link
              href='https://erasmus-plus.ec.europa.eu/'
              my={2}
              mr={5}
              w={48}
            >
              <Image
                src={erasmusLogo}
                alt='Erasmus+ Programme logo'
                as={NextImage}
              />
            </Link>
          </Flex>
          <Text color='gray.600' fontSize='2xs' p={0}>
            {/* TODO: Update project number */}
            {`© 2023 WomEmpSports. The European Commission's support for the
          production of this publication does not constitute an endorsement of the
          contents, which reflect the views only of the authors, and the
          Commission cannot be held responsible for any use which may be made of
          the information contained therein. Project #
          `}
          </Text>
        </Flex>
      </FixedWidthContainer>
      <Flex
        borderTop='solid 1px'
        borderColor='gray.100'
        w='full'
        align='center'
        justify='center'
        pt={1.5}
      >
        <Text color='gray.600' fontSize='2xs' pb={0} pr={2}>
          Created by Moiri Gamboni.
        </Text>
        <HStack spacing={2}>
          <FooterIcon
            href='https://github.com/moiri-gamboni/WomEmpSports'
            icon={GithubIcon}
            label='Moiri Gamboni GitHub'
          />
          <FooterIcon
            href='https://www.linkedin.com/in/moirigamboni000/'
            icon={LinkedinIcon}
            label='Moiri Gamboni LinkedIn'
          />
          <FooterIcon
            href='mailto:moiri.gamboni@proton.me'
            icon={EmailIcon}
            label='Moiri Gamboni Email'
          />
        </HStack>
      </Flex>
    </Flex>
  )
}

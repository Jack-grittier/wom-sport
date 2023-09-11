import NextImage from 'next/image'
import NextLink from 'next/link'
import { Link, Image } from '@chakra-ui/next-js'

import { Flex, Text } from '@chakra-ui/react'

import erasmusLogo from '../public/images/erasmus-logo.png'
import FixedWidthContainer from './fixed-width-container'

export default function Footer() {
  return (
    <Flex
      as='footer'
      boxShadow='inset var(--chakra-colors-primary-700) 0px 1px 5px 0px'
      direction='column'
      align='center'
    >
      <FixedWidthContainer>
        <Flex direction={['column', 'row']} align='center'>
          <Flex>
            <Link
              as={NextLink}
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
            {/* TODO: change text */}
            {`© 2023 CirculART-e. The European Commission's support for the
          production of this publication does not constitute an endorsement of the
          contents, which reflect the views only of the authors, and the
          Commission cannot be held responsible for any use which may be made of
          the information contained therein. Project Nr.
          2021-1-IT03-KA220-YOU-000030392`}
          </Text>
        </Flex>
      </FixedWidthContainer>
    </Flex>
  )
}

import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Head from 'next/head'
import NextImage, { StaticImageData } from 'next/image'
import NextLink from 'next/link'

import {
  Card,
  CardBody,
  CardHeader,
  Text,
  LinkBox,
  LinkOverlay,
  Flex,
  VStack,
  HStack,
  IconButton,
  Icon,
} from '@chakra-ui/react'
import { Link, LinkProps, Image } from '@chakra-ui/next-js'

import {
  BsFacebook as FacebookIcon,
  BsTwitter as TwitterIcon,
  BsInstagram as InstagramIcon,
} from 'react-icons/bs'

import { LoremIpsum } from 'lorem-ipsum'

import Layout from '../components/layout'
import Section from '../components/section'
import SectionWithHeading from '../components/section-with-heading'
import FixedWidthContainer from '../components/fixed-width-container'
import Banner from '../components/banner'

import banner from '../public/images/banner.svg'

import { partners } from '../lib/constants'
import { IconType } from 'react-icons'

// TODO: Send a PR to chakra to update docs about next/image and next/link
// (image should say next / image includes nextjs image opt, link should use import from chakra-ui/next-js
// TODO: Open issue about src type autocomplete in chakra image (should accept StaticImageData)

interface IndexProps {
  preview: boolean
  projectDescriptionParagraphs: string[]
  partnersIntro: string
}

type SocialIcons = Record<keyof (typeof partners)[string]['socials'], IconType>

const socialIcons: SocialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
}

export default function Index({
  preview,
  projectDescriptionParagraphs,
  partnersIntro,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const LinkAsNextLink = ({ children, ...props }: LinkProps) => (
    <Link as={NextLink} {...props}>
      {children}
    </Link>
  )
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`WomEmpSports Home`}</title>
      </Head>
      <Flex align='center' as='article' direction='column'>
        <Banner src={banner as StaticImageData} alt='WomEmpSports Banner' />
        <FixedWidthContainer>
          <SectionWithHeading
            id='project-description'
            title='About This Project'
          >
            {projectDescriptionParagraphs.map((paragraph, i) => (
              <Text key={i}>{paragraph}</Text>
            ))}
          </SectionWithHeading>
          <SectionWithHeading id='partners' title='Our Partners'>
            <Text>{partnersIntro}</Text>
            <Section id='partners-description-grid'>
              <VStack spacing={6}>
                {Object.entries(partners).map(([partnerName, partnerInfo]) => (
                  <Card
                    boxShadow='var(--chakra-colors-primary-700) 1px 2px 6px -2px'
                    as={LinkBox}
                    key={partnerName}
                    direction={['column', null, 'row']}
                    w='full'
                  >
                    <CardHeader
                      as={Flex}
                      align='center'
                      justify='center'
                      borderRight={[null, null, '1px solid']}
                      borderColor={[null, null, 'gray.300']}
                      pb={0}
                    >
                      <Flex direction='column' align='center'>
                        <LinkOverlay as={LinkAsNextLink} href={partnerInfo.url}>
                          <Image
                            src={partnerInfo.logo}
                            alt={partnerName + ' logo'}
                            as={NextImage}
                            w='200px'
                            sx={{ objectFit: 'contain' }}
                          />
                        </LinkOverlay>
                        <HStack pt={3} spacing={0}>
                          {Object.entries(partnerInfo.socials).map(
                            ([socialType, socialUrl]) => (
                              <LinkAsNextLink key={socialType} href={socialUrl}>
                                <IconButton
                                  size='md'
                                  variant='ghost'
                                  icon={
                                    <Icon
                                      as={
                                        socialIcons[
                                          socialType as keyof SocialIcons
                                        ]
                                      }
                                      color={'primary.700'}
                                      w={5}
                                      h={5}
                                      _active={{
                                        color: 'white',
                                      }}
                                    />
                                  }
                                  _hover={{
                                    bg: 'secondary.400',
                                  }}
                                  _active={{
                                    bg: 'secondary.brand',
                                  }}
                                  aria-label='Social Button'
                                  isRound
                                />
                              </LinkAsNextLink>
                            ),
                          )}
                        </HStack>
                      </Flex>
                    </CardHeader>
                    <CardBody as={Flex} justify='center' direction='column'>
                      {partnerInfo.descriptions.eng}
                    </CardBody>
                  </Card>
                ))}
              </VStack>
            </Section>
          </SectionWithHeading>
        </FixedWidthContainer>
      </Flex>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<IndexProps> = ({
  preview = false,
}) => {
  const lorem = new LoremIpsum()

  const projectDescriptionParagraphs = Array.from({ length: 3 }, () =>
    lorem.generateParagraphs(1),
  )
  const partnersIntro = lorem.generateParagraphs(1)

  return {
    props: {
      preview,
      projectDescriptionParagraphs,
      partnersIntro,
    },
    revalidate: 10,
  }
}

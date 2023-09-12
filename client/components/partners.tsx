import { StaticImageData } from 'next/image'

import amigosDeEuropaLogo from '../public/images/partners/amigos_de_europa-logo.png'
import gaLogo from '../public/images/partners/ga-logo.png'
import guaraniLogo from '../public/images/partners/guarani-logo.png'
import iasisLogo from '../public/images/partners/iasis-logo.png'
import perEsempioLogo from '../public/images/partners/per_esempio-logo.png'
import { LOCALE_TYPE, PARTNER_NAME_TYPE } from '../lib/constants'
import {
  VStack,
  Card,
  CardHeader,
  CardBody,
  Flex,
  HStack,
  LinkOverlay,
  LinkBox,
  IconButton,
  Icon,
  Text,
} from '@chakra-ui/react'

import { Image } from '@chakra-ui/next-js'
import NextImage from 'next/image'
import { IconType } from 'react-icons'

import {
  BsFacebook as FacebookIcon,
  BsTwitter as TwitterIcon,
  BsInstagram as InstagramIcon,
} from 'react-icons/bs'

import Link from './link-as-next-link'

type Social = 'facebook' | 'instagram' | 'twitter'

type SocialIcons = Record<Social, IconType>

const socialIcons: SocialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
}

interface Partner {
  logo: StaticImageData
  url: string
  socials: Partial<Record<Social, string>>
  contacts: Record<string, string>
  descriptions: Partial<Record<LOCALE_TYPE, string>>
}

const partners: Record<PARTNER_NAME_TYPE, Partner> = {
  'Asociación Amigos de Europa': {
    logo: amigosDeEuropaLogo,
    url: 'https://amigosdeeuropa.eu/',
    socials: {
      facebook: 'https://www.facebook.com/amigosdeeuropa',
      instagram: 'https://www.instagram.com/amigos.de.europa/',
    },
    contacts: {
      'Elena Pasiakou': 'https://www.facebook.com/elena.pasiakou/',
    },
    descriptions: {
      en: `Amigos de Europa is an experienced organisation from Andalusia that aims to support the development of young people and people from rural areas or disadvantaged backgrounds. Amigos de Europa works as a large umbrella organisation or informal network that includes more than 30 municipalities, sports clubs, NGOs with different backgrounds and schools. We have come a long way since the beginning and we continue to grow thanks to the trust and support of our international and Spanish partners involved in our projects.`,
      it: `Amigos de Europa è un'organizzazione spagnola con esperienza che mira a sostenere lo sviluppo dei giovani e delle persone provenienti da aree rurali o da contesti svantaggiati. Amigos de Europa lavora come una grande organizzazione ombrello e una rete informale che comprende più di 30 comuni, club sportivi, ONG di diversa estrazione e scuole. Abbiamo fatto molta strada dall'inizio e continuiamo a crescere grazie alla fiducia e al sostegno dei nostri partner internazionali e spagnoli che partecipano ai nostri progetti.`,
    },
  },
  'Фондация "ДА"': {
    logo: gaLogo,
    url: 'https://dafoundation.bg/',
    socials: {},
    contacts: {},
    descriptions: {},
  },
  'Asociación Guaraní': {
    logo: guaraniLogo,
    url: 'https://www.asociacionguarani.com/',
    socials: {
      facebook: 'https://www.facebook.com/guarani.es',
      instagram: 'https://www.instagram.com/guarani.ong/',
      twitter: 'https://twitter.com/guaraniorg',
    },
    contacts: {
      'José Guaraní': 'https://www.facebook.com/guarani.aso',
    },
    descriptions: {
      en: `Founded in 2006, GUARANI is a non-profit organisation made up of multidisciplinary professionals of different nationalities. Its mission is to develop projects for the well-being and integration of young people, women, refugees, asylum seekers and other groups at risk of social exclusion. Throughout its professional history, Guaraní has adapted to social changes in order to develop an intervention model based on the specific needs of vulnerable people and respecting their autonomy and freedom.`,
      it: `Fondata nel 2006, GUARANI è un'organizzazione no-profit composta da professionisti multidisciplinari di diverse nazionalità. La sua missione è sviluppare progetti per il benessere e l'integrazione di giovani, donne, rifugiati, richiedenti asilo e altri gruppi a rischio di esclusione sociale. Nel corso della sua storia professionale, Guaraní si è adattata ai cambiamenti sociali per sviluppare un modello di intervento basato sui bisogni specifici delle persone vulnerabili, nel rispetto della loro autonomia e libertà.`,
    },
  },
  'ΑμΚΕ ΙΑΣΙΣ': {
    logo: iasisLogo,
    url: 'https://www.iasismed.eu/',
    socials: {
      facebook: 'https://www.facebook.com/iasis.athens',
      instagram: 'https://www.instagram.com/iasis_gr/',
    },
    contacts: {
      'Eva Diamanti': 'https://www.facebook.com/eva.diamantis/',
      'Elena Spr': 'https://www.facebook.com/elena.spr.7',
    },
    descriptions: {
      en: `IASIS is an organisation working in the field of social inclusion, mental health and deinstitutionalisation. Its main objective is to provide psychosocial support and training to people who are either excluded or at risk of exclusion, as well as to adult professionals in the humanitarian field. The organisation has also developed a strong network across Europe through which research and training programmes have been implemented. IASIS has also established an Integrated Centre for Psychosocial Education & Training and is certified as a Vocational Training Centre.`,
      it: `IASIS è un'organizzazione che opera nel campo dell'inclusione sociale, della salute mentale e della deistituzionalizzazione. Il suo obiettivo principale è fornire supporto psicosociale e formazione alle persone escluse o a rischio di esclusione, nonché ai professionisti adulti nel campo umanitario. L'organizzazione ha inoltre sviluppato una rete in tutta Europa attraverso la quale sono stati implementati programmi di ricerca e formazione. IASIS ha inoltre istituito un Centro integrato per l'educazione e la formazione psicosociale ed è certificato come Centro di formazione professionale.`,
    },
  },
  'Per Esempio ONLUS': {
    logo: perEsempioLogo,
    url: 'https://peresempionlus.org/',
    socials: {},
    contacts: {},
    descriptions: {
      en: `Per Esempio Onlus is a non-profit organisation founded in Palermo in 2011. The organisation is inspired by values and practices aimed at cultural, social and ethical development by promoting the active participation of individuals and civil society. Per Esempio works mainly in the fields of education, mobility, women's empowerment, volunteering and integration of people with a migration background.`,
      it: `Per Esempio Onlus è un'organizzazione non profit fondata a Palermo nel 2011. L'organizzazione si ispira a valori e pratiche volte allo sviluppo culturale, sociale ed etico, promuovendo la partecipazione attiva degli individui e della società civile. Per Esempio opera principalmente nei settori dell'educazione, della mobilità, dell'empowerment femminile, del volontariato e dell'integrazione di persone con background migratorio.`,
    },
  },
}

export default function Partners({ locale }: { locale: LOCALE_TYPE }) {
  return (
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
              <LinkOverlay as={Link} href={partnerInfo.url}>
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
                    <Link key={socialType} href={socialUrl}>
                      <IconButton
                        size='md'
                        variant='ghost'
                        icon={
                          <Icon
                            as={socialIcons[socialType as keyof SocialIcons]}
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
                    </Link>
                  ),
                )}
              </HStack>
            </Flex>
          </CardHeader>
          <CardBody as={Flex} justify='center' direction='column'>
            <Text fontSize={['sm', 'md', 'lg']}>
              {partnerInfo.descriptions[locale] ?? partnerInfo.descriptions.en}
            </Text>
          </CardBody>
        </Card>
      ))}
    </VStack>
  )
}

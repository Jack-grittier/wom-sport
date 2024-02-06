import Head from 'next/head'

import { Text, Flex } from '@chakra-ui/react'

import Layout from '../components/layout'
import Section from '../components/section'
import SectionWithHeading from '../components/section-with-heading'
import FixedWidthContainer from '../components/fixed-width-container'
import Banner from '../components/banner'

import Partners from '../components/partners'
import { useRouter } from 'next/router'
import { LanguageCodeEnum } from '../lib/gql/graphql'
import { localeToCode } from '../lib/util'

// TODO: Send a PR to chakra to update docs about next/image and next/link
// (image should say next / image includes nextjs image opt, link should use import from chakra-ui/next-js
// TODO: Open issue about src type autocomplete in chakra image (should accept StaticImageData)

const projectDescription: Record<LanguageCodeEnum, string> = {
  EN: `WES - WomenEmpSport is a project developed under the Erasmus+ programme.
  The main objective of the project is the social inclusion and empowerment of women in vulnerable situations through the promotion of personal and sporting skills. All the activities of the project are focused on this objective, addressing different aspects and two of the main actors involved in the sector: both the professionals working for the inclusion of these women and the women at risk of exclusion themselves.
  `,
  IT: `WES - WomenEmpSport è un progetto sviluppato nell'ambito del programma Erasmus+.
  Obiettivo principale del progetto è l'inclusione sociale e l'empowerment delle donne in situazioni vulnerabili attraverso la promozione delle competenze personali e sportive. Tutte le attività del progetto si concentrano su questo obiettivo, affrontando diversi aspetti e mettendo al centro due dei principali attori coinvolti nel settore: le/i professioniste/i che lavorano per l'inclusione delle donne e  le donne stesse a rischio di esclusione.
  `,
  ES: `WES - WomenEmpSport es un proyecto desarrollado en el marco del programa Erasmus+. 
  El objetivo principal del proyecto es la inclusión social y el empoderamiento de las mujeres en situación de vulnerabilidad a través de la promoción de habilidades personales y deportivas. Todas las actividades del proyecto se centran en este objetivo, abordando diferentes aspectos y dos de los principales actores implicados en el sector: tanto los profesionales que trabajan por la inclusión de estas mujeres como las propias mujeres en riesgo de exclusión.
  `,
  BG: `WES - WomenEmpSport е проект, разработен по програмата Erasmus+. 
  Главната цел на проекта е социализация и подкрепа на жени в уязвими ситуации, чрез насърчаване на лични и спортни умения. Всички дейности  по проекта са фокусирани върху тази цел, включвайки различни аспекти и двамата главни участници в плана: професионалистите, които ще работят за социализирането на тези жени и самите жени, в риск от изолация.
  `,
  EL: `WES - WomenEmpSport είναι ένα έργο που αναπτύχθηκε στο πλαίσιο του προγράμματος Erasmus+.
  Κύριος στόχος του έργου είναι η κοινωνική ένταξη και ενδυνάμωση των γυναικών σε ευάλωτες καταστάσεις μέσω της προώθησης προσωπικών και αθλητικών δεξιοτήτων. Όλες οι δραστηριότητες του έργου επικεντρώνονται σε αυτόν τον στόχο, αντιμετωπίζοντας διαφορετικές πτυχές και δύο από τους κύριους παράγοντες που εμπλέκονται στον τομέα: τόσο τους επαγγελματίες που εργάζονται για την ένταξη αυτών των γυναικών όσο και τις ίδιες τις γυναίκες που κινδυνεύουν να αποκλειστούν.
  `,
}

interface IndexProps {
  preview: boolean
}

export default function Index({ preview }: IndexProps) {
  const { locale, defaultLocale } = useRouter()
  const description =
    projectDescription[localeToCode(locale)] ??
    projectDescription[localeToCode(defaultLocale)]
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`WomEmpSports Home`}</title>
      </Head>
      <Flex align='center' as='article' direction='column'>
        <Banner />
        <FixedWidthContainer>
          <SectionWithHeading
            id='project-description'
            title='About This Project'
          >
            {description.split('\n').map((paragraph, i) => (
              <Text key={i}>{paragraph}</Text>
            ))}
          </SectionWithHeading>
          <SectionWithHeading id='partners' title='Our Partners'>
            <Section id='partners-description-list'>
              <Partners />
            </Section>
          </SectionWithHeading>
        </FixedWidthContainer>
      </Flex>
    </Layout>
  )
}

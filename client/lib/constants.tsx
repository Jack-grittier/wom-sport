import { StaticImageData } from 'next/image'

import amigosDeEuropaLogo from '../public/images/partners/amigos_de_europa-logo.png'
import gaLogo from '../public/images/partners/ga-logo.png'
import guaraniLogo from '../public/images/partners/guarani-logo.png'
import iasisLogo from '../public/images/partners/iasis-logo.png'
import perEsempioLogo from '../public/images/partners/per_esempio-logo.png'
import { ListItem, OrderedList, Text } from '@chakra-ui/react'

export interface Partner {
  logo: StaticImageData
  descriptions: Partial<Record<keyof Languages, React.ReactElement>>
  url: string
  socials: Partial<Record<'facebook' | 'instagram' | 'twitter', string>>
  contacts: Record<string, string>
}

export const partners: Record<string, Partner> = {
  'Asociación Amigos de Europa': {
    logo: amigosDeEuropaLogo,
    descriptions: {
      eng: (
        <Text fontSize={['sm', 'md', 'lg']}>
          {`Amigos de Europa is an experienced organization from Andalusia that
          aims to support the development of youngsters and people coming from
          rural areas or disadvantaged backgrounds. We are involved in Erasmus+
          K1 and K2 projects, ESC with an experience of more than 8 years and
          the organization has become a reference for the European and
          international projects in our region. Nowadays, Amigos de Europa
          functions as a big umbrella organization or informal network which
          includes more than 30 municipalities, sports clubs, NGOs with
          different backgrounds, and schools. We came a long way since the
          beginning and we continue to grow thanks to the trust and support of
          both our international and Spanish partners that are involved in our
          projects. Amigos de Europa is part of the Anna Lindh Foundation, EYF,
          and a Multiplier Point of Eurodesk. Furthermore, Amigos De Europa has
          gained the Youth Accreditation for the new Erasmus+ program and the
          European Solidarity Corps Quality Label.`}
        </Text>
      ),
    },
    url: 'https://amigosdeeuropa.eu/',
    socials: {
      facebook: 'https://www.facebook.com/amigosdeeuropa',
      instagram: 'https://www.instagram.com/amigos.de.europa/',
    },
    contacts: {
      'Elena Pasiakou': 'https://www.facebook.com/elena.pasiakou/',
    },
  },
  'Фондация "ДА"': {
    logo: gaLogo,
    descriptions: {
      eng: <></>,
    },
    url: 'https://dafoundation.bg/',
    socials: {},
    contacts: {},
  },
  'Asociación Guaraní': {
    logo: guaraniLogo,
    descriptions: {
      eng: (
        <Text fontSize={['sm', 'md', 'lg']}>
          {`Founded in 2006, GUARANI is a non-profit organisation made up of
          multidisciplinary professionals of different nationalities. Its
          mission is to develop projects for the well-being and integration of
          young people, women, refugees, asylum seekers and other groups at risk
          of social exclusion. Throughout its professional history, Guaraní has
          adapted to social changes in order to develop an intervention model
          based on the specific needs of vulnerable people and respecting their
          autonomy and freedom.`}
        </Text>
      ),
    },
    url: 'https://www.asociacionguarani.com/',
    socials: {
      facebook: 'https://www.facebook.com/guarani.es',
      instagram: 'https://www.instagram.com/guarani.ong/',
      twitter: 'https://twitter.com/guaraniorg',
    },
    contacts: {
      'José Guaraní': 'https://www.facebook.com/guarani.aso',
    },
  },
  'ΑμΚΕ ΙΑΣΙΣ': {
    logo: iasisLogo,
    descriptions: {
      eng: (
        <>
          <Text fontSize={['sm', 'md', 'lg']}>
            {`IASIS is an organization active in the field of Social Inclusion,
            Mental Health and De-institutionalization, which actively
            participates in the psychiatric reform promoted by the Ministry of
            Health and Social Solidarity and the European Union. The
            organization's main objective is to provide psychosocial support and
            education to people who either belong into the range of or are at
            risk of exclusion and to adult professionals in the humanitarian
            field. The organization has also developed a strong network across
            Europe, through which there have been designed and implemented
            dozens of Research & Educational Programs in the context of European
            and national frameworks. The last step to establish IASIS NGO as an
            integrated Center for Psychosocial Education & Training is its
            certification as a VET Centre by the Greek National Accreditation
            Organization, a process that warrants the organization as an
            institution for professional development of both beneficiaries and
            professionals. IASIS has been providing support to anyone in need
            for 17 years:`}
          </Text>
          <OrderedList fontSize={['sm', 'md', 'lg']} pl={5} lineHeight='tall'>
            <ListItem>
              {`People with mental health problems, through the operation of
              Boarding Houses, Sheltered Apartments, Day Centers and our
              Integrated Community Therapy Service.`}
            </ListItem>
            <ListItem>
              {`Homelessness and Poverty Action with the operation of a Day
              Center for Homeless people with a total annual capacity of 1,000
              people, and 72 sheltered apartments for homeless people in
              Chalkida and Attica region. In addition, through the Fabric
              Republic project, we provided over 20 tons of clothing to socially
              vulnerable groups.`}
            </ListItem>
            <ListItem>
              {`Women victims of violence, by creating a support service for 200
              women.`}
            </ListItem>
            <ListItem>
              {`Asylum Seekers with the Psychosocial Service at the Schisto Camp
              with a focus on women, the operation of Elaionas camp in Attica
              region, two Shelters with a capacity of 70 persons and 350 persons
              respectively under the supervision and funding of the UN High
              Commissioner for Refugees, a Shelter for unaccompanied minors,
              with a capacity of 100 children - victims of war and single parent
              families.`}
            </ListItem>
            <ListItem>
              {`Professionals in the Humanitarian and Educational sector,
              training of over 7,500 professionals and students in over 90
              different training packages created by our research and
              development team.`}
            </ListItem>
            <ListItem>
              {`Children and Youngsters, through Epikentro Service, and the
              CONNECT YOUR CITY Youth Centers and Mobile Application, and the
              hosting of European Volunteers (European Solidarity Corps) who
              participate in the NGO's programs for six months.`}
            </ListItem>
          </OrderedList>
        </>
      ),
    },
    url: 'https://www.iasismed.eu/',
    socials: {
      facebook: 'https://www.facebook.com/iasis.athens',
      instagram: 'https://www.instagram.com/iasis_gr/',
    },
    contacts: {
      'Eva Diamanti': 'https://www.facebook.com/eva.diamantis/',
      'Elena Spr': 'https://www.facebook.com/elena.spr.7',
    },
  },
  'Per Esempio ONLUS': {
    logo: perEsempioLogo,
    descriptions: {
      eng: (
        <Text fontSize={['sm', 'md', 'lg']}>
          {`Per Esempio Onlus is a non-profit organisation founded in Palermo in
          2011. The organisation is inspired by values and practices aimed at
          cultural, social and ethical development by promoting the active
          participation of individuals and civil society. Per Esempio works
          mainly in the fields of education, mobility, women's empowerment,
          volunteering and integration of people with a migration background.`}
        </Text>
      ),
      ita: (
        <Text fontSize={['sm', 'md', 'lg']}>
          {`Per Esempio Onlus è un'organizzazione non profit fondata a Palermo nel
          2011. L'organizzazione si ispira a valori e pratiche volte allo
          sviluppo culturale, sociale ed etico, promuovendo la partecipazione
          attiva degli individui e della società civile. Per Esempio opera
          principalmente nei settori dell'educazione, della mobilità,
          dell'empowerment femminile, del volontariato e dell'integrazione di
          persone con background migratorio.`}
        </Text>
      ),
    },
    url: 'https://peresempionlus.org/',
    socials: {},
    contacts: {},
  },
} as const

export type Partners = typeof partners

export const CMS_NAME = 'WordPress'
export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**WordPress**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%2C%253C%253Fxml+version%3D%271.0%27+encoding%3D%27UTF-8%27%253F%253E%253Csvg+preserveAspectRatio%3D%27xMidYMid%27+version%3D%271.1%27+viewBox%3D%270+0+256+255%27+xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%253E%253Cg+fill%3D%27%2523464342%27%253E%253Cpath+d%3D%27m18.124+127.5c0+43.295+25.161+80.711+61.646+98.441l-52.176-142.96c-6.0691+13.603-9.4699+28.657-9.4699+44.515zm183.22-5.5196c0-13.518-4.8557-22.88-9.0204-30.166-5.5446-9.01-10.742-16.64-10.742-25.65+0-10.055+7.6259-19.414+18.367-19.414+0.48494+0+0.94491+0.060358+1.4174+0.087415-19.46-17.828-45.387-28.714-73.863-28.714-38.213+0-71.832+19.606-91.39+49.302+2.5662+0.077008+4.9847+0.13112+7.039+0.13112+11.441+0+29.151-1.3882+29.151-1.3882+5.8963-0.34758+6.5915+8.3127+0.7014+9.01+0+0-5.9255+0.69724-12.519+1.0427l39.832+118.48+23.937-71.79-17.042-46.692c-5.8901-0.3455-11.47-1.0427-11.47-1.0427-5.8942-0.3455-5.2033-9.3575+0.69099-9.01+0+0+18.064+1.3882+28.811+1.3882+11.439+0+29.151-1.3882+29.151-1.3882+5.9005-0.34758+6.5936+8.3127+0.7014+9.01+0+0-5.938+0.69724-12.519+1.0427l39.528+117.58+10.91-36.458c4.7287-15.129+8.3273-25.995+8.3273-35.359zm-71.921+15.087l-32.818+95.363c9.7988+2.8805+20.162+4.4561+30.899+4.4561+12.738+0+24.953-2.202+36.323-6.2002-0.29346-0.46829-0.55987-0.96572-0.77841-1.5069l-33.625-92.112zm94.058-62.046c0.47037+3.4841+0.73678+7.2242+0.73678+11.247+0+11.1-2.073+23.577-8.3169+39.178l-33.411+96.599c32.518-18.963+54.391-54.193+54.391-94.545+0.002081-19.017-4.8557-36.899-13.399-52.48zm-95.977-75.023c-70.304+0-127.5+57.196-127.5+127.5+0+70.313+57.2+127.51+127.5+127.51+70.302+0+127.51-57.194+127.51-127.51-0.002082-70.304-57.209-127.5-127.51-127.5zm0+249.16c-67.08+0-121.66-54.578-121.66-121.66+0-67.08+54.576-121.65+121.66-121.65+67.078+0+121.65+54.574+121.65+121.65+0+67.084-54.574+121.66-121.65+121.66z%27%2F%253E%253C%2Fg%253E%253C%2Fsvg%253E'

export const languages = {
  bul: 'Български',
  ell: 'Ελληνικά',
  eng: 'English',
  ita: 'Italiano',
  spa: 'Español',
}

export type Languages = typeof languages

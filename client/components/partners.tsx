import { StaticImageData } from 'next/image'

import amigosDeEuropaLogo from '../public/images/partners/amigos_de_europa-logo.png'
import gaLogo from '../public/images/partners/ga-logo.png'
import guaraniLogo from '../public/images/partners/guarani-logo.png'
import iasisLogo from '../public/images/partners/iasis-logo.png'
import perEsempioLogo from '../public/images/partners/per_esempio-logo.png'
import { LanguageCodeEnum } from '../lib/gql/graphql'
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

import { Image, Link } from '@chakra-ui/next-js'
import NextImage from 'next/image'
import { IconType } from 'react-icons'

import {
  BsFacebook as FacebookIcon,
  BsTwitter as TwitterIcon,
  BsInstagram as InstagramIcon,
} from 'react-icons/bs'
import { FiMail as EmailIcon } from 'react-icons/fi'

import { useRouter } from 'next/router'

type Social = 'facebook' | 'instagram' | 'twitter' | 'email'

type SocialIcons = Record<Social, IconType>

const socialIcons: SocialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  email: EmailIcon,
}

interface Partner {
  name: string
  logo: StaticImageData
  url: string
  socials: Partial<Record<Social, string>>
  contacts: Record<string, string>
  descriptions: Record<LanguageCodeEnum, string>
}

const partners: Partner[] = [
  {
    name: 'Asociación Amigos de Europa',
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
      EN: `Amigos de Europa is an experienced organisation from Andalusia that aims to support the development of young people and people from rural areas or disadvantaged backgrounds. Amigos de Europa works as a large umbrella organisation or informal network that includes more than 30 municipalities, sports clubs, NGOs with different backgrounds and schools. We have come a long way since the beginning and we continue to grow thanks to the trust and support of our international and Spanish partners involved in our projects.`,
      IT: `Amigos de Europa è un'organizzazione spagnola con esperienza che mira a sostenere lo sviluppo dei giovani e delle persone provenienti da aree rurali o da contesti svantaggiati. Amigos de Europa lavora come una grande organizzazione ombrello e una rete informale che comprende più di 30 comuni, club sportivi, ONG di diversa estrazione e scuole. Abbiamo fatto molta strada dall'inizio e continuiamo a crescere grazie alla fiducia e al sostegno dei nostri partner internazionali e spagnoli che partecipano ai nostri progetti.`,
      ES: `Amigos de Europa es una experimentada organización andaluza cuyo objetivo es apoyar el desarrollo de los jóvenes y las personas de zonas rurales o entornos desfavorecidos. Amigos de Europa funciona como una gran organización paraguas o red informal que incluye a más de 30 municipios, clubes deportivos, ONG de diferentes orígenes y escuelas. Hemos recorrido un largo camino desde el principio y seguimos creciendo gracias a la confianza y el apoyo de nuestros socios internacionales y españoles que participan en nuestros proyectos.`,
      BG: `Amigos de Europa е опитна организация от Андалусия, която цели да подкрепя развитието на младите хора и хора от селските райони, които имат непривилигирован произход или са завършили такива училища. Amigos de Europa  работи като голяма организация – чадър, или неформална мрежа, която включва повече от 30 общини, спортни клубове, неправителствени организации с различен произход. Изминали сме дълъг път от началото и ние продължаваме да се развиваме благодарение на доверието и подкрепата от нашите международни и испански партньори, участващи в проектите.`,
      EL: `Ο Amigos de Europa είναι ένας έμπειρος οργανισμός από την Ανδαλουσία που στοχεύει να υποστηρίξει την ανάπτυξη νέων και ατόμων από αγροτικές περιοχές ή μειονεκτούντα περιβάλλοντα. Ο Amigos de Europa λειτουργεί ως ένας μεγάλος οργανισμός-ομπρέλα ή άτυπο δίκτυο που περιλαμβάνει περισσότερους από 30 δήμους, αθλητικούς συλλόγους, ΜΚΟ με διαφορετικό υπόβαθρο και σχολεία. Έχουμε διανύσει πολύ δρόμο από την αρχή και συνεχίζουμε να αναπτυσσόμαστε χάρη στην εμπιστοσύνη και την υποστήριξη των διεθνών και Ισπανών εταίρων μας που συμμετέχουν στα έργα μας.`,
    },
  },
  {
    name: 'Фондация "ДА"',
    logo: gaLogo,
    url: 'https://dafoundation.bg/',
    socials: {
      facebook: 'www.facebook.com/DA.Foundation.against.violance',
      email: 'mailto:office@dafoundation.bg',
    },
    contacts: {},
    descriptions: {
      EN: `Our mission is to work towards the protection and empowerment of women and girls in all spheres of public and private life so that they realize their full potential in a just and unbiased society. The issues we devote our efforts to are combating the historical gender inequalities which assign women and girls a subordinate role in society and the family, making their contribution and participation unrecognized and undervalued.`,
      IT: `La nostra missione è lavorare per la protezione e l'emancipazione di donne e ragazze in tutte le sfere della vita pubblica e privata, affinché realizzino il loro pieno potenziale in una società giusta e imparziale. I temi a cui dedichiamo i nostri sforzi sono la lotta alle storiche disuguaglianze di genere che attribuiscono a donne e ragazze un ruolo subordinato nella società e nella famiglia, rendendo il loro contributo e la loro partecipazione non riconosciuta e sottovalutata.`,
      BG: `Нашата мисия е да работим за защита и овластяване на жените и момичетата във всички сфери на обществения и личния живот, така че те да реализират пълния си потенциал в едно справедливо и безпристрастно общество. Проблемите, на които посвещаваме усилията си, са борбата с историческите неравенства между половете, които отреждат на жените и момичетата подчинена роля в обществото и семейството, правейки техния принос и участие непризнати и подценени.`,
      ES: `Nuestra misión es trabajar por la protección y el empoderamiento de las mujeres y las niñas en todas las esferas de la vida pública y privada para que desarrollen todo su potencial en una sociedad justa y sin prejuicios. Los temas a los que dedicamos nuestros esfuerzos son la lucha contra las desigualdades históricas de género que asignan a las mujeres y las niñas un papel subordinado en la sociedad y la familia, haciendo que su contribución y participación no sean reconocidas ni valoradas.`,
      EL: `Η αποστολή μας είναι να εργαστούμε για την προστασία και την ενδυνάμωση των γυναικών και των κοριτσιών σε όλους τους τομείς της δημόσιας και ιδιωτικής ζωής, ώστε να αξιοποιήσουν πλήρως τις δυνατότητές τους σε μια δίκαιη και αμερόληπτη κοινωνία. Τα ζητήματα στα οποία αφιερώνουμε τις προσπάθειές μας είναι η καταπολέμηση των ιστορικών ανισοτήτων των φύλων που αναθέτουν στις γυναίκες και τα κορίτσια υποδεέστερο ρόλο στην κοινωνία και την οικογένεια, καθιστώντας τη συμβολή και τη συμμετοχή τους παραγνωρισμένη και υποτιμημένη.`,
    },
  },
  {
    name: 'Asociación Guaraní',
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
      EN: `Founded in 2006, GUARANI is a non-profit organisation made up of multidisciplinary professionals of different nationalities. Its mission is to develop projects for the well-being and integration of young people, women, refugees, asylum seekers and other groups at risk of social exclusion. Throughout its professional history, Guaraní has adapted to social changes in order to develop an intervention model based on the specific needs of vulnerable people and respecting their autonomy and freedom.`,
      IT: `Fondata nel 2006, GUARANI è un'organizzazione no-profit composta da professionisti multidisciplinari di diverse nazionalità. La sua missione è sviluppare progetti per il benessere e l'integrazione di giovani, donne, rifugiati, richiedenti asilo e altri gruppi a rischio di esclusione sociale. Nel corso della sua storia professionale, Guaraní si è adattata ai cambiamenti sociali per sviluppare un modello di intervento basato sui bisogni specifici delle persone vulnerabili, nel rispetto della loro autonomia e libertà.`,
      ES: `Fundada en 2006, GUARANI es una organización sin ánimo de lucro formada por profesionales multidisciplinares de distintas nacionalidades. Su misión es desarrollar proyectos para el bienestar y la integración de jóvenes, mujeres, refugiados, solicitantes de asilo y otros colectivos en riesgo de exclusión social. A lo largo de su trayectoria profesional, Guaraní se ha adaptado a los cambios sociales para desarrollar un modelo de intervención basado en las necesidades específicas de las personas vulnerables y respetando su autonomía y libertad.`,
      BG: `Основана през 2006, GUARANI е неправителствената организация, състояща се от мултидисциплинарни специалисти от различни националности. Тяхната мисия е да разработват проекти за благополучието  и интеграцията на млади хора, жени, бежанци, търсещи убежище и други групи, в риск от социална изолация. През професионалната си история GUARANI се е адаптирала към социалните промени, за да разработи модел за интервенция, основана на специфичните нужди на уязвими хора и уважавайки тяхната автономия и свобода.`,
      EL: `Ιδρύθηκε το 2006, o GUARANI είναι ένας μη κερδοσκοπικός οργανισμός που αποτελείται από πολυεπιστημονικούς επαγγελματίες διαφορετικών εθνικοτήτων. Αποστολή του είναι να αναπτύξει έργα για την ευημερία και την ένταξη των νέων, των γυναικών, των προσφύγων, των αιτούντων άσυλο και άλλων ομάδων που διατρέχουν κίνδυνο κοινωνικού αποκλεισμού. Καθ' όλη τη διάρκεια της επαγγελματικής του ιστορίας, ο Guaraní προσαρμόστηκε στις κοινωνικές αλλαγές προκειμένου να αναπτύξει ένα μοντέλο παρέμβασης που βασίζεται στις συγκεκριμένες ανάγκες των ευάλωτων ατόμων και σεβόμενο την αυτονομία και την ελευθερία τους.`,
    },
  },
  {
    name: 'ΑμΚΕ ΙΑΣΙΣ',
    logo: iasisLogo,
    url: 'https://www.iasismed.eu/',
    socials: {
      facebook: 'https://www.facebook.com/iasis.athens',
      instagram: 'https://www.instagram.com/iasis_gr/',
    },
    contacts: {
      'Elena Spr': 'https://www.facebook.com/elena.spr.7',
    },
    descriptions: {
      EN: `IASIS is an organisation working in the field of social inclusion, mental health and deinstitutionalisation. Its main objective is to provide psychosocial support and training to people who are either excluded or at risk of exclusion, as well as to adult professionals in the humanitarian field. The organisation has also developed a strong network across Europe through which research and training programmes have been implemented. IASIS has also established an Integrated Centre for Psychosocial Education & Training and is certified as a Vocational Training Centre.`,
      IT: `IASIS è un'organizzazione che opera nel campo dell'inclusione sociale, della salute mentale e della deistituzionalizzazione. Il suo obiettivo principale è fornire supporto psicosociale e formazione alle persone escluse o a rischio di esclusione, nonché ai professionisti adulti nel campo umanitario. L'organizzazione ha inoltre sviluppato una rete in tutta Europa attraverso la quale sono stati implementati programmi di ricerca e formazione. IASIS ha inoltre istituito un Centro integrato per l'educazione e la formazione psicosociale ed è certificato come Centro di formazione professionale.`,
      ES: `IASIS es una organización que trabaja en el campo de la inclusión social, la salud mental y la desinstitucionalización. Su principal objetivo es proporcionar apoyo psicosocial y formación a personas excluidas o en riesgo de exclusión, así como a profesionales adultos del ámbito humanitario. La organización también ha desarrollado una sólida red en toda Europa a través de la cual se han llevado a cabo programas de investigación y formación. IASIS también ha creado un Centro Integrado de Educación y Formación Psicosocial y está certificado como Centro de Formación Profesional.`,
      BG: `IASIS е организация, която работи в сферата на социална интеграция, психичното здраве и деинституционализацията. Главната ѝ цел е да осигури психологическа подкрепа и обучение на хора, които са изолирани или в риск от изолация, както и  на професионалисти в хуманитарната сфера. Организацията е разработила здрава мрежа в Европа, чрез която проучванията и обучителните програми са били приложени.  IASIS също е основала Интеграционен център за психологично образование и обучение и е сертифицирана като обучителен център.`,
      EL: `Η ΑμΚΕ ΙΑΣΙΣ είναι ένας οργανισμός που δραστηριοποιείται στον τομέα της κοινωνικής ένταξης, της ψυχικής υγείας και της αποϊδρυματοποίησης. Κύριος στόχος της είναι η παροχή ψυχοκοινωνικής υποστήριξης και εκπαίδευσης σε άτομα που είτε βρίσκονται σε αποκλεισμό είτε σε κίνδυνο αποκλεισμού, καθώς και σε ενήλικες επαγγελματίες στον ανθρωπιστικό τομέα. Ο οργανισμός έχει επίσης αναπτύξει ένα ισχυρό δίκτυο σε όλη την Ευρώπη μέσω του οποίου έχουν υλοποιηθεί προγράμματα έρευνας και κατάρτισης. Η ΑμΚΕ ΙΑΣΙΣ έχει επίσης ιδρύσει Ολοκληρωμένο Κέντρο Ψυχοκοινωνικής Εκπαίδευσης & Κατάρτισης και είναι πιστοποιημένο ως Κέντρο Επαγγελματικής Κατάρτισης.`,
    },
  },
  {
    name: 'Per Esempio ONLUS',
    logo: perEsempioLogo,
    url: 'https://peresempionlus.org/',
    socials: {},
    contacts: {},
    descriptions: {
      EN: `Per Esempio Onlus is a non-profit organisation founded in Palermo in 2011. The organisation is inspired by values and practices aimed at cultural, social and ethical development by promoting the active participation of individuals and civil society. Per Esempio works mainly in the fields of education, mobility, women's empowerment, volunteering and integration of people with a migration background.`,
      IT: `Per Esempio Onlus è un'organizzazione non profit fondata a Palermo nel 2011. L'organizzazione si ispira a valori e pratiche volte allo sviluppo culturale, sociale ed etico, promuovendo la partecipazione attiva degli individui e della società civile. Per Esempio opera principalmente nei settori dell'educazione, della mobilità, dell'empowerment femminile, del volontariato e dell'integrazione di persone con background migratorio.`,
      ES: `Per Esempio Onlus es una organización sin ánimo de lucro fundada en Palermo en 2011. La organización se inspira en valores y prácticas orientadas al desarrollo cultural, social y ético mediante el fomento de la participación activa de las personas y la sociedad civil. Per Esempio trabaja principalmente en los ámbitos de la educación, la movilidad, el empoderamiento de la mujer, el voluntariado y la integración de personas de origen inmigrante.`,
      BG: `Per Esempio Onlus е неправителствена организация, основана в Палермо през 2011 г. Организацията е вдъхновена от ценности и практини, насочени към културно, социално и морално развитие, като насърчава активното участие на отделната личност и гражданското общество. Per Esempio работи предимно в сферата на образованието, мобилността, подкрепата на жените, доброволчеството и интеграцията на лица с мигрантски произход.`,
      EL: `O Per Esempio Onlus είναι ένας μη κερδοσκοπικός οργανισμός που ιδρύθηκε στο Παλέρμο το 2011. Ο οργανισμός εμπνέεται από αξίες και πρακτικές που στοχεύουν στην πολιτιστική, κοινωνική και ηθική ανάπτυξη, προωθώντας την ενεργό συμμετοχή των ατόμων και της κοινωνίας των πολιτών. O Per Esempio εργάζεται κυρίως στους τομείς της εκπαίδευσης, της κινητικότητας, της ενδυνάμωσης των γυναικών, του εθελοντισμού και της ένταξης ατόμων με μεταναστευτικό υπόβαθρο.`,
    },
  },
]

export default function Partners() {
  const { locale, defaultLocale } = useRouter()
  const languageCode = locale.toUpperCase() as LanguageCodeEnum
  const defaultLanguageCode = defaultLocale.toUpperCase() as LanguageCodeEnum
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
            p={0}
          >
            <Flex direction='column' align='center' p={5}>
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
              {partnerInfo.descriptions[languageCode] ??
                partnerInfo.descriptions[defaultLanguageCode]}
            </Text>
          </CardBody>
        </Card>
      ))}
    </VStack>
  )
}

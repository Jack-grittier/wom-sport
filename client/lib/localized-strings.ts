import { LanguageCodeEnum } from './gql/graphql'

export type LocalizedStrings = Record<LanguageCodeEnum, string>

export interface LocalizedTitles {
  home: LocalizedStrings
  news: LocalizedStrings
  resources: LocalizedStrings
}
export interface LocalizedHeadings {
  description: LocalizedStrings
  partners: LocalizedStrings
}
export interface LocalizedMissingContent {
  articles: LocalizedStrings
  resources: LocalizedStrings
}

export const titles: LocalizedTitles = {
  home: {
    EN: `Home`,
    IT: `Home`,
    ES: `Inicio`,
    BG: `Начална`,
    EL: `Αρχική`,
  },
  news: {
    EN: `News`,
    IT: `Notizie`,
    ES: `Noticias`,
    BG: `Новини`,
    EL: `Νέα`,
  },
  resources: {
    EN: `Resources`,
    IT: `Risorse`,
    ES: `Recursos`,
    BG: `Ресурси`,
    EL: `Πόροι`,
  },
}

export const headings: LocalizedHeadings = {
  description: {
    EN: `About This Project`,
    IT: `Informazioni su questo progetto`,
    ES: `Acerca de este proyecto`,
    BG: `За този проект`,
    EL: `Σχετικά με αυτό το έργο`,
  },
  partners: {
    EN: `Our Partners`,
    IT: `I nostri partner`,
    ES: `Nuestros socios`,
    BG: `Нашите партньори`,
    EL: `Οι συνεργάτες μας`,
  },
}

export const missingContent: LocalizedMissingContent = {
  articles: {
    EN: `There are currently no articles to show.`,
    IT: `Al momento non ci sono articoli da mostrare.`,
    ES: `Actualmente no hay artículos que mostrar.`,
    BG: `В момента няма статии за показване.`,
    EL: `Προς το παρόν δεν υπάρχουν άρθρα για προβολή.`,
  },
  resources: {
    EN: `There are currently no resources to show.`,
    IT: `Al momento non ci sono risorse da mostrare.`,
    ES: `Actualmente no hay recursos que mostrar.`,
    BG: `В момента няма ресурси за показване.`,
    EL: `Προς το παρόν δεν υπάρχουν πόροι για προβολή.`,
  },
}

export const descriptions: LocalizedStrings = {
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

export const languages: LocalizedStrings = {
  BG: 'Български',
  EL: 'Ελληνικά',
  EN: 'English',
  ES: 'Español (Castellano)',
  IT: 'Italiano',
}

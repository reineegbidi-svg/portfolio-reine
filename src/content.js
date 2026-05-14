/** Portfolio — GBEDENOU FIFI GRACE */
export const site = {
  name: 'GBEDENOU FIFI GRACE',
  shortName: 'Fifi Grace',
}

export const hero = {
  title: 'GBEDENOU FIFI GRACE',
  subtitle:
    'Data Analyst & Développeuse d’applications web & mobiles',
  tagline:
    'Passionnée par l’analyse de données, les statistiques et le développement d’applications modernes.',
  photo: '/images/photo-fifi.jpeg',
  photoAlt: 'Portrait de GBEDENOU Fifi Grace',
  actions: [
    { label: 'Voir mes projets', href: '#projects', variant: 'primary' },
    { label: 'Me contacter', href: '#contact', variant: 'ghost' },
    {
      label: 'Télécharger le CV',
      href: '/assets/CV-GBEDENOU.jpeg',
      variant: 'ghost',
      download: true,
    },
  ],
  stats: [
    { label: 'Parcours', value: 'L3 MI' },
    { label: 'Focus', value: 'Data & dev' },
    { label: 'Localisation', value: 'Lomé' },
  ],
}

export const about = {
  eyebrow: 'À propos',
  title: 'Rigueur analytique, code utile',
  description:
    'Étudiante engagée, je relie statistiques et produits numériques pour des expériences claires et mesurables.',
  paragraphs: [
    'Je suis Gbedenou Fifi Grace, étudiante en Licence 3 Mathématiques–Informatique à l’UCAO-UUT de Sanguera.',
    'Rigoureuse, analytique et motivée, je suis spécialisée dans l’analyse et l’interprétation de données statistiques ainsi que dans le développement d’applications web et mobiles.',
    'Je recherche actuellement un stage ou une opportunité professionnelle afin de mettre mes compétences en pratique et contribuer efficacement à des projets innovants.',
  ],
  cards: [
    { title: 'Approche', text: 'Méthodologie claire, documentation et sens du détail.' },
    { title: 'Stack', text: 'Web, mobile Flutter, bases de données et outils d’analyse.' },
    { title: 'Objectif', text: 'Créer des interfaces utiles et des analyses actionnables.' },
  ],
}

export const languages = [
  { name: 'Français', level: 'Courant' },
  { name: 'Anglais', level: 'Intermédiaire' },
]

export const hobbies = ['Lecture', 'Voyage', 'Musique', 'Cuisine']

export const skillGroups = [
  {
    title: 'Langages',
    items: ['Java', 'JavaScript', 'PHP', 'HTML', 'Python', 'Dart', 'R'],
  },
  {
    title: 'Développement',
    items: ['Développement Web', 'Développement Mobile Flutter', 'Firebase', 'MySQL'],
  },
  {
    title: 'Analyse de données',
    items: [
      'Analyse de données',
      'Statistiques descriptives',
      'Statistiques inférentielles',
      'Visualisation de données',
    ],
  },
  {
    title: 'Outils',
    items: ['Flutter', 'Firebase', 'Figma', 'NetBeans', 'Git/GitHub', 'Tailwind CSS', 'React'],
  },
]

export const projects = [
  {
    title: 'Application de gestion de quincaillerie',
    description: 'Gestion des stocks, ventes et utilisateurs pour un point de vente.',
    tech: ['Java', 'MySQL', 'NetBeans'],
    image: 'https://picsum.photos/seed/quincaillerie/800/520',
    github: null,
    demo: null,
  },
  {
    title: 'Application mobile de gestion de tickets',
    description: 'Suivi des demandes, rôles et synchronisation temps réel.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Figma'],
    image: 'https://picsum.photos/seed/ticketsapp/800/520',
    github: null,
    demo: null,
  },
  {
    title: 'Création de sites web',
    description: 'Sites vitrines et pages dynamiques adaptés au besoin métier.',
    tech: ['PHP', 'HTML'],
    image: 'https://picsum.photos/seed/sitesweb/800/520',
    github: null,
    demo: null,
  },
  {
    title: 'Analyse de données statistiques',
    description: 'Analyse, interprétation et visualisation pour la prise de décision.',
    tech: ['Analyse', 'Interprétation', 'Visualisation'],
    image: 'https://picsum.photos/seed/dataviz/800/520',
    github: null,
    demo: null,
  },
  {
    title: 'Application web de gestion de boutique',
    description: 'Tableau de bord, catalogue et gestion des commandes.',
    tech: ['HTML', 'PHP', 'MySQL'],
    image: 'https://picsum.photos/seed/boutique/800/520',
    github: null,
    demo: null,
  },
]

export const formation = [
  {
    title: 'Licence Mathématiques–Informatique',
    place: 'UCAO-UUT, Sanguera',
    period: 'L3 — en cours 2025-2026',
    current: true,
  },
  {
    title: 'Baccalauréat',
    place: 'Notre-Dame de la Trinité, Hédranawoé',
    period: '2021–2023',
    current: false,
  },
  {
    title: 'BEPC',
    place: 'CPL Le Nouveau Monde, Kégué',
    period: '2016–2020',
    current: false,
  },
  {
    title: 'CEPD',
    place: 'École Baptiste Biblique de Kélegougan',
    period: '2008–2015',
    current: false,
  },
]

export const contact = {
  location: 'Lomé – Kélegougan, Togo',
  email: 'gbedenoufifigrace@gmail.com',
  phones: [
    { label: 'Moov', value: '79 57 18 68', href: 'tel:+22879571868' },
    { label: 'Togocom', value: '71 23 14 44', href: 'tel:+22871231444' },
  ],
  /** Remplacez par vos profils publics lorsque disponibles. */
  social: {
    github: 'https://github.com/fifigrace',
    linkedin: 'https://www.linkedin.com',
  },
  formAction: 'https://formsubmit.co/ajax/gbedenoufifigrace@gmail.com',
}

export const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Parcours', href: '#formation' },
  { label: 'Contact', href: '#contact' },
]

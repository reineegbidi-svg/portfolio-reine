export const site = {
  name: "Reine EGBIDI",
  title: "Étudiante en Développement d’Application",
  tagline: "Développeuse Web & Mobile Passionnée",
  location: "Lomé, Togo",
  email: "reineegbidi@gmail.com",
  phone: "+228 91-11-55-41",
  website: "https://www.reallygreatsite.com",
  social: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com",
  },
} as const;

/** Fichiers placés dans `public/` */
export const assets = {
  profileImage: "/images/Reine-Profile.png",
  cvPdf: "/assets/CV-Reine-EGBIDI.pdf",
} as const;

/** Navigation réduite : le logo renvoie à l’accueil ; le reste du contenu reste sur la page. */
export const navLinks = [
  { id: "about", label: "À propos" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
] as const;

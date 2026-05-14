# Portfolio — Reine EGBIDI

Site vitrine personnel : parcours, compétences, projets, formation, langues / centres d’intérêt et contact.  
Interface **claire** (thème blanc), responsive, animations discrètes (**Framer Motion**).

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion**
- **Lucide React** (icônes)

---

## Prérequis

- **Node.js** 20.x ou plus récent (recommandé)

---

## Installation & commandes

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

| Script            | Action                                      |
|-------------------|---------------------------------------------|
| `npm run dev`     | Serveur de développement Next.js            |
| `npm run build`   | Build de production (`.next/`)            |
| `npm run start`   | Lancer le build en local après `npm run build` |
| `npm run lint`    | ESLint (`eslint-config-next`)               |

---

## Structure du projet

| Dossier / fichier   | Rôle |
|---------------------|------|
| `app/`              | Layout, page d’accueil, styles globaux      |
| `components/`       | Navigation, footer, loader, sections        |
| `lib/site.ts`       | Identité, liens nav, chemins photo & CV   |
| `lib/content.ts`    | Textes CV : hero, à propos, compétences, projets, etc. |
| `lib/cn.ts`         | Utilitaire classes CSS                    |
| `public/images/`    | Photo de profil                           |
| `public/assets/`    | CV au format PDF                          |

---

## Fichiers à placer dans `public/`

Ces chemins sont définis dans `lib/site.ts` (`assets`) :

| Fichier | Rôle |
|---------|------|
| `public/images/Reine-Profile.png` | Photo (hero, à propos, navigation) |
| `public/assets/CV-Reine-EGBIDI.pdf` | CV téléchargeable |

Après renommage des fichiers, mettre à jour `lib/site.ts` en conséquence.

---

## Personnalisation

- **Coordonnées, GitHub, LinkedIn, site web** : `lib/site.ts`
- **Textes longs, listes de compétences, projets, formation** : `lib/content.ts`
- **Mise en page d’une section** : `components/sections/<Section>.tsx`

Le formulaire de contact est une **démo locale** (réinitialisation après envoi). Pour la production, brancher une route API Next.js, un service mail (Resend, Formspree, etc.) ou un backend dédié.

Variables d’environnement : **non obligatoires** pour un déploiement standard ; ajouter `NEXT_PUBLIC_*` si vous exposez des URLs côté client.

---

## Déploiement

Compatible **Vercel**, **Netlify** ou tout hébergeur Node.js. Sur Vercel : importer le dépôt, framework **Next.js**, commande de build `npm run build`, répertoire de sortie géré automatiquement.

---

## Profil GitHub

[github.com/reineegbidi-svg](https://github.com/reineegbidi-svg)

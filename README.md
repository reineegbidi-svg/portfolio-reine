# Portfolio — GBEDENOU FIFI GRACE

Site vitrine personnel (mode clair, animations légères) pour présenter le parcours, les compétences, les projets et un formulaire de contact.  
Stack : **React 19**, **Vite**, **Framer Motion**, **Lucide React** (icônes).

**Profil GitHub :** [github.com/fifigrace](https://github.com/fifigrace)

---

## Installation

```bash
npm install
npm run dev
```

| Script        | Action                          |
|---------------|---------------------------------|
| `npm run dev` | Serveur de dev (Vite)           |
| `npm run build` | Build de production → `dist/` |
| `npm run preview` | Prévisualiser le build      |
| `npm run lint`  | ESLint                          |

---

## Fichiers à placer dans `public/`

Avant un build ou un déploiement, vérifier que ces fichiers existent (chemins utilisés dans `src/content.js`) :

| Fichier | Rôle |
|---------|------|
| `public/images/photo-fifi.jpeg` | Photo du hero |
| `public/assets/CV-GBEDENOU.jpeg` | CV téléchargeable depuis le hero |

Les visuels des **cartes projets** peuvent rester des URLs externes (ex. placeholders) ou être remplacés par tes propres images dans `content.js`.

---

## Personnalisation

- **Textes, liens, projets, formation, contact** : `src/content.js`
- **Mise en page & styles** : `src/App.jsx`, `src/App.css`, `src/index.css`
- **Formulaire** : envoi via [FormSubmit](https://formsubmit.co) (email configuré dans `content.js` → `contact.formAction`). Premier envoi : activer l’adresse côté FormSubmit si demandé.

Variables d’environnement : **non requises** pour un déploiement statique classique.

---

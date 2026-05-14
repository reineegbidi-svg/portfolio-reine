# LuCodes – Portfolio React

React + Vite remake of the LuCodes portfolio with a senior-level art direction. The application exposes the same contenus que l’ancienne version PHP mais avec une expérience plus moderne, fluide et prête pour le déploiement sur Vercel.

## ⚙️ Installation

```bash
npm install
npm run dev
```

## 📂 Contenu à importer

Placer les éléments suivants avant de lancer le build/preview :

- `public/assets/KONOU.pdf` – le CV à télécharger depuis la page d’accueil (issu de l’ancien dossier `assets/includes`).
- Images des projets dans `public/images/` (fichiers présents dans l’ancien dossier `assets/img/masonry-portfolio`). Les noms attendus sont :
  - `Luc-Photoroom.png`
  - `tickets-app.jpg`
  - `doctagne.png`
  - `campus-cantine.png`
  - `ecopower-frame.jpg`
  - `meteo-app.png`
  - `quote-gen.png`
  - `cms-web.png`
  - `js-formation.png`
  - `zip-url.png`
  - `ucao-uut.png`
  - `hardware-web.png`
  - `hardware-desktop.png`
  - `biblio.png`
  - `chatbot.png`

## 🚀 Déploiement Vercel

1. `npm run build`
2. Connecter le repository à Vercel.
3. Config par défaut : aucune variable d’environnement nécessaire.

Le dossier `dist/` généré par Vite est automatiquement pris en charge par Vercel.

### Page QR pour affichage sur le campus

- Accès : `/qr`
- Contenu : poster imprimable avec le QR code (`public/images/frame.jpg`), instructions et contacts.
- Astuce : ouvrir la page, cliquer sur « Imprimer cette page » pour générer un PDF prêt à partager.
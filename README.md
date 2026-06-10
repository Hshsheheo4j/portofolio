# Assaad Khalil Portfolio

Un portfolio personnel moderne, élégant et performant, conçu pour présenter mes compétences, mes projets et mon parcours professionnel.

## 🚀 Technologies Utilisées

Ce projet a été développé avec un stack technologique moderne pour garantir une expérience utilisateur fluide et un design responsive.

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Langage**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icônes**: [Lucide React](https://lucide.dev/)
- **Composants UI**: Design basé sur le "Glassmorphism" (effets de verre) avec des fonds dynamiques.

## ✨ Fonctionnalités

Le site est organisé en plusieurs sections interactives :

- **Hero Section**: Accueil impactant avec un arrière-plan dynamique (`BackgroundCanvas`).
- **À Propos**: Présentation détaillée de mon profil.
- **Compétences**: Mise en avant des technologies et outils maîtrisés.
- **Projets**: Galerie de mes réalisations avec descriptions et liens.
- **Vision**: Ma philosophie de travail et mes objectifs futurs.
- **Expérience**: Historique professionnel et académique.
- **Contact**: Moyen simple de me contacter.

## 🛠️ Installation et Lancement

Pour lancer ce projet localement, suivez ces étapes :

### 1. Cloner le dépôt
```bash
git clone https://github.com/votre-username/assaad-khalil-portfolio.git
cd assaad-khalil-portfolio
```

### 2. Installer les dépendances
```bash
npm install
# ou
yarn install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
# ou
yarn dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```text
src/
├── app/              # Pages et Layout (Next.js App Router)
├── components/       # Composants réutilisables
│   ├── layout/       # Navbar, Footer, BackgroundCanvas
│   ├── sections/     # Sections de la page (Hero, About, Skills, etc.)
│   └── ui/           # Composants d'interface de base (Button, GlassPanel)
├── constants/        # Données statiques du site (site-data.ts)
└── lib/              # Fonctions utilitaires
```

## 📜 Scripts Disponibles

- `npm run dev` : Lance le serveur de développement.
- `npm run build` : Construit le projet pour la production.
- `npm run start` : Lance le projet compilé.
- `npm run lint` : Vérifie la qualité du code avec ESLint.

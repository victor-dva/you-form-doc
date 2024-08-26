# YouFormDoc

Bienvenu dans le projet YouFormDoc. Cet outil consiste à créer dynamiquement de la documentation selon un type de projet. Exemple : Application web, jeux vidéos, immobilier. Grâce à l'automatisation des documents via formulaires, vous êtes assurés d'obtenir un bon suivi de vos documents et de l'état d'avancement de vos projets.

L'application est développée en SvelteKit avec le langage TypeScript. Elle nécessite d'être connectée à une base de données Firebase pour fonctionner.

## Pré-requis

-  Node Js : version >= 18
-  Base de données Firebase : https://www.youtube.com/watch?v=G3DRgWzlAjg&list=PLm_Qt4aKpfKiGbdjaHdOpry6Neza0etxZ&index=5 (regarder jusqu'à 01:05)

## Lancer l'application

Pour lancer notre application, il est important de suivre les étapes suivantes : 

- cloner le projet
- aller dans le répertoire crée "you-form-doc"
- Ouvrir un terminal puis lancer la commande :
```bash
npm install
```
- Lancer la commande :
```bash
npm run dev -- --open
```
- Après exécution de cette commande une page web avec l'url de type ```http://localhost:8080``` s'ouvrira

Ensuite pour utiliser l'application, il va falloir maintenant connecter le projet à votre base de données Firebase. Toujours dans le même répertoire "you-form-doc", créer un fichier .env qui se présentera ainsi :
```bash
VITE_API_KEY=[YOUR_API_KEY]
VITE_AUTH_DOMAIN=[YOUR_AUTH_DOMAIN]
VITE_PROJECT_ID=[YOUR_PROJECT_ID]
VITE_STORAGE_BUCKET=[YOUR_STORAGE_BUCKET]
VITE_MESSAGING_SENDER_ID=[YOUR_MESSAGING_SENDER_ID]
VITE_APP_ID=[YOUR_APP_ID]
```
en remplaçant bien évidemment les variables entre crochets par vos informations.

## Manuel utilisateur

L'application est opérationnelle, donc prête à votre disposition. Voyons maintenant comment se présente notre site :

  - Accueil : cette page est le point d'entrée de YouFormDoc. C'est ici que vous choisirez le type de projet pour lequel vous voudriez construire votre documentation. Seul le projet de type "Application web" est disponible
  - Application Web : dans cette page vous retrouverez pour chaque projet web sa documentation qui se présente sous forme d'un bouton. lorsque vous cliquez sur projet, vous êtes redirigé vers sa page.
  - Application Web - [projet] : une fois arrivé dans cette page, vous avez la possibilité d'accéder maintenant aux pages des catégories suivantes :
      - exigence
      - user story
      - test
        
Lorsqu'une des catégories est cliquée, vous êtes redirigé vers sa page

Pour le moment, il n'est que possible de :

  - créer un projet de documentation
  - supprimer un projet de documentation
  - renommer le titre d'un projet de documentation

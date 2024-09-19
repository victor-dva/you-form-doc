# YouFormDoc

Bienvenu dans le projet YouFormDoc. Cet outil consiste à créer dynamiquement de la documentation selon un type de projet. Exemple : Application web, jeux vidéos, immobilier. Grâce à l'automatisation des documents via formulaires, vous êtes assurés d'obtenir un bon suivi de vos documents et de l'état d'avancement de vos projets.

L'application est développée en SvelteKit avec le langage TypeScript et utilise Prisma pour réaliser les méthodes CRUD et alimenter une base de données Sqlite 3 en local. 

## Pré-requis

-  Node Js : version >= 18

## Lancer l'application

Pour lancer notre application, il est important de suivre les étapes suivantes : 

- cloner le projet
- aller dans le répertoire crée "you-form-doc"
- Ouvrir un terminal puis lancer la commande :
```bash
npm install
```
- Faire la migration des tables de données avec la commande :
```bash
npx prisma migrate dev --name init
```
- Enfin, tester l'application web en lançant la commande suivante :
```bash
npm run dev -- --open
```
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

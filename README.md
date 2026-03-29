# Gestion des conflits Git

## Cause du conflit
Un conflit Git est survenu lorsque deux branches ont modifié **la même ligne** dans le fichier `index.html`.  
Git ne pouvait pas savoir quelle modification garder.

## Méthode de résolution
- Nous avons ouvert le fichier conflictuelle.  
- Nous avons fusionné manuellement les changements nécessaires.  
- Nous avons ensuite ajouté (`git add`) et commit (`git commit`) pour finaliser le merge.
- # DS1 : Projet GIT/GitHub

## Description
Ce projet est un site web développé dans le cadre du DS1.  
Il comprend plusieurs pages : `index.html`, `exercises.html`, `contact.html` et des scripts JS/CSS associés.  
Le projet utilise Git et GitHub pour la gestion de version et le travail collaboratif.

## Branches
- **main** : version stable du projet
- **develop** : branche d’intégration
- **feature-homepage** : développement de la page d’accueil
- **feature-contact-page** : développement de la page de contact
- **feature-navbar** : barre de navigation responsive
- **feature-footer** : footer
- **feature-js** : optimisation des scripts JS

## Workflow Git
- Chaque étudiant travaille sur sa branche locale
- Les commits doivent être clairs :
  - `feat:` pour les nouvelles fonctionnalités
  - `fix:` pour corriger des bugs
  - `update:` pour les améliorations
- Synchronisation régulière avec develop :
```bash
git pull origin develop
git merge develop

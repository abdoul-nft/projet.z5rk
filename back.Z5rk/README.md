# Projet Z5rk

## L’équipe

Abdoul ZAKARI

<br>


## Introduction

L’idée est de créer tout un écosystème pour révéler et analyser diverses collections NFT du marché. Trouver les collections NFT disponibles et parcourir leurs données pour obtenir de meilleures informations. En plus de cela, la possibilité d'appliquer diverses mesures pour effectuer une meilleure analyse de n'importe quel NFT particulier.

- Faire des rechches de NFT
- Obtenir les propriétaires des NFTs
- Propriétés du NFT pour comprendre sa rareté et son processus de génération
- Découvrir si le créateur NFT a une communauté ou non. Si oui, déterminer l'emplacement et la suite de la communauté.
- Étudier le prix actuel de ce NFT
- Découvrir combien de pièces au total de ce NFT existent sur le marché
- Minter ses propres NFTs
- Vendre ses propres NFTs
- Avoir une liste complete des transactions effectuées sur ses wallets


## Les dépendances du projet

les dépendances du projet

>`bcrypt` Pour hacher les mots de passe <br>
>`body-parser` Pour analysez les corps de requête entrants dans un middleware, disponibles dans `req.body` <br>
>`dotenv` Pour charger les variables d'environnement <br>
>`express-validator` Pour la validation de données <br>
>`mongoose` Pour la modélisation d'objet MongoDB conçu pour fonctionner dans un environnement asynchrone <br>
>`moralis` Moralis fournit un backend géré pour les projets blockchain. Il synchronise automatiquement les soldes des  utilisateurs dans la base de données, et permet de mettre en place des alertes sur la chaîne, de surveiller les événements des contrats intelligents, de construire des index. <br>
>`passport`  Middleware d'authentification compatible avec Express <br>
>`stripe` Pour les paiements <br>
>`passport-google-oauth20` Pour l'authentification avec google<br>
>...

<br>


## Installation

Installation des modules:

```
npm i
```

Une fois tous les modules installés, vous devez créer un fichier `.env` à la racine de votre répertoire local pour y indiquer les valeurs des différentes variables d'environnement nécessaires pour le fonctionnement de l'API : 

Installer mongodb et ajouter à `MONGO_URL=` le lien vers la base de données

Creer un serveur Moralis
```
NFT_API_APP_ID=
NFT_API_MASTER_KEY=
NFT_API_SERVER_URL=
```
>[https://docs.moralis.io/moralis-dapp/web3-sdk](Documentation)

```
# NODE Serveur
PORT=...
ALLOWED_ORIGINS=...

# MONGO
MONGO_URL=...

# MONGO
MONGO_URL=

#NFT API
NFT_API_APP_ID=
NFT_API_MASTER_KEY=
NFT_API_SERVER_URL=
```


<br>

Pour ensuite lancer l'API avec la commande : 

```
npm start 
```
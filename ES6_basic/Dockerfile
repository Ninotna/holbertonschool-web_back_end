# Utiliser l'image de base Ubuntu 18.04
FROM ubuntu:18.04

# Mettre à jour les dépôts et installer les dépendances
RUN apt-get update && apt-get install -y \
    curl \
    vim \
    git \
    build-essential

# Installer Node.js 12.x
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs

# Vérifier les versions installées
RUN node -v && npm -v

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tout le contenu du projet dans le répertoire de travail
COPY . .

# Exposer le port 8080
EXPOSE 8080

# Commande par défaut pour exécuter l'application
CMD ["npm", "run", "dev"]

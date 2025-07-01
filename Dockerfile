# Utilise une image officielle PHP avec extensions nécessaires
FROM php:8.2-fpm

# Installe les dépendances système + Node.js + Composer
RUN apt-get update && apt-get install -y \
    git curl unzip zip libzip-dev libpng-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Installer Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copier les fichiers du projet
WORKDIR /var/www/html
COPY . .

# Installer les dépendances PHP et JS
RUN composer install --no-dev --optimize-autoloader && \
    npm install && npm run build

# Donne les droits nécessaires au dossier Laravel
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Exposer le port
EXPOSE 8000

# Lancer Laravel via artisan
CMD php artisan serve --host=0.0.0.0 --port=8000

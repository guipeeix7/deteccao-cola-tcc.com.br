FROM php:8.1-fpm
RUN apt-get update && apt-get install -y \
                libfreetype-dev \
                libjpeg62-turbo-dev \
                libpng-dev \
        && docker-php-ext-configure gd --with-freetype --with-jpeg \
        && docker-php-ext-install -j$(nproc) gd

RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    vim \
    unzip \
    git \
    curl \
    libzip-dev



RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install mysqli
# mbstring zip exif pcntl
# RUN docker-php-ext-configure gd --with-gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ --with-png-dir=/usr/include/
# RUN docker-php-ext-install gd


RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Add user for laravel application
RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www


WORKDIR /var/www/vna-back
# RUN su composer install --optimize-autoloader --no-dev
# RUN php artisan config:cache
# RUN php artisan event:cache
# RUN php artisan route:cache
# RUN php artisan view:cache


EXPOSE 9000
CMD ["php-fpm"]
# FROM nginx
# COPY ./default.conf /etc/nginx/conf.d/
# FROM php:8.1-fpm

# # Install required PHP extensions
# RUN apt-get install openssl libssl-dev

# RUN apt-get install libcurl4-openssl-dev
# RUN docker-php-ext-install ctype dom fileinfo filter hash mbstring openssl pdo session tokenizer xml

# CMD ["php-fpm"]

# # You can also expose the PHP-FPM port if needed
# EXPOSE 8004
# FROM jsdecena/php8-fpm:8.1.0

# ENV NODE_VERSION=12.6.0
# RUN apt update && apt install -y curl

# RUN docker-php-ext-install mysqli pdo_mysql gd

# COPY . .

# COPY ./.env ./.env

# RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
# ENV NVM_DIR=/root/.nvm

# RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
# RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
# RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
# ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# RUN composer require laravel/breeze --dev
# RUN npm install
# RUN npm run dev
# RUN npm i && npm run dev
# RUN php artisan serve

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


WORKDIR /var/www/tcc-cola
# RUN su composer install --optimize-autoloader --no-dev
# RUN php artisan config:cache
# RUN php artisan event:cache
# RUN php artisan route:cache
# RUN php artisan view:cache


EXPOSE 9000
CMD ["php-fpm"]

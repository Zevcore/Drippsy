FROM php:8.1-fpm

WORKDIR /var/www/api

RUN apt-get update && apt-get install -y \
    openssl \
    git \
    unzip \
    nano \
    curl \
    wget \
    gnupg \
    apt-transport-https \
    python3 \
    # For imagick
    libmagickwand-dev --no-install-recommends \
    zlib1g-dev \
    libzip-dev

RUN docker-php-ext-install pdo pdo_mysql zip xml

RUN pecl install imagick  \
    && docker-php-ext-enable imagick \
    && pecl install xdebug \
    && docker-php-ext-enable xdebug

# Composer install
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && php -r "unlink('composer-setup.php');"

## Symfony CLI \
#RUN wget https://get.symfony.com/cli/installer -O - | bash
#RUN cp /root/.symfony/bin/symfony /usr/local/bin/symfony

RUN chmod 777 /var/www/api

EXPOSE 9000
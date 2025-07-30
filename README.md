Bem-vindo(a) ao repositório do **deteccao-cola-tcc**! Este projeto foi iniciado com [Laravel](https://laravel.com), um framework PHP elegante e poderoso para construção de aplicações web modernas.

Antes de começar, certifique-se de que você tem os seguintes pré-requisitos instalados:

- PHP >= 8.1
- Composer
- MySQL ou outro banco de dados compatível
- node js

## ⚙️ Instalação Backend
Clone o repositório:
```bash
git init
git remote add origin git@github.com:guipeeix7/deteccao-cola-tcc.com.br.git
git pull origin main
cd ./backend
composer install --no-plugins --no-scripts
php artisan key:generate
php artisan serve
```


## ⚙️ Instalação Frontend
```bash
cd ./front
```

Se o angular não estiver instalado rode
```bash
npm install -g @angular/cli@15.2.4
```

```bash
npm install --legacy-peer-deps
ng s --configuration=development
```


Obs: Lembre o .env do backend deve estar apontando tambem para o banco de dados correto. 
## ⚙️ Banco de dado
Rode direto
```bash
cd <pasta do projeto>/backups
mysql -u root -p nome_do_banco < ./<last_database_backup>
```



Trabalhando para relevantar o docker e github ci/cd.

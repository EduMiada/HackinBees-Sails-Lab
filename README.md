# web-passport-json-web-token

Lab Sails JS 1.0 - Utilizando Passport com estratégia local e geração de Token JWT



### Instalação

+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)

+ Instalar Sails
+ Clonar repositório
+ Instalar dependências no diretório da aplicação

### Criar usuários
http://localhost:1337/auth/signup
{
 "username":"teste",
 "email":"teste@teste.com",
 "password":"teste"
}


### Criar usuários
http://localhost:1337/auth/signup
{
 "username":"teste",
 "email":"teste@teste.com",
 "password":"teste"
}

### Login
http://localhost:1337/auth/signin
{
  "email": "teste@teste.com",
  "password": "teste"
}

### Acesso página segura
http://localhost:1337/user
Header: Authorization:Bearer JWT
Content-Type:application/json
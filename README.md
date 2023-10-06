<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

El proyecto esta desarrollado en Nestjs, contiene el microservicio de Reseñas de NurBNB que permite: a los Huespedes dejar reseñas sobre alguna propiedad en la que se hayan alojado, también permite a los Anfitriones registrar reseñas a los huespedes. 

## Diagrama de clases

https://miro.com/app/board/uXjVM5vV3HA=/?moveToWidget=3458764561085745471&cot=10

## Video youtube

https://youtu.be/oiws1PjaE30

## Screenshots de Tests

[![image](https://drive.google.com/file/d/15sAmgjEZZGAnL5fSNBN72eZK-4LA5Bbg/view?usp=drive_link)](https://github.com/brydanny/microservice-reviews/assets/23293616/d411bccb-7dac-43b7-a6d8-5784ab538ecc)

![image](https://drive.google.com/file/d/1sKEQ_AHZEf9dEsCoXY4oONOuHvelS09Y/view?usp=drive_link](https://github.com/brydanny/microservice-reviews/assets/23293616/acc2de7f-cbe2-4cbd-8746-47ae7545666b)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

# integration tests
# integratios tests postman test/integration/postman
$ npm run test:integration
```
## Docker (Contenerización)

```bash
# crear imagen
$ docker image build -t brydanny/nestjs-microserv-review .

# correr contenedor
$ docker container run -d --name micro -p 3009:3000 brydanny/nestjs-microserv-review

# publicar imagen
$ docker image push brydanny/nestjs-microserv-review

# levantar contenedores
docker-compose up -d 



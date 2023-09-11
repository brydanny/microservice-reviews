import { Given, When, Then, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { expect } from 'chai';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../../../src/app.module';
import { CategoryReview } from '../../../src/reviews/domain/model/review-property/category';
let app;
let response;

Given(
  'a POST REVIEW request is made to {string} with the following data:',
  async (url: string, table) => {
    const testData = table.rowsHash();
    const categoryReview = new CategoryReview(
      9, // LIMPIEZA
      9, // COMUNICACION
      10, // LLEGADA
      9, // FIABILIDAD
      9, // UBICACION
      9, // PRECIO
    );
    const payload = {
      comentario: testData.comentario,
      propertyId: testData.propertyId,
      huespedId: testData.huespedId,
      categoryReview: categoryReview,
    };
    response = await request(app.getHttpServer()).post(url).send(payload);
  },
);

Given(
  'a POST request is made to {string} with no data:',
  async (url: string) => {
    response = await request(app.getHttpServer()).post(url).send();
  },
);

Then(
  'the create response status code should be {int}',
  (statusCode: number) => {
    expect(response.status).to.equal(statusCode);
  },
);

BeforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
  app = moduleFixture.createNestApplication();
  await app.init();
});

AfterAll(async () => {
  await app.close();
});

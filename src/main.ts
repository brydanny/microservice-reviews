import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Booking API')
    .setDescription('Microservicio de Booking')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: { filter: true },
  });

  /*app.connectMicroservice({
    transport: Transport.RMQ,
    options: { urls: ['amqp://192.168.68.51:5672'], queue: 'properties' },
  });*/

  ///const PORT = process.env.PORT || 3000;
  const PORT = process.env.PORT || 3001;
  // await app.startAllMicroservices();
  app.enableCors();
  ///await app.listen(3000);
  await app.listen(3001);
  console.log(`App ejecutandose en el puerto ${PORT}`);
}
bootstrap();

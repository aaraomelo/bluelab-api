import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {useContainer} from "class-validator";
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useStaticAssets(join(__dirname, '..', 'client'));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as passport from 'passport';

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }));

  const configService = app.get(ConfigService);
 
  app.use(
    session({
      secret: configService.get('SESSION_SECRET'),
      resave: false,
      saveUninitialized: false,
    }),
  );
 
  app.use(passport.initialize());
  app.use(passport.session());

  //TODO: aplly mniddleware for root redirection
  //app.use('/app/user/', name_of_the_controller)

  await app.listen(3000);
}
bootstrap();

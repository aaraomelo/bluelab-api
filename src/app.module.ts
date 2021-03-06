import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import configuration from '../config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports:[
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..' , 'client'),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'documentation'),
      serveRoot: '/documentation'
    }),
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: [
        // '.env.local',
        // '.env',
        // '.env.development.local',
        // '.env.development'
        '.env.test.local',
        '.env.test'
      ],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('mongourl'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {useContainer} from "class-validator";

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    useContainer(app.select(AppModule), { fallbackOnErrors: true });
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/users (POST)', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        nome: "João",
        sobrenome: "Carlos",
        telefone: "11968552211",
        cpf: "08438794912"
      })
      .expect(201)
      .expect({success:true, msg:["Usuário criado com sucesso!"]});
  });

  it('/users (POST)', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        nome: "Aarão",
        sobrenome: "Melo",
        telefone: "11977808883",
        cpf: "00108240223"
      })
      .expect(201)
      .expect({success:true, msg:["Usuário criado com sucesso!"]});
  });

  it('/users (POST)', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({
        nome: "Aarão",
        sobrenome: "Melo",
        telefone: "00000000000",
        cpf: "00000000000"
      })
      .expect(400)
      .expect({ success: false, msg: [ 'Telefone Inválido', 'CPF inválido' ] });
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users/08438794912')
      .expect(200)
    });

  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/users/00000000000')
      .expect(400)
      .expect({ success: false, msg: [ 'CPF inválido', 'CPF não cadastrado' ] });
  });

});

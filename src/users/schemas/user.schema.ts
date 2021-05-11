import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;

@Schema({
  writeConcern: {},
})
export class User {

  @Prop()
  nome: string;

  @Prop()
  sobrenome: string;

  @Prop()
  telefone: number;

  @Prop()
  cpf: number;

  @Prop()
  senha: string;

  comparaSenha: Function;
}

export const UserSchema = SchemaFactory.createForClass(User);
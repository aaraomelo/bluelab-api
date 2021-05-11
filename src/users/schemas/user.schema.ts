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
  telefone: string;

  @Prop()
  cpf: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
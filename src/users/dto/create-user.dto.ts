import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    sobrenome: string;

    @IsNotEmpty()
    telefone: string;

    @IsNotEmpty()
    cpf: string;

}

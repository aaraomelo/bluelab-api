import { IsNotEmpty, IsPhoneNumber, Length } from 'class-validator';
import { IsCPF } from '../cpf.decorator';

export class CreateUserDto {

    @IsNotEmpty({
        message: 'É necessário um nome',
    })
    nome: string;

    @IsNotEmpty({
        message: 'É necessário um sobrenome',
    })
    sobrenome: string;

    @IsNotEmpty({
        message: 'É necessário um telefone',
    })
    @Length(11, 11, {  
        message: 'O telefone deve ter 11 dígitos'
    })
    @IsPhoneNumber('BR',{
        message: 'Telefone Inválido'
    })
    telefone: string;

    @IsNotEmpty({
        message: 'É necessário um CPF',
    })
    @Length(11, 11, {  
        message: 'O CPF deve ter 11 dígitos'
    })
    @IsCPF({
        message: 'CPF inválido',
    })
    cpf: string;

}

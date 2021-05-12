import { IsNotEmpty, IsPhoneNumber, Length } from 'class-validator';
import { IsCPF, ExistsCPF } from '../cpf.decorator';

export class FindOneParams {

    @IsNotEmpty({
        message: 'É necessário um CPF',
    })
    @Length(11, 11, {  
        message: 'O CPF deve ter 11 dígitos'
    })
    @IsCPF({
        message: 'CPF inválido',
    })
    @ExistsCPF({
        message: 'CPF não cadastrado',
    })
    cpf: string;
}

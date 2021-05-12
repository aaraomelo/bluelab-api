import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';

import { cpf } from 'cpf-cnpj-validator'; 
import { UsersService } from './users.service';
import {Injectable} from '@nestjs/common';

@ValidatorConstraint({ async: true })
export class IsCPFConstraint implements ValidatorConstraintInterface {
  validate(CPF: any, args: ValidationArguments) {
    return cpf.isValid(CPF);
  }
}

export function IsCPF(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsCPFConstraint,
    });
  };
}

@ValidatorConstraint({ async: true })
@Injectable()
export class ExistsCPFConstraint implements ValidatorConstraintInterface {
  constructor(private readonly usersService: UsersService){}

  async validate(CPF: string, args: ValidationArguments) {
    return !!(await this.usersService.findOne(CPF));
  }
}

export function ExistsCPF(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ExistsCPFConstraint,
    });
  };
}
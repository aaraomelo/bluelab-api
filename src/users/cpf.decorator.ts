import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
  } from 'class-validator';

import { cpf } from 'cpf-cnpj-validator'; 

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
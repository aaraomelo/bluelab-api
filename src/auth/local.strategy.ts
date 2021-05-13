import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'cpf', passwordField: 'telefone' });
  }

  async validate(cpf: string, telefone:string): Promise<any> {
    const user = await this.authService.validateUser(cpf, telefone);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
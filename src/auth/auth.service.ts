import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(cpf: string, telefone: string): Promise<any> {
    const user = await this.usersService.findOne(cpf);
    if (user && (user.telefone === telefone)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    return {
      token: this.jwtService.sign({ cpf: user.cpf }),
    }
  }

}
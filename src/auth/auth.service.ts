import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(cpf: string): Promise<any> {
    const user = await this.usersService.findOne(cpf);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const User = await this.usersService.findOne(user._doc.cpf);
    return {
      token: this.jwtService.sign({ cpf: user._doc.cpf }),
      user: User
    }
  }

}
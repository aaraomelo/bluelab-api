import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ErrorsInterceptor } from './validations.interceptor';
import { StatusCreateUserDto } from './dto/status-create-user.dto';
import { FindOneParams } from './dto/find-one-params.dto';
import { SuccessFindOneDto } from './dto/sucess-find-one.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(ErrorsInterceptor)
  async create(@Body() createUserDto: CreateUserDto): Promise<StatusCreateUserDto> {
    await (this.usersService.create(createUserDto))
    return new StatusCreateUserDto(true, ['Usuário criado com sucesso!'])
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':cpf')
  @UseInterceptors(ErrorsInterceptor)
  async findOne(@Param() params: FindOneParams) {
    const user = await this.usersService.findOne(params.cpf);
    return  new SuccessFindOneDto(true, { user });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':cpf')
  remove(@Param('cpf') cpf: string) {
    return this.usersService.remove(cpf);
  }
}

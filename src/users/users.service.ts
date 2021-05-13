import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto){
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save()
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(cpf: string) {
    return await this.userModel.findOne({ cpf });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(cpf: string): Promise<User>{
    return await this.userModel.findOneAndDelete({ cpf }).exec();
  }
}

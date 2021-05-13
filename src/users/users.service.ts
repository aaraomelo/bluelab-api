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

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(cpf: string): Promise<User>  {
    return await this.userModel.findOne({ cpf });
  }

  async update(cpf: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findOneAndUpdate({ cpf }, updateUserDto).exec();
  }

  async remove(cpf: string): Promise<User>{
    return await this.userModel.findOneAndDelete({ cpf }).exec();
  }
}

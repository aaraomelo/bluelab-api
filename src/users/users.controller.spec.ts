import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from './schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useClass: User
        }
      ],
    }).compile();

    usersController = app.get<UsersController>(UsersController);
  });

  it('users controller should be defined', () => {
    expect(usersController).toBeDefined();
  });

  describe('findAll', () => {
    it('should get an array of users', () => {
      expect(usersController.findAll()).toEqual('This action returns all users')
    });
  });
});

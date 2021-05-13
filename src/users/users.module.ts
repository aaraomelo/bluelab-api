import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { ExistsCPFConstraint } from './cpf.decorator';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          UserSchema.set('toJSON', {
            transform: function (doc, ret, options) {
              delete ret._id;
              delete ret.__v;
            }
          });
          return UserSchema;
        },
      },
    ])
  ],
  controllers: [UsersController],
  providers: [ExistsCPFConstraint, UsersService],
  exports:[UsersService]
})
export class UsersModule {}

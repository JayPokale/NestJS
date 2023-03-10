import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    return new this.UserModel(createUserDto).save();
  }

  async findAll() {
    return this.UserModel.find();
  }

  async findOne(id: string) {
    return this.UserModel.findById(id);
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    return this.UserModel.updateOne({ _id }, { $set: updateUserDto });
  }

  async remove(_id: string) {
    return this.UserModel.deleteOne({ _id });
  }
}

import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 0, name: 'Phu' },
    { id: 1, name: 'Yen' },
  ];

  findAll(name?: string): User[] {
    if (name) {
      return this.users.filter((user) => user.name === name);
    }
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  @ApiCreatedResponse({ type: User })
  createUser(createUserDto: CreateUserDto): User {
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);

    return newUser;
  }
}

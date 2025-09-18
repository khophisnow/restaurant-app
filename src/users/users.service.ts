import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepo: Repository<UsersEntity>,
  ) {}

  findAll() {
    return this.usersRepo.find();
  }

  create(data: Partial<UsersEntity>) {
    const users = this.usersRepo.create(data);
    return this.usersRepo.save(users);
  }
}

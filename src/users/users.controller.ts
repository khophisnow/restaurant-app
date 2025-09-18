import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll(): Promise<UsersEntity[]> {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() data: Partial<UsersEntity>) {
    return this.usersService.create(data);
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesEntity } from './entities/roles.entity';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  getAll(): Promise<RolesEntity[]> {
    return this.rolesService.findAll();
  }

  @Post()
  create(@Body() data: Partial<RolesEntity>) {
    return this.rolesService.create(data);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolesEntity } from './entities/roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RolesEntity)
    private rolesRepo: Repository<RolesEntity>,
  ) {}

  findAll() {
    return this.rolesRepo.find();
  }

  create(data: Partial<RolesEntity>) {
    const roles = this.rolesRepo.create(data);
    return this.rolesRepo.save(roles);
  }
}

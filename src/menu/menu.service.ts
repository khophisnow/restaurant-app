import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuEntity } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private menuRepo: Repository<MenuEntity>,
  ) {}

  findAll() {
    return this.menuRepo.find();
  }

  create(data: Partial<MenuEntity>) {
    const menu = this.menuRepo.create(data);
    return this.menuRepo.save(menu);
  }
}

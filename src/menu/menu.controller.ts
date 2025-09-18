import { Controller, Get, Post, Body } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuEntity } from './entities/menu.entity';

@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Get()
  getAll(): Promise<MenuEntity[]> {
    return this.menuService.findAll();
  }

  @Post()
  create(@Body() data: Partial<MenuEntity>) {
    return this.menuService.create(data);
  }
}

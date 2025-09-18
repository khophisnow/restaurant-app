import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesEntity } from './entities/categories.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  getAll(): Promise<CategoriesEntity[]> {
    return this.categoriesService.findAll();
  }

  @Post()
  create(@Body() data: Partial<CategoriesEntity>) {
    return this.categoriesService.create(data);
  }
}

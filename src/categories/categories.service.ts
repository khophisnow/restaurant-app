import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesEntity } from './entities/categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private categoriesRepo: Repository<CategoriesEntity>,
  ) {}

  findAll() {
    return this.categoriesRepo.find();
  }

  create(data: Partial<CategoriesEntity>) {
    const categories = this.categoriesRepo.create(data);
    return this.categoriesRepo.save(categories);
  }
}

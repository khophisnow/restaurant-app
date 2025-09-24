import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChefsEntity } from './entities/chefs.entity';

@Injectable()
export class ChefsService {
  constructor(
    @InjectRepository(ChefsEntity)
    private chefsRepo: Repository<ChefsEntity>,
  ) {}

  findAll() {
    return this.chefsRepo.find();
  }

  create(data: Partial<ChefsEntity>) {
    const chefs = this.chefsRepo.create(data);
    return this.chefsRepo.save(chefs);
  }
}

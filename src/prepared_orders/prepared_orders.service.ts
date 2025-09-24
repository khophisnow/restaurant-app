import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PreparedOrdersEntity } from './entities/prepared_orders.entity';

@Injectable()
export class PreparedOrdersService {
  constructor(
    @InjectRepository(PreparedOrdersEntity)
    private preparedOrdersRepo: Repository<PreparedOrdersEntity>,
  ) {}

  findAll() {
    return this.preparedOrdersRepo.find();
  }

  create(data: Partial<PreparedOrdersEntity>) {
    const preparedOrders = this.preparedOrdersRepo.create(data);
    return this.preparedOrdersRepo.save(preparedOrders);
  }
}

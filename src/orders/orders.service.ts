import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersEntity } from './entities/orders.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersEntity)
    private ordersRepo: Repository<OrdersEntity>,
  ) {}

  findAll() {
    return this.ordersRepo.find();
  }

  create(data: Partial<OrdersEntity>) {
    const orders = this.ordersRepo.create(data);
    return this.ordersRepo.save(orders);
  }
}

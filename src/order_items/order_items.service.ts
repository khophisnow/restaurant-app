import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderItemsEntity } from './entities/order_items.entity';

@Injectable()
export class OrderItemsService {
  constructor(
    @InjectRepository(OrderItemsEntity)
    private orderItemsRepo: Repository<OrderItemsEntity>,
  ) {}

  findAll() {
    return this.orderItemsRepo.find();
  }

  create(data: Partial<OrderItemsEntity>) {
    const orderItems = this.orderItemsRepo.create(data);
    return this.orderItemsRepo.save(orderItems);
  }
}

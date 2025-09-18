import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersEntity } from './entities/orders.entity';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getAll(): Promise<OrdersEntity[]> {
    return this.ordersService.findAll();
  }

  @Post()
  create(@Body() data: Partial<OrdersEntity>) {
    return this.ordersService.create(data);
  }
}

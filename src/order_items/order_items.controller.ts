import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderItemsService } from './order_items.service';
import { OrderItemsEntity } from './entities/order_items.entity';

@Controller('order_items')
export class OrderItemsController {
  constructor(private order_itemsService: OrderItemsService) {}

  @Get()
  getAll(): Promise<OrderItemsEntity[]> {
    return this.order_itemsService.findAll();
  }

  @Post()
  create(@Body() data: Partial<OrderItemsEntity>) {
    return this.order_itemsService.create(data);
  }
}

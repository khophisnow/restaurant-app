import { Controller, Get, Post, Body } from '@nestjs/common';
import { PreparedOrdersService } from './prepared_orders.service';
import { PreparedOrdersEntity } from './entities/prepared_orders.entity';

@Controller('prepared-orders')
export class PreparedOrdersController {
  constructor(private preparedOrdersService: PreparedOrdersService) {}

  @Get()
  getAll(): Promise<PreparedOrdersEntity[]> {
    return this.preparedOrdersService.findAll();
  }

  @Post()
  create(@Body() data: Partial<PreparedOrdersEntity>) {
    return this.preparedOrdersService.create(data);
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesEntity } from './entities/deliveries.entity';

@Controller('deliveries')
export class DeliveriesController {
  constructor(private deliveriesService: DeliveriesService) {}

  @Get()
  getAll(): Promise<DeliveriesEntity[]> {
    return this.deliveriesService.findAll();
  }

  @Post()
  create(@Body() data: Partial<DeliveriesEntity>) {
    return this.deliveriesService.create(data);
  }
}

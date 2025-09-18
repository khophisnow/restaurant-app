import { Controller, Get, Post, Body } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversEntity } from './entities/drivers.entity';

@Controller('drivers')
export class DriversController {
  constructor(private driversService: DriversService) {}

  @Get()
  getAll(): Promise<DriversEntity[]> {
    return this.driversService.findAll();
  }

  @Post()
  create(@Body() data: Partial<DriversEntity>) {
    return this.driversService.create(data);
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersEntity } from './entities/customers.entity';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAll(): Promise<CustomersEntity[]> {
    return this.customersService.findAll();
  }

  @Post()
  create(@Body() data: Partial<CustomersEntity>) {
    return this.customersService.create(data);
  }
}

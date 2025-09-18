import { Controller, Get, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsEntity } from './entities/payments.entity';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Get()
  getAll(): Promise<PaymentsEntity[]> {
    return this.paymentsService.findAll();
  }

  @Post()
  create(@Body() data: Partial<PaymentsEntity>) {
    return this.paymentsService.create(data);
  }
}

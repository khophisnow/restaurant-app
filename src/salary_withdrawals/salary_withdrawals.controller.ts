import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalaryWithdrawalsService } from './salary_withdrawals.service';
import { SalaryWithdrawalsEntity } from './entities/salary_withdrawals.entity';

@Controller('salaryWithdrawals')
export class SalaryWithdrawalsController {
  constructor(private salaryWithdrawalsService: SalaryWithdrawalsService) {}

  @Get()
  getAll(): Promise<SalaryWithdrawalsEntity[]> {
    return this.salaryWithdrawalsService.findAll();
  }

  @Post()
  create(@Body() data: Partial<SalaryWithdrawalsEntity>) {
    return this.salaryWithdrawalsService.create(data);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaryWithdrawalsEntity } from './entities/salary_withdrawals.entity';
import { SalaryWithdrawalsService } from './salary_withdrawals.service';
import { SalaryWithdrawalsController } from './salary_withdrawals.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SalaryWithdrawalsEntity])],
  providers: [SalaryWithdrawalsService],
  controllers: [SalaryWithdrawalsController],
})
export class SalaryWithdrawalsModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalaryWithdrawalsEntity } from './entities/salary_withdrawals.entity';

@Injectable()
export class SalaryWithdrawalsService {
  constructor(
    @InjectRepository(SalaryWithdrawalsEntity)
    private salaryWithdrawalsRepo: Repository<SalaryWithdrawalsEntity>,
  ) {}

  findAll() {
    return this.salaryWithdrawalsRepo.find();
  }

  create(data: Partial<SalaryWithdrawalsEntity>) {
    const salaryWithdrawals = this.salaryWithdrawalsRepo.create(data);
    return this.salaryWithdrawalsRepo.save(salaryWithdrawals);
  }
}

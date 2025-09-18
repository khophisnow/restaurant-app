import { Test, TestingModule } from '@nestjs/testing';
import { SalaryWithdrawalsService } from './salary_withdrawals.service';

describe('SalaryWithdrawalsService', () => {
  let service: SalaryWithdrawalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalaryWithdrawalsService],
    }).compile();

    service = module.get<SalaryWithdrawalsService>(SalaryWithdrawalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

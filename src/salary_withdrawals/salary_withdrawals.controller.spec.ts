import { Test, TestingModule } from '@nestjs/testing';
import { SalaryWithdrawalsController } from './salary_withdrawals.controller';

describe('SalaryWithdrawalsController', () => {
  let controller: SalaryWithdrawalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalaryWithdrawalsController],
    }).compile();

    controller = module.get<SalaryWithdrawalsController>(SalaryWithdrawalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeRequestsController } from './employee_requests.controller';

describe('EmployeeRequestsController', () => {
  let controller: EmployeeRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeRequestsController],
    }).compile();

    controller = module.get<EmployeeRequestsController>(EmployeeRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

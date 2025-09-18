import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeRequestsService } from './employee_requests.service';

describe('EmployeeRequestsService', () => {
  let service: EmployeeRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeRequestsService],
    }).compile();

    service = module.get<EmployeeRequestsService>(EmployeeRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

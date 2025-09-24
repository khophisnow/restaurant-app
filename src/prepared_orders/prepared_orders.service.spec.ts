import { Test, TestingModule } from '@nestjs/testing';
import { PreparedOrdersService } from './prepared_orders.service';

describe('PreparedOrdersService', () => {
  let service: PreparedOrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreparedOrdersService],
    }).compile();

    service = module.get<PreparedOrdersService>(PreparedOrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

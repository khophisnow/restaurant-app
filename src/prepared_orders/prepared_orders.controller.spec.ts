import { Test, TestingModule } from '@nestjs/testing';
import { PreparedOrdersController } from './prepared_orders.controller';

describe('PreparedOrdersController', () => {
  let controller: PreparedOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreparedOrdersController],
    }).compile();

    controller = module.get<PreparedOrdersController>(PreparedOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

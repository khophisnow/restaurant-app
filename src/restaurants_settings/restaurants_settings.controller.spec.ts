import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsSettingsController } from './restaurants_settings.controller';

describe('RestaurantsSettingsController', () => {
  let controller: RestaurantsSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantsSettingsController],
    }).compile();

    controller = module.get<RestaurantsSettingsController>(
      RestaurantsSettingsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

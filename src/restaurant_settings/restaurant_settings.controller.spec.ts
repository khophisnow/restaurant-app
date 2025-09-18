import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantSettingsController } from './restaurant_settings.controller';

describe('RestaurantSettingsController', () => {
  let controller: RestaurantSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantSettingsController],
    }).compile();

    controller = module.get<RestaurantSettingsController>(
      RestaurantSettingsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

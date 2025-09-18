import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantsSettingsService } from './restaurants_settings.service';

describe('RestaurantsSettingsService', () => {
  let service: RestaurantsSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantsSettingsService],
    }).compile();

    service = module.get<RestaurantsSettingsService>(
      RestaurantsSettingsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Controller, Get, Post, Body } from '@nestjs/common';
import { RestaurantSettingsService } from './restaurant_settings.service';
import { RestaurantSettingsEntity } from './entities/restaurant_settings.entity';

@Controller('restaurant_settings')
export class RestaurantSettingsController {
  constructor(private restaurantService: RestaurantSettingsService) {}

  @Get()
  getAll(): Promise<RestaurantSettingsEntity[]> {
    return this.restaurantService.findAll();
  }

  @Post()
  create(@Body() data: Partial<RestaurantSettingsEntity>) {
    return this.restaurantService.create(data);
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { RestaurantsSettingsService } from './restaurants_settings.service';
import { RestaurantsSettingsEntity } from './entities/restaurants_settings.entity';

@Controller('restaurants_settings')
export class RestaurantsSettingsController {
  constructor(private restaurantService: RestaurantsSettingsService) {}

  @Get()
  getAll(): Promise<RestaurantsSettingsEntity[]> {
    return this.restaurantService.findAll();
  }

  @Post()
  create(@Body() data: Partial<RestaurantsSettingsEntity>) {
    return this.restaurantService.create(data);
  }
}

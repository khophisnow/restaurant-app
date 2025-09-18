import { Controller, Get, Post, Body } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsEntity } from './entities/restaurants.entity';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private restaurantService: RestaurantsService) {}

  @Get()
  getAll(): Promise<RestaurantsEntity[]> {
    return this.restaurantService.findAll();
  }

  @Post()
  create(@Body() data: Partial<RestaurantsEntity>) {
    return this.restaurantService.create(data);
  }
}

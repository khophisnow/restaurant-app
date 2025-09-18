import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestaurantsSettingsEntity } from './entities/restaurants_settings.entity';

@Injectable()
export class RestaurantsSettingsService {
  constructor(
    @InjectRepository(RestaurantsSettingsEntity)
    private restaurantRepo: Repository<RestaurantsSettingsEntity>,
  ) {}

  findAll() {
    return this.restaurantRepo.find();
  }

  create(data: Partial<RestaurantsSettingsEntity>) {
    const restaurant = this.restaurantRepo.create(data);
    return this.restaurantRepo.save(restaurant);
  }
}

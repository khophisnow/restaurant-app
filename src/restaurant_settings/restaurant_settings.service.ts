import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestaurantSettingsEntity } from './entities/restaurant_settings.entity';

@Injectable()
export class RestaurantSettingsService {
  constructor(
    @InjectRepository(RestaurantSettingsEntity)
    private restaurantRepo: Repository<RestaurantSettingsEntity>,
  ) {}

  findAll() {
    return this.restaurantRepo.find();
  }

  create(data: Partial<RestaurantSettingsEntity>) {
    const restaurant = this.restaurantRepo.create(data);
    return this.restaurantRepo.save(restaurant);
  }
}

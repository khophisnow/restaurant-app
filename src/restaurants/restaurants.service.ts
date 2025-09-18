import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestaurantsEntity } from './entities/restaurants.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(RestaurantsEntity)
    private restaurantsRepo: Repository<RestaurantsEntity>,
  ) {}

  findAll() {
    return this.restaurantsRepo.find();
  }

  create(data: Partial<RestaurantsEntity>) {
    const restaurants = this.restaurantsRepo.create(data);
    return this.restaurantsRepo.save(restaurants);
  }
}

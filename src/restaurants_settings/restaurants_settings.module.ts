import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsSettingsEntity } from './entities/restaurants_settings.entity';
import { RestaurantsSettingsService } from './restaurants_settings.service';
import { RestaurantsSettingsController } from './restaurants_settings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantsSettingsEntity])],
  providers: [RestaurantsSettingsService],
  controllers: [RestaurantsSettingsController],
})
export class RestaurantsSettingsModule {}

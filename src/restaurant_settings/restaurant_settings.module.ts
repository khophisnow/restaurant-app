import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantSettingsEntity } from './entities/restaurant_settings.entity';
import { RestaurantSettingsService } from './restaurant_settings.service';
import { RestaurantSettingsController } from './restaurant_settings.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantSettingsEntity])],
  providers: [RestaurantSettingsService],
  controllers: [RestaurantSettingsController],
})
export class RestaurantSettingsModule {}

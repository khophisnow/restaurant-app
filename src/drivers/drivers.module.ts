import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriversEntity } from './entities/drivers.entity';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriversEntity])],
  providers: [DriversService],
  controllers: [DriversController],
})
export class DriversModule {}

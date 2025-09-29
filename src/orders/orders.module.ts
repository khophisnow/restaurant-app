import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from './entities/orders.entity';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { UsersEntity } from 'src/users/entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdersEntity, UsersEntity])],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}

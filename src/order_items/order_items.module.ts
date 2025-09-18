import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemsEntity } from './entities/order_items.entity';
import { OrderItemsService } from './order_items.service';
import { OrderItemsController } from './order_items.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItemsEntity])],
  providers: [OrderItemsService],
  controllers: [OrderItemsController],
})
export class OrderItemsModule {}

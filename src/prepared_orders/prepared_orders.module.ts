import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreparedOrdersEntity } from './entities/prepared_orders.entity';
import { PreparedOrdersService } from './prepared_orders.service';
import { PreparedOrdersController } from './prepared_orders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PreparedOrdersEntity])],
  providers: [PreparedOrdersService],
  controllers: [PreparedOrdersController],
})
export class PreparedOrdersModule {}

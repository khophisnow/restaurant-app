import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersEntity } from './entities/customers.entity';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CustomersEntity])],
  providers: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersModule {}

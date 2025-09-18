import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesEntity } from './entities/employees.entity';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeesEntity])],
  providers: [EmployeesService],
  controllers: [EmployeesController],
})
export class EmployeesModule {}

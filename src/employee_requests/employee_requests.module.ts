import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRequestsEntity } from './entities/employee_requests.entity';
import { EmployeeRequestsService } from './employee_requests.service';
import { EmployeeRequestsController } from './employee_requests.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeRequestsEntity])],
  providers: [EmployeeRequestsService],
  controllers: [EmployeeRequestsController],
})
export class EmployeeRequestsModule {}

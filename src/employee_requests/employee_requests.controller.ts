import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmployeeRequestsService } from './employee_requests.service';
import { EmployeeRequestsEntity } from './entities/employee_requests.entity';

@Controller('employeeRequests')
export class EmployeeRequestsController {
  constructor(private employeeRequestsService: EmployeeRequestsService) {}

  @Get()
  getAll(): Promise<EmployeeRequestsEntity[]> {
    return this.employeeRequestsService.findAll();
  }

  @Post()
  create(@Body() data: Partial<EmployeeRequestsEntity>) {
    return this.employeeRequestsService.create(data);
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesEntity } from './entities/employees.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  getAll(): Promise<EmployeesEntity[]> {
    return this.employeesService.findAll();
  }

  @Post()
  create(@Body() data: Partial<EmployeesEntity>) {
    return this.employeesService.create(data);
  }
}

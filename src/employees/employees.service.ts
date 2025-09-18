import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeesEntity } from './entities/employees.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(EmployeesEntity)
    private employeesRepo: Repository<EmployeesEntity>,
  ) {}

  findAll() {
    return this.employeesRepo.find();
  }

  create(data: Partial<EmployeesEntity>) {
    const employees = this.employeesRepo.create(data);
    return this.employeesRepo.save(employees);
  }
}

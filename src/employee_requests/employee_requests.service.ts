import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeRequestsEntity } from './entities/employee_requests.entity';

@Injectable()
export class EmployeeRequestsService {
  constructor(
    @InjectRepository(EmployeeRequestsEntity)
    private employeeRequestsRepo: Repository<EmployeeRequestsEntity>,
  ) {}

  findAll() {
    return this.employeeRequestsRepo.find();
  }

  create(data: Partial<EmployeeRequestsEntity>) {
    const employeeRequests = this.employeeRequestsRepo.create(data);
    return this.employeeRequestsRepo.save(employeeRequests);
  }
}

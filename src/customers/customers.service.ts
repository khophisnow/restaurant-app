import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomersEntity } from './entities/customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomersEntity)
    private customersRepo: Repository<CustomersEntity>,
  ) {}

  findAll() {
    return this.customersRepo.find();
  }

  create(data: Partial<CustomersEntity>) {
    const customers = this.customersRepo.create(data);
    return this.customersRepo.save(customers);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyEntity } from './entities/company.entity';
@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(CompanyEntity)
    private companyRepo: Repository<CompanyEntity>,
  ) {}

  findAll() {
    return this.companyRepo.find();
  }

  create(data: Partial<CompanyEntity>) {
    const company = this.companyRepo.create(data);
    return this.companyRepo.save(company);
  }
}

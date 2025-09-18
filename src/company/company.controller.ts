import { Controller, Get, Post, Body } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyEntity } from './entities/company.entity';

@Controller('companies')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  getAll(): Promise<CompanyEntity[]> {
    return this.companyService.findAll();
  }

  @Post()
  create(@Body() data: Partial<CompanyEntity>) {
    return this.companyService.create(data);
  }
}

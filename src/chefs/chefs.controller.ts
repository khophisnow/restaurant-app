import { Controller, Get, Post, Body } from '@nestjs/common';
import { ChefsService } from './chefs.service';
import { ChefsEntity } from './entities/chefs.entity';

@Controller('chefs')
export class ChefsController {
  constructor(private chefsService: ChefsService) {}

  @Get()
  getAll(): Promise<ChefsEntity[]> {
    return this.chefsService.findAll();
  }

  @Post()
  create(@Body() data: Partial<ChefsEntity>) {
    return this.chefsService.create(data);
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryEntity } from './entities/inventory.entity';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}

  @Get()
  getAll(): Promise<InventoryEntity[]> {
    return this.inventoryService.findAll();
  }

  @Post()
  create(@Body() data: Partial<InventoryEntity>) {
    return this.inventoryService.create(data);
  }
}

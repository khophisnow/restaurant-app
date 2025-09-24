import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryEntity } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(InventoryEntity)
    private inventoryRepo: Repository<InventoryEntity>,
  ) {}

  findAll() {
    return this.inventoryRepo.find();
  }

  create(data: Partial<InventoryEntity>) {
    const inventory = this.inventoryRepo.create(data);
    return this.inventoryRepo.save(inventory);
  }
}

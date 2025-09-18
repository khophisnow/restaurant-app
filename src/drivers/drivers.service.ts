import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriversEntity } from './entities/drivers.entity';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(DriversEntity)
    private driversRepo: Repository<DriversEntity>,
  ) {}

  findAll() {
    return this.driversRepo.find();
  }

  create(data: Partial<DriversEntity>) {
    const drivers = this.driversRepo.create(data);
    return this.driversRepo.save(drivers);
  }
}

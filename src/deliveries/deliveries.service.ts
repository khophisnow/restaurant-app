import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveriesEntity } from './entities/deliveries.entity';

@Injectable()
export class DeliveriesService {
  constructor(
    @InjectRepository(DeliveriesEntity)
    private deliveriesRepo: Repository<DeliveriesEntity>,
  ) {}

  findAll() {
    return this.deliveriesRepo.find();
  }

  create(data: Partial<DeliveriesEntity>) {
    const deliveries = this.deliveriesRepo.create(data);
    return this.deliveriesRepo.save(deliveries);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentsEntity } from './entities/payments.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(PaymentsEntity)
    private paymentsRepo: Repository<PaymentsEntity>,
  ) {}

  findAll() {
    return this.paymentsRepo.find();
  }

  create(data: Partial<PaymentsEntity>) {
    const payments = this.paymentsRepo.create(data);
    return this.paymentsRepo.save(payments);
  }
}

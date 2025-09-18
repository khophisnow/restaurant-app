import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewsEntity } from './entities/reviews.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(ReviewsEntity)
    private reviewsRepo: Repository<ReviewsEntity>,
  ) {}

  findAll() {
    return this.reviewsRepo.find();
  }

  create(data: Partial<ReviewsEntity>) {
    const reviews = this.reviewsRepo.create(data);
    return this.reviewsRepo.save(reviews);
  }
}

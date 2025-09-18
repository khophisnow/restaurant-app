import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsEntity } from './entities/reviews.entity';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Get()
  getAll(): Promise<ReviewsEntity[]> {
    return this.reviewsService.findAll();
  }

  @Post()
  create(@Body() data: Partial<ReviewsEntity>) {
    return this.reviewsService.create(data);
  }
}

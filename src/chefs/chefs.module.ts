import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChefsEntity } from './entities/chefs.entity';
import { ChefsService } from './chefs.service';
import { ChefsController } from './chefs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ChefsEntity])],
  providers: [ChefsService],
  controllers: [ChefsController],
})
export class ChefsModule {}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UsersEntity } from '../../users/entities/users.entity';
import { OrdersEntity } from '../../orders/entities/orders.entity';

@Entity('reviews')
export class ReviewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity; // customer

  @ManyToOne(() => OrdersEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrdersEntity;

  @Column('int')
  rating: number; // 1–5

  @Column('text', { nullable: true })
  comment: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { RestaurantsEntity } from '../../restaurants/entities/restaurants.entity';
import { UsersEntity } from '../../users/entities/users.entity';
import { OrdersEntity } from '../../orders/entities/orders.entity';

@Entity('reviews')
export class ReviewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => RestaurantsEntity, (restaurant) => restaurant.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantsEntity;

  @ManyToOne(() => UsersEntity, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;

  @ManyToOne(() => OrdersEntity, (order) => order.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'order_id' })
  order: OrdersEntity;

  @Column({ type: 'int' })
  rating: number; // 1–5

  @Column({ type: 'text', nullable: true })
  comment: string;

  @CreateDateColumn()
  created_at: Date;
}

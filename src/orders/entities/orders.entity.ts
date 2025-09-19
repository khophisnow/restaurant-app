import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RestaurantsEntity } from '../../restaurants/entities/restaurants.entity';
import { UsersEntity } from '../../users/entities/users.entity';

@Entity('orders')
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => RestaurantsEntity, (restaurant) => restaurant.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantsEntity;

  @Column({ type: 'int' })
  order_number: number;

  @ManyToOne(() => UsersEntity, (user) => user.id, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'varchar' })
  payment_method: string;

  @Column({ type: 'varchar' })
  order_type: string; // pickup or delivery

  @Column({ type: 'text', nullable: true })
  delivery_location: string;

  @Column({
    type: 'varchar',
    default: 'pending',
  })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

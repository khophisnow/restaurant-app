import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { RestaurantsEntity } from '../../restaurants/entities/restaurants.entity';
import { OrdersEntity } from '../../orders/entities/orders.entity';

@Entity('payments')
export class PaymentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => RestaurantsEntity, (restaurant) => restaurant.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantsEntity;

  @ManyToOne(() => OrdersEntity, (order) => order.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'order_id' })
  order: OrdersEntity;

  @Column('decimal')
  amount: number;

  @Column({ type: 'varchar' })
  method: string; // card, cash, mobile_money

  @Column({ type: 'varchar' })
  status: string; // pending, completed, failed

  @Column({ type: 'timestamp' })
  transaction_date: Date;
}

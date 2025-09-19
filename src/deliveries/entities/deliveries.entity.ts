import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { RestaurantsEntity } from '../../restaurants/entities/restaurants.entity';
import { OrdersEntity } from '../../orders/entities/orders.entity';
import { DriversEntity } from '../../drivers/entities/drivers.entity';

@Entity('deliveries')
export class DeliveriesEntity {
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

  @ManyToOne(() => DriversEntity, (driver) => driver.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'driver_id' })
  driver: DriversEntity;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  delivery_fee: number;

  @Column({ type: 'varchar' })
  status: string; // 'assigned', 'in_progress', 'delivered'

  @Column({ type: 'timestamp', nullable: true })
  delivered_at: Date;
}

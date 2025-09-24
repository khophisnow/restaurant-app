import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrdersEntity } from '../../orders/entities/orders.entity';
import { UsersEntity } from '../../users/entities/users.entity';

@Entity('deliveries')
export class DeliveriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => OrdersEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrdersEntity;

  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'driver_id' })
  driver: UsersEntity;

  @Column('decimal')
  delivery_fee: number;

  @Column()
  status: 'assigned' | 'in_progress' | 'delivered';

  @Column({ type: 'timestamp', nullable: true })
  picked_up_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  delivered_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

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
import { OrderStatuses } from '../enums/order-statuses.enum';
import { OrderType } from '../enums/order-type.enum';

@Entity('orders')
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_number: number;

  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity; // customer

  @Column('decimal')
  total_price: number;

  @Column()
  payment_method: string;

  @Column({
    type: 'enum',
    enum: OrderType,
  })
  order_type: OrderType;

  @Column('text', { nullable: true })
  delivery_location: string;

  @Column({
    type: 'enum',
    enum: OrderStatuses,
  })
  status: OrderStatuses;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderItemsEntity } from '../../order_items/entities/order_items.entity';
import { UsersEntity } from '../../users/entities/users.entity';
import { PreparedOrdersStatuses } from '../enums/prepared-order-status.enum';

@Entity('prepared_orders')
export class PreparedOrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => OrderItemsEntity)
  @JoinColumn({ name: 'order_item_id' })
  order_item: OrderItemsEntity;

  @Column({
    type: 'enum',
    enum: PreparedOrdersStatuses,
  })
  status: PreparedOrdersStatuses;

  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'prepared_by' })
  prepared_by: UsersEntity;

  @Column({ type: 'timestamp', nullable: true })
  prepared_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

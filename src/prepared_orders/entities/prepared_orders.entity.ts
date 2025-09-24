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

@Entity('prepared_orders')
export class PreparedOrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => OrderItemsEntity)
  @JoinColumn({ name: 'order_item_id' })
  order_item: OrderItemsEntity;

  @Column()
  status: 'not_ready' | 'ready';

  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'prepared_by' })
  prepared_by: UsersEntity; // chef

  @Column({ type: 'timestamp', nullable: true })
  prepared_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

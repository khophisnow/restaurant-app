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
import { MenuEntity } from '../../menu/entities/menu.entity';

@Entity('order_items')
export class OrderItemsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => OrdersEntity)
  @JoinColumn({ name: 'order_id' })
  order: OrdersEntity;

  @ManyToOne(() => MenuEntity)
  @JoinColumn({ name: 'item_id' })
  item: MenuEntity;

  @Column('int')
  quantity: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

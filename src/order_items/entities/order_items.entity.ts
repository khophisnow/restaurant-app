import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('order_items')
export class OrderItemsEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  order_id: string;

  @Column()
  item_id: string;

  @Column()
  quantity: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

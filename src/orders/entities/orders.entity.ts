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

  @Column()
  order_type: 'pickup' | 'delivery';

  @Column('text', { nullable: true })
  delivery_location: string;

  @Column()
  status:
    | 'pending'
    | 'confirmed'
    | 'preparing'
    | 'out_for_delivery'
    | 'completed'
    | 'cancelled';

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

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

@Entity('inventory')
export class InventoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_name: string;

  @Column('int')
  quantity: number;

  @Column()
  unit: string;

  @Column('int')
  reorder_level: number;

  @ManyToOne(() => UsersEntity)
  @JoinColumn({ name: 'managed_by' })
  managed_by: UsersEntity; // chef who updates it

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

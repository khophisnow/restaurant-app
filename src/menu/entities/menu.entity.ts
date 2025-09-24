import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoriesEntity } from '../../categories/entities/categories.entity';

@Entity('menu')
export class MenuEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  item_name: string;

  @Column('decimal')
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => CategoriesEntity)
  @JoinColumn({ name: 'category_id' })
  category: CategoriesEntity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

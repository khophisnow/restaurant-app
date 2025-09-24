import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UsersEntity } from '../../users/entities/users.entity';

@Entity('chefs')
export class ChefsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UsersEntity)
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;

  @Column()
  specialty: string;

  @Column({ type: 'date' })
  hire_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserType } from '../enums/users-type.enum';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column({ unique: true })
  username: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  hashed_password: string;

  @Column({
    type: 'enum',
    enum: UserType,
  })
  user_type: UserType;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

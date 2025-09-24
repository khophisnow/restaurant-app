import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @Column({ type: 'text' })
  user_type: 'admin' | 'chef' | 'driver' | 'customer';

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

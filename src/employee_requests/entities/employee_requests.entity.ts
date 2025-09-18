import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('employee_requests')
export class EmployeeRequestsEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  restaurant_id: string;

  @Column()
  full_name: string;

  @Column()
  username: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  hashed_password: string;

  @Column()
  role_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('salary_withdrawals')
export class SalaryWithdrawalsEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  employee_id: string;

  @Column()
  amount: string;

  @Column()
  status: string;

  @CreateDateColumn()
  requested_at: Date;

  @UpdateDateColumn()
  processed_at: Date;
}

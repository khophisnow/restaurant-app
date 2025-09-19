import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { EmployeesEntity } from '../../employees/entities/employees.entity';

@Entity('salary_withdrawals')
export class SalaryWithdrawalsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => EmployeesEntity, (employee) => employee.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'employee_id' })
  employee: EmployeesEntity;

  @Column('decimal')
  amount: number;

  @Column({ type: 'varchar' })
  status: string; // pending, approved, rejected, paid

  @Column({ type: 'timestamp' })
  requested_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  processed_at: Date;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EmployeesEntity } from '../../employees/entities/employees.entity';

@Entity('employee_requests')
export class EmployeeRequestsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => EmployeesEntity, (employee) => employee.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'employee_id' })
  employee: EmployeesEntity;

  @Column({ type: 'varchar' })
  request_type: string; // leave, equipment, advance

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  status: string; // pending, approved, rejected

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

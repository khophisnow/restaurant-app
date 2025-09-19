import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RestaurantsEntity } from '../../restaurants/entities/restaurants.entity';
import { UsersEntity } from '../../users/entities/users.entity';

@Entity('employees')
export class EmployeesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => RestaurantsEntity, (restaurant) => restaurant.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantsEntity;

  @ManyToOne(() => UsersEntity, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;

  @Column({ type: 'varchar' })
  position: string; // driver, cashier, manager

  @Column('decimal')
  salary: number;

  @Column({ type: 'timestamp' })
  hired_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { RestaurantsEntity } from '../../restaurants/entities/restaurants.entity';
import { RolesEntity } from '../../roles/entities/roles.entity';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 🔗 Relation to restaurants (optional if single restaurant)
  @ManyToOne(() => RestaurantsEntity, (restaurant) => restaurant.users, {
    nullable: true, // only used in marketplace mode
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantsEntity;

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

  // 🔗 Relation to roles
  @ManyToOne(() => RolesEntity, (role) => role.users, {
    eager: true, // auto-load role
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'role_id' })
  role: RolesEntity;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

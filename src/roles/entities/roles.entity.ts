import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { RestaurantsEntity } from '../../restaurants/entities/restaurants.entity';
import { UsersEntity } from '../../users/entities/users.entity';

@Entity('roles')
export class RolesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // 🔗 Many roles belong to one restaurant
  @ManyToOne(() => RestaurantsEntity, (restaurant) => restaurant.roles, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantsEntity;

  // 🔗 One role can have many users
  @OneToMany(() => UsersEntity, (user) => user.role)
  users: UsersEntity[];

  @Column()
  name: string; // e.g. 'customer', 'admin', 'delivery_driver'
}

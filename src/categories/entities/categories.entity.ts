import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { RestaurantsEntity } from '../../restaurants/entities/restaurants.entity';

@Entity('categories')
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => RestaurantsEntity, (restaurant) => restaurant.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantsEntity;

  @Column({ type: 'varchar' })
  name: string;
}

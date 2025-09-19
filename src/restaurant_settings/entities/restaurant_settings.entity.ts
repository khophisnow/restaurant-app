import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { RestaurantsEntity } from '../../restaurants/entities/restaurants.entity';

@Entity('restaurant_settings')
export class RestaurantSettingsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  theme_color: string;

  @Column()
  currency: string;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  tax_rate: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  delivery_fee: number;

  @Column('text', { nullable: true })
  opening_hours: string; // JSON string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // 🔗 Relation back to restaurant
  @OneToOne(() => RestaurantsEntity, (restaurant) => restaurant.settings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'restaurant_id' }) // foreign key
  restaurant: RestaurantsEntity;
}

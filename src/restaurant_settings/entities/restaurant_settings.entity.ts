import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('restaurant-settings')
export class RestaurantSettingsEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  restaurant_id: string;

  @Column()
  theme_color: string;

  @Column()
  currency: string;

  @Column()
  tax_rate: string;

  @Column()
  delivery_fee: string;

  @Column()
  opening_hours: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

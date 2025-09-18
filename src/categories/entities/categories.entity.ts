import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export class CategoriesEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  restaurant_id: string;

  @Column()
  name: string;
}

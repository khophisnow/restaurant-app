import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('roles')
export class RolesEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  restaurant_id: string;

  @Column()
  name: string;
}

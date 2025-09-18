import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('drivers')
export class DriversEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  restaurant_id: string;

  @Column()
  user_id: string;

  @Column()
  vehicle_type: string;

  @Column()
  license_number: string;
}

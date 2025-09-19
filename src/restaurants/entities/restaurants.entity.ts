import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CompanyEntity } from '../../company/entities/company.entity';
import { UsersEntity } from '../../users/entities/users.entity';
import { RolesEntity } from '../../roles/entities/roles.entity';
import { MenuEntity } from '../../menu/entities/menu.entity';
import { CategoriesEntity } from '../../categories/entities/categories.entity';
import { OrdersEntity } from '../../orders/entities/orders.entity';
import { DeliveriesEntity } from '../../deliveries/entities/deliveries.entity';
import { PaymentsEntity } from '../../payments/entities/payments.entity';
import { EmployeesEntity } from '../../employees/entities/employees.entity';
import { ReviewsEntity } from '../../reviews/entities/reviews.entity';
import { RestaurantSettingsEntity } from '../../restaurant_settings/entities/restaurant_settings.entity';

@Entity('restaurants')
export class RestaurantsEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => CompanyEntity, (company) => company.restaurants, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  logoUrl: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // 🔗 Relations
  @OneToOne(() => RestaurantSettingsEntity, (settings) => settings.restaurant)
  settings: RestaurantSettingsEntity;

  @OneToMany(() => UsersEntity, (user) => user.restaurant)
  users: UsersEntity[];

  @OneToMany(() => RolesEntity, (role) => role.restaurant)
  roles: RolesEntity[];

  @OneToMany(() => MenuEntity, (menu) => menu.restaurant)
  menus: MenuEntity[];

  @OneToMany(() => CategoriesEntity, (category) => category.restaurant)
  categories: CategoriesEntity[];

  @OneToMany(() => OrdersEntity, (order) => order.restaurant)
  orders: OrdersEntity[];

  @OneToMany(() => DeliveriesEntity, (delivery) => delivery.restaurant)
  deliveries: DeliveriesEntity[];

  @OneToMany(() => PaymentsEntity, (payment) => payment.restaurant)
  payments: PaymentsEntity[];

  @OneToMany(() => EmployeesEntity, (employee) => employee.restaurant)
  employees: EmployeesEntity[];

  @OneToMany(() => ReviewsEntity, (review) => review.restaurant)
  reviews: ReviewsEntity[];
}

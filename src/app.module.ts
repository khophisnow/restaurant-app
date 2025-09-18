import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { RestaurantSettingsModule } from './restaurant_settings/restaurant_settings.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { MenuModule } from './menu/menu.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order_items/order_items.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { DriversModule } from './drivers/drivers.module';
import { PaymentsModule } from './payments/payments.module';
import { EmployeesModule } from './employees/employees.module';
import { SalaryWithdrawalsModule } from './salary_withdrawals/salary_withdrawals.module';
import { EmployeeRequestsModule } from './employee_requests/employee_requests.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Jmp-bs@MySQL..5953',
      database: 'restaurant_db',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ use only for dev (it auto-creates tables)
    }),
    CompanyModule,
    RestaurantsModule,
    RestaurantSettingsModule,
    UsersModule,
    RolesModule,
    MenuModule,
    CategoriesModule,
    OrdersModule,
    OrderItemsModule,
    DeliveriesModule,
    DriversModule,
    PaymentsModule,
    EmployeesModule,
    SalaryWithdrawalsModule,
    EmployeeRequestsModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

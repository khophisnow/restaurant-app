import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order_items/order_items.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { DriversModule } from './drivers/drivers.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ChefsModule } from './chefs/chefs.module';
import { CustomersModule } from './customers/customers.module';
import { InventoryModule } from './inventory/inventory.module';
import { PreparedOrdersModule } from './prepared_orders/prepared_orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'restaurant-admin',
      password: 'Mysql@restaurant..1234',
      database: 'restaurant_db',
      autoLoadEntities: true,
      synchronize: true, // ⚠️ use only for dev (it auto-creates tables)
    }),
    MenuModule,
    CategoriesModule,
    OrdersModule,
    OrderItemsModule,
    DeliveriesModule,
    DriversModule,
    ReviewsModule,
    ChefsModule,
    CustomersModule,
    InventoryModule,
    PreparedOrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
